<script context="module">
    export async function preload({ path, params }) {

        const res = await this.fetch(`blog/${params.slug}.json`);
        const data = await res.json();

        if (res.status === 200) return {
            post: data ,
            path
        }

        this.error(res.status, data.message)
    }
</script>

<script>
    export let post
    export let path

    let url = `https://wout.space${path}`
    let noNewlineExcerpt = post.excerpt.replace(/(\r\n|\n|\r)/gm, " ").trim()
</script>

<style lang="stylus">
    header
        text-align center

        h1
            margin-bottom 0.7em

        p
            color #AAA
            text-transform uppercase
            font-family Rubik, sans-serif
            font-weight 600
</style>

<svelte:head>
    <title>{post.title}</title>
    <link rel="canonical" href="{url}" />
    <meta name="Description" content={noNewlineExcerpt} />

    <meta property="og:url" content="{url}" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content={post.title} />
    <meta property="og:description" content={noNewlineExcerpt} />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" value={post.title} />
    <meta name="twitter:description" content={noNewlineExcerpt} />
    <meta name="twitter:label1" value="Published on" />
    <meta
            name="twitter:data1"
            value={new Date(post.printDate).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        })} />
    <meta name="twitter:label2" value="Reading Time" />
    <meta name="twitter:data2" value={post.printReadingTime} />
</svelte:head>

<header>
    <p>{post.printDate} ~ {post.printReadingTime}</p>
    <h1>{post.title}</h1>
</header>
<div class="container">
    <article class="content">
        {@html post.html}
    </article>
    <hr />
</div>