<script lang="ts">
    import Router from 'svelte-spa-router';
    import Home from './routes/Home.svelte';
    import NotFound from './routes/NotFound.svelte';
    import {ComponentType} from "svelte";

    const routes: Record<string, ComponentType> = {
        '/': Home,
        '*': NotFound
    };
</script>

<main class="min-h-screen paper-texture">
    <Router {routes}/>
</main>