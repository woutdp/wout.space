---
title: Statistical regression, p-values and r²
date: "2021-03-31T00:00:00"
tags:
- statistics
excerpt: Let's take a look at statistics
---

<script>
    import ScatterPlot from './components/ScatterPlot.svelte'

    let minMovies = 0
    let maxMovies = 30
    let minShoeSize = 6
    let maxShoeSize = 15
    let constant = 7.5
    let amount = 70
    let randomization = 50
    let coefficient = 0.16

    function clamp(n, min, max) {
        return Math.min(Math.max(n, min), max);
    }

    // Movies per month vs shoe size
    $: data = Array.from(
        {length: amount}, 
        (_, x) => [
           clamp(Math.floor(x/(amount-1)*maxMovies), minMovies, maxMovies),
           clamp(Math.floor(x/amount*maxMovies) * coefficient + constant + ((Math.random()-.5)*randomization/100)*8, minShoeSize, maxShoeSize)
        ]
    )
</script>

Let's say we have some data about people's shoe size, and the amount of movies they watch. 
Let's plot it.

<ScatterPlot {data} minX={minMovies} maxX={maxMovies} minY={minShoeSize} maxY={maxShoeSize} showTrendLine={false}/>

The x-axis defines the movies watched per month for the subject. The y-axis defines the shoe size of the person.

So as you can see there's sort of a trend going on. The individual datapoints are going <strong>{#if coefficient > 0}up{:else}down{/if}</strong>.

We can draw a line through the data that approximates the trend.

<ScatterPlot {data} minX={minMovies} maxX={maxMovies} minY={minShoeSize} maxY={maxShoeSize}/>

With this <strong>trend line</strong> we can predict next datapoints! This is very useful for many different applications.

The trend line is defined by `Y = a + bX`

In this formula _a_ is the `constant` and _b_ is the `coefficient`.
The **sign** of the coefficient tells us something about the slope of the line, is it going {#if coefficient > 0}**up** or down{:else}up or **down**{/if}?

<div class="control"><span>Constant (a): </span><input bind:value={constant} type="range" id="constant" name="constant" min="{minShoeSize}" step="0.5" max="{maxShoeSize}"></div>
<div class="control"><span>Coefficient (b): </span><input bind:value={coefficient} type="range" id="coefficient" name="coefficient" min="-0.5" step="0.01" max="0.5"></div>

Formula: <code>Y = {constant} + {coefficient}X</code>

# p-values
Next up we want to make some sort of prediction about the reliability of our result. 
In theory you can draw a line through any collection of datapoints. 
Drawing a trend line doesn't mean it will follow the prediction with a high certainty.
We want to make sure our line is actually usefull and a good predictor of future data.

For this we can use a p-value

<div>
    <p>Amount: {amount}</p>
    <input bind:value={amount} type="range" id="amount" name="amount" min="5" max="100">
</div>
<input bind:value={randomization} type="range" id="randomization" name="randomization" min="0" max="100">
<p>Randomization: {randomization}</p>
<p>Coefficient: {coefficient}</p>
<p>Constant: {constant}</p>

<style lang="stylus">
    .control
        display flex
        justify-content center
        align-items center
        
        span    
            margin-right 10px
</style>