<style lang="stylus">
    .landing
        h1
            font-size: 2.8em
            font-weight: 700
            text-align: center
            margin-bottom: 10px

            +below(460px)
                font-size: 2.5em;

            +below(420px)
                font-size: 2.2em;

            +below(350px)
                font-size: 2em;

            +above(4)
                margin-bottom: 20px
                font-size: 4em
</style>

<svelte:head>
    <title>Wout De Puysseleir</title>
    <meta name="Description" content="Website of Wout De Puysseleir">
</svelte:head>

<section class="landing center full-page">
    <h1>Wout De&nbsp;Puysseleir</h1>
    <h2>Full-Stack Web&nbsp;Developer</h2>
</section>
<section class="section">
    <div class="container">
        <h1>About</h1>
        <hr>
        <p>I'm a freelance web developer working fully remote. The sharpest tools in my toolbox are <code>Python (2, 3)</code>, <code>Django</code>, <code>Vue</code> & <code>Docker</code>.</p>
        <p>
            When I'm not programming you can see me hiking up a mountain,
            adapting more of my tools to the <a rel="noopener" target="_blank" href="https://github.com/morhetz/gruvbox-contrib">Gruvbox</a> colorscheme,
            drinking a cocktail or watching a movie.
        </p>
        <p>Born and raised in Belgium, living in Vancouver, Canada.</p>
    </div>
</section>
