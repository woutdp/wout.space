<script>
    export let status;
    export let error;

    const dev = process.env.NODE_ENV === 'development';
</script>

<style lang="stylus">
    h1
        font-size: 2.8em
        font-weight: 700
        margin: 0

        +above(480px)
            font-size: 4em

    p
        margin: 1em auto
</style>

<svelte:head>
    <title>{status}</title>
</svelte:head>

<section class="container center full-page">
    <h1>{status}</h1>
    <p>{error.message}</p>
    <a href="/" sapper:prefetch>Return to homepage</a>
</section>

{#if dev && error.stack}
    <pre>{error.stack}</pre>
{/if}
