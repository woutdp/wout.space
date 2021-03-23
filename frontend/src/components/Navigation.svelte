<nav>
    <ul>
        <li><a sapper:prefetch href='/'>Home</a></li>
        <li><a sapper:prefetch href='/blog'>Blog</a></li>
    </ul>
</nav>

<style lang="stylus">
    @import '../styles/variables.styl'

    nav
        grid-area nav
        padding 0
        margin 0.5em 1em
        +above(700px)
            padding 0 1em
            margin 10px

    ul
        display flex
        margin 0
        padding 0
        text-align center

    li
        display block

    a
        text-decoration none
        padding 1em 0.5em
        display block
        &:hover
            color lighten(cyan-bright, 20%)
</style>

