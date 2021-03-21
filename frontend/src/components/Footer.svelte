<script>
    import Fa from 'svelte-fa'
    import { faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons'
    import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

    let currentYear = new Date().getFullYear()
</script>

<style lang="stylus">
    @import '../styles/variables'

    footer
        grid-area: footer;
        background-color: background
        display: flex;
        flex-direction: column;
        padding: 80px 20px;
        font-size 0.8em

        +mobile()
            flex-direction: column

    ul
        display: flex
        align-items: center
        justify-content: center
        text-align: center
        min-width: 100%
        margin: 0
        padding: 0
        margin-bottom: 20px

        :not(:first-child)
            margin-left: 20px

    li
        display: block
        a
            color white

    p
        margin: 0
        text-align: center
</style>

<footer>
    <ul>
        <li><a rel="noopener" target="_blank" href="https://github.com/woutdp/wout.space"><Fa icon={faCode} size="1.5x"/></a></li>
        <li><a rel="noopener" target="_blank" href="https://github.com/woutdp"><Fa icon={faGithub} size="1.5x"/></a></li>
        <li><a rel="noopener" target="_blank" href="https://www.linkedin.com/in/woutdp/"><Fa icon={faLinkedin} size="1.5x"/></a></li>
        <li><a rel="noopener" target="_blank" href="mailto:contact@wout.space"><Fa icon={faEnvelope} size="1.5x"/></a></li>
    </ul>
    <p>© { currentYear } - Wout De Puysseleir</p>
</footer>
