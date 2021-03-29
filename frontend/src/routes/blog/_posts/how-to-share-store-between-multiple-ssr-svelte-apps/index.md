---
title: How to share a store between 2 SSR svelte apps
date: "2021-03-21T02:00:00.045Z"
tags: 
    - svelte
    - store
    - ssr
excerpt: Taking a look into how to share a store between 2 Svelte apps when they're server-side rendered.
---
By default, when you have 2 Svelte apps that are server-side rendered, they won't share a store.
So let's take a look into how to solve this.

Basket example:

```javascript
<!--Basket.Svelte-->

<script>
    import { store } from './store.js'
</script>

{#if $store.showBasket}
    <div id="overlay" on:click="{() => $store.showBasket = !$store.showBasket}"></div>
    <div id="shopping-basket"></div>
{/if}
```

```javascript
<!--BasketButton.Svelte-->

<script>
    import { store } from './store.js'
</script>

<button on:click="{() => $store.showBasket = !$store.showBasket}">
    The button
</button>
```

We want both of the apps to have control over when to display the basket. 
- When clicking the overlay of the basket
- When clicking the button

Here's how to make it work:

```javascript
// store.js

import { writable } from 'svelte/store'

function createStore() {
    return writable({showBasket: false})
}

function getStore() {
    if (typeof window === 'undefined') return createStore()
    window.store = window.store || createStore()
    return window.store
}

export const store = getStore()
```

We get the store from the window, and if it doesn't exist we create a new store and attach it to the window.