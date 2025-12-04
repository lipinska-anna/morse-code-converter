<script lang="ts">
  import Router, {RouteDefinition} from 'svelte-spa-router';
  import Home from './routes/Home.svelte';
  import NotFound from './routes/NotFound.svelte';

  const routes: RouteDefinition = {
    '/': Home,
    '*': NotFound
  };
</script>

<main class="min-h-screen paper-texture">
  <Router {routes} />
</main>