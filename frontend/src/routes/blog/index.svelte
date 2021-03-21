<script context="module">
    export function preload({ params, query }) {
        return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
            return { posts }
        })
    }
</script>

<script>
    export let posts
</script>

<style lang="stylus">
    .title
        display flex
        align-items center

    .post-item-date
        text-transform uppercase
</style>

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

<section class="section">
    <div class="container blog">
        <h1>Blog</h1>
        {#each posts as post, index}
            <article>
                <div class="title">
                    <h2>
                        <a sapper:prefetch href='blog/{post.slug}'>{post.title}</a>
                    </h2>
                    <span class="post-item-date"> — {post.printDate}</span>
                </div>
                <p>{post.excerpt}</p>
            </article>
        {/each}
    </div>
</section>