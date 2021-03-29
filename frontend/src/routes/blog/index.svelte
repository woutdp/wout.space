<script context='module'>
    export function preload({ params, query }) {
        return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
            return { posts }
        })
    }
</script>

<script>
    import Navigation from '../../components/Navigation.svelte'

    export let posts
    export let segment
</script>

<svelte:head>
    <title>Blog - Wout De Puysseleir</title>

    <meta name="title" content="Wout De Puysseleir">
    <meta name="description" content="Personal blog of Wout De Puysseleir">

    <meta property="og:type" content="website">
    <meta property="og:url" content="https://wout.space/blog">
    <meta property="og:title" content="Blog - Wout De Puysseleir">
    <meta property="og:description" content="Personal blog of Wout De Puysseleir">

    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://wout.space/blog">
    <meta property="twitter:title" content="Blog - Wout De Puysseleir">
    <meta property="twitter:description" content="Personal blog of Wout De Puysseleir">
</svelte:head>

<Navigation segment="{segment}"/>

<section class="section">
    <div class="container blog">
        {#each posts as post, index}
            {#if !post.draft}
                <article>
                    {#if index > 0}
                        <hr>
                    {/if}
                    <span class="date">{post.printDate} ~ {post.printReadingTime}</span>
                    <h2>
                        <a sapper:prefetch href='blog/{post.slug}'>{post.title}</a>
                    </h2>
                    <p>{post.excerpt}</p>
                    <div class="tags">
                        {#each post.tags as tag}
                            <span>{tag}</span>
                        {/each}
                    </div>
                </article>
            {/if}
        {/each}
    </div>
</section>

<style lang="stylus">
    @import '../../styles/variables.styl'

    h2
        font-weight 900

    .date
        text-transform uppercase
        color grey
        font-size 0.7em

    p
        margin 0

    .tags
        margin-top 5px

        span
            background-color blue-bright
            border-radius 5px
            color black
            font-size 0.7em
            font-weight 600
            padding 3px 10px

            &:not(:last-child)
                margin-right 10px

    .section
        padding 1em 1.5em
</style>
