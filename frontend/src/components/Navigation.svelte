<style lang="stylus">
    nav
        grid-area nav
        padding 0 1em
        margin 20px

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
</style>

<nav>
    <ul>
        <li><a sapper:prefetch href='/'>home</a></li>
        <li><a sapper:prefetch href='/blog'>blog</a></li>
    </ul>
</nav>
