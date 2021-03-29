<style global lang="stylus">
    @import '../styles/global'
    @import '../styles/highlight'
    @import "../styles/variables.styl"

    max-width = 600px

    header
        text-align center
        margin-bottom 1em
        max-width max-width

        +above(700px)
            margin-bottom 2em

        h1
            margin-bottom 0.2em
            font-weight 900

        p
            color grey
            font-weight 600
            font-size 0.9em
            font-style italic
            margin 0

    .section
        padding 1em 1.5em
</style>
