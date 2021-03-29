<script context='module'>
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
    import Navigation from '../../components/Navigation.svelte'
    export let post
    export let path

    let url = `https://wout.space${path}`
    let noNewlineExcerpt = post.excerpt.replace(/(\r\n|\n|\r)/gm, ' ').trim()
</script>

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

<Navigation/>

<section class="section">
    <div class="container blog">
        {#if !post.draft}
            <div class="post">
                <header>
                    <h1>{post.title}</h1>
                    <p>{post.printDate} ~ {post.printReadingTime}</p>
                </header>
                <article class=".article">
                    {@html post.html}
                </article>
                <hr />
            </div>
        {/if}
    </div>
</section>

<style lang="stylus">
    @import "../../styles/variables.styl"

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
