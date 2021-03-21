<script>
    export let anchor
</script>

<a class="anchor" href="#{anchor}" id="{anchor}"><slot/></a>

<style lang="stylus">
    @import '../styles/variables'

    .anchor
        color: yellow

    a
        margin: 0 0 0.5em 0
        font-weight: 400
        line-height: 1.2
        text-transform: capitalize
        font-size: 2em
        text-decoration none

        &:hover
            text-decoration underline
            text-decoration-thickness 10%
</style>
