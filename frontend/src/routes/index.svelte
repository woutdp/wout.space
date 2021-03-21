<script>
    import AnchorTitle from '../components/AnchorTitle.svelte'
    import Fa from 'svelte-fa'
    import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

    let technologies = [
        {category: 'Backend', items: ['Python 2/3', 'Django', 'Flask', 'Sapper', 'Nuxt']},
        {category: 'Frontend', items: ['Svelte', 'Vue', 'Javascript', 'Typescript', 'HTML', 'CSS']},
        {category: 'Tools', items: ['Git', 'Linux', 'Docker', 'PostgreSQL']},
        {category: 'Infrastructure', items: ['Heroku', 'AWS', 'Netlify', 'Cloudflare']},
    ]

    let wantToLearnMore = [
        {category: 'Backend', items: ['Elixir', 'Phoenix', 'C++', 'Rust', 'Go', 'Ruby']},
        {category: 'Frontend', items: ['React', 'Canvas', 'D3']},
        {category: 'Tools', items: ['Shopify']},
        {category: 'Infrastructure', items: ['Kubernetes', 'Azure', 'GCP']},
    ]
</script>

<svelte:head>
    <title>Wout De Puysseleir</title>
    <meta name="Description" content="Website of Wout De Puysseleir">
</svelte:head>

<section class="landing center full-page">
    <h1>Wout De&nbsp;Puysseleir</h1>
    <h2>Full-Stack Web&nbsp;Developer</h2>
    <div class="navigation">
        <a href="#about">About</a>
        <a rel="noopener" target="_blank" href="mailto:contact@wout.space"><span class="icon"><Fa icon={faEnvelope}/></span> Contact Me</a>
    </div>
</section>
<section class="section yellow">
    <div class="container">
        <AnchorTitle anchor="about">About</AnchorTitle>
        <hr>
        <p>
            Web developer working fully <b>remote</b>. Born and raised in Belgium, currently living in Vancouver, Canada.
            The sharpest tools in my toolbox are <code>Python (2, 3)</code>, <code>Django</code>, <code>Svelte</code>, <code>Vue</code> & <code>Docker</code>.
        </p>
        <p>
            <b>+5 years of professional experience</b> developing software and <b>+10 years</b> messing around with software in various ways.
        </p>
        <p>
            If you already have a website, or you want to create a website, or you have some pesky bug you're dealing with,
            please <a rel="noopener" target="_blank" href="mailto:contact@wout.space">contact me</a>.
            I have a particular interest and experience in cleaning up legacy systems.
            <br>
            Currently open for <b>freelance</b>, <b>part-time</b>, <b>remote</b> work.
        </p>
        <p>Not sure my skills are aligned with your software stack? Check out the <a href="#technologies">technologies</a> I've worked with.</p>
    </div>
</section>
<section class="section">
    <div class="container">
        <AnchorTitle anchor="technologies">Technologies</AnchorTitle>
        <hr>
        <p>
            Over the years I've worked with a lot of languages and technologies.
            Some of them I'm very comfortable with, others I've worked with briefly or just have an interest in working with.
            I've split them up in 2 categories <i>Comfort</i> and <i>Interest</i>.
        </p>
        <div class="technologies-container">
            <h2 class="text-align-center">Comfort Zone</h2>
            <div class="technologies">
                {#each technologies as technology}
                    <div class="category">
                        <span>{technology.category}</span>
                        <ul>
                            {#each technology.items as technology}
                                <li><code>{technology}</code></li>
                            {/each}
                        </ul>
                    </div>
                {/each}
            </div>
            <h2 class="text-align-center">Interest Zone</h2>
            <div class="technologies">
                {#each wantToLearnMore as technology}
                    {#if technology.items.length > 0}
                        <div class="category">
                            <span>{technology.category}</span>
                            <ul>
                                {#each technology.items as technology}
                                    <li><code>{technology}</code></li>
                                {/each}
                            </ul>
                        </div>
                    {/if}
                {/each}
            </div>
        </div>
        <p class="footnote text-align-center">
            * These lists are definitely not complete, some stuff I might be familiar with or worked with, but maybe I didn't enjoy it, or it was too obscure.
        </p>
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

                .icon
                    margin-right 8px

                &:hover
                    border-style solid
                    color lighten(cyan-bright, 20%)

                &:not(:last-child)
                    margin-right 20px

    .technologies-container
        margin-top 40px

    .technologies
        display flex
        justify-content center

        +below(700px)
            flex-direction column

        .category
            padding 20px

            +below(800px)
                padding 10px

        span
            display flex

        ul
          list-style-type none
          padding 0
</style>
