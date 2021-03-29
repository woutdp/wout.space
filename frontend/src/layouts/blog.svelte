<script>
	import Navigation from '../components/Navigation.svelte'
    import Styles from './style.svelte'
</script>

<!--<script>-->
<!--    export let post-->
<!--    export let path-->

<!--    let url = `https://wout.space${path}`-->
<!--    let noNewlineExcerpt = post.excerpt.replace(/(\r\n|\n|\r)/gm, ' ').trim()-->
<!--</script>-->


<Styles />

<svelte:head>
	<title>{$$props.title}</title>
	<!--    <link rel="canonical" href="{url}" />-->
	<!--    <meta name="Description" content={noNewlineExcerpt} />-->

	<!--    <meta property="og:url" content="{url}" />-->
	<!--    <meta property="og:type" content="article" />-->
	<!--    <meta property="og:title" content={post.title} />-->
	<!--    <meta property="og:description" content={noNewlineExcerpt} />-->

	<!--    <meta name="twitter:card" content="summary" />-->
	<!--    <meta name="twitter:title" value={post.title} />-->
	<!--    <meta name="twitter:description" content={noNewlineExcerpt} />-->
	<!--    <meta name="twitter:label1" value="Published on" />-->
	<!--    <meta-->
	<!--            name="twitter:data1"-->
	<!--            value={new Date(post.printDate).toLocaleDateString(undefined, {-->
	<!--            year: 'numeric',-->
	<!--            month: 'short',-->
	<!--            day: 'numeric'-->
	<!--        })} />-->
	<!--    <meta name="twitter:label2" value="Reading Time" />-->
	<!--    <meta name="twitter:data2" value={post.printReadingTime} />-->
</svelte:head>

<Navigation/>
<section class="section">
    <div class="container blog">
        {#if !$$props.draft}
            <div class="post">
                <header>
                    <h1>{$$props.title}</h1>
                    <p>{$$props.printDate} ~ {$$props.printReadingTime}</p>
                </header>
                <article class=".article">
					<slot />
                </article>
                <hr />
            </div>
        {/if}
    </div>
</section>
