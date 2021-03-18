<script>
    import AnchorTitle from '../components/AnchorTitle.svelte'
</script>

<svelte:head>
    <title>Wout De Puysseleir</title>
    <meta name="Description" content="Website of Wout De Puysseleir">
</svelte:head>

<section class="landing center full-page">
    <h1>Wout De&nbsp;Puysseleir</h1>
    <h2>Full-Stack Web&nbsp;Developer</h2>
    <div class="navigation">
        <a href="#about" class="border">About</a>
    </div>
</section>
<section class="section">
    <div class="container">
        <AnchorTitle anchor="about">About</AnchorTitle>
        <hr>
        <p>I'm a freelance web developer working fully remote. The sharpest tools in my toolbox are <code>Python (2, 3)</code>, <code>Django</code>, <code>Svelte</code>, <code>Vue</code> & <code>Docker</code>.</p>
        <p>Born and raised in Belgium, currently living in Vancouver, Canada.</p>
    </div>
</section>

<style lang="stylus">
    @import '../styles/variables'

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

        .navigation
            display flex
            margin-top 30px
            font-weight: 600;

            a
                text-decoration none
                font-size 1.1em
                padding 10px 18px
                border 2px dashed @color
                border-radius 5px
                background-color darken(background, 20%)
                box-shadow 8px 8px 0 darken(@background-color, 20%)
                line-height 1em
                text-transform uppercase
                transition-duration 1000ms

                &:hover
                    border-style solid
                    color lighten(cyan-bright, 20%)

                &:not(:last-child)
                    margin-right 20px
</style>
