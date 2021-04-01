<script>
    import {Chart, Grid, Svg, SvgScatterplot, Quadtree, SvgPoint, SvgLine} from '@sveltejs/pancake'

    export let data
    export let minX
    export let maxX
    export let minY
    export let maxY
    export let showTrendLine = true

    $: totalX = data.map((p) => { return p[0] }).reduce((a, b) => { return a + b })
    $: totalY = data.map((p) => { return p[1] }).reduce((a, b) => { return a + b })
    $: totalXpow2 = data.map((p) => { return p[0] * p[0] }).reduce((a, b) => { return a + b })
    $: totalYpow2 = data.map((p) => { return p[1] * p[1] }).reduce((a, b) => { return a + b })
    $: totalXY = data.map((p) => { return p[0] * p[1] }).reduce((a, b) => { return a + b })
    $: constant = ((totalY*totalXpow2) - (totalX*totalXY)) / (data.length*totalXpow2-totalX*totalX)
    $: coefficient = ((data.length*totalXY) - (totalX*totalY)) / (data.length*totalXpow2-totalX*totalX)
    $: trendLine = [{x:minX, y:minX * coefficient + constant}, {x:maxX, y:maxX * coefficient + constant}]
</script>

<figure>
    <div class="chart">
        <Chart x1={minX} x2={maxX} y1={minY} y2={maxY}>
            <Grid horizontal count={5} let:value let:first>
                <div class="grid-line horizontal" class:first><span>{value}</span></div>
            </Grid>

            <Grid vertical count={3} let:value>
                <div class="grid-line vertical"></div>
                <span class="year-label">{value}</span>
            </Grid>

            <Svg>
                <SvgScatterplot data={data} x="{d => d[0]}" y="{d => d[1]}" let:d>
                    <path class="data" {d}/>
                </SvgScatterplot>
                {#if showTrendLine}
                    <SvgLine data="{trendLine}" let:d>
                        <path class="trend-line" d={d}/>
                    </SvgLine>
                {/if}

                <Quadtree data={data} x="{d => d[0]}" y="{d => d[1]}" let:closest>
                    {#if closest}
                        <SvgPoint x={closest[0]} y={closest[1]} let:d>
                            <path class="highlight" d={d}/>
                        </SvgPoint>
                    {/if}
                </Quadtree>
            </Svg>
        </Chart>
    </div>
</figure>

<style lang="stylus">
    @import '../../../../../styles/variables.styl'
    lines-color = darken(grey, 50%)

    .chart
        height 250px
        padding 1em
        margin-bottom 0 20px
        width 500px

        .legend
            color lines-color
            &.y
                writing-mode bt-lr


    .grid-line
        position relative
        display block

        &.horizontal
            width calc(100% + 2em)
            left -2em
            border-bottom 1px dashed lines-color

        &.vertical
            height 100%
            border-left 1px dashed lines-color

        span
            position absolute
            left 0
            bottom 2px
            font-family sans-serif
            font-size 14px
            color grey

    .year-label
        position absolute
        width 4em
        left -2em
        bottom -22px
        font-family sans-serif
        font-size 14px
        color grey
        text-align: center

    path
        &.data
            stroke yellow
            stroke-linejoin round
            stroke-linecap round
            stroke-width 6px
            fill none

        &.trend-line
            stroke blue
            stroke-linejoin round
            stroke-linecap round
            stroke-width 3px
            fill none

        &.highlight
            stroke lighten(yellow-bright, 10%)
            stroke-linejoin round
            stroke-linecap round
            stroke-width 10px
            fill none
</style>


