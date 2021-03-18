<script>
    export let anchor
</script>

<a href="#{anchor}" id="{anchor}"><slot/></a>

<style lang="stylus">
    @import '../styles/variables'

    a
        margin: 0 0 0.5em 0
        font-weight: 400
        line-height: 1.2
        text-transform: capitalize
        font-size: 2em
        color: yellow
        text-decoration none

        &:hover
            text-decoration underline
</style>
