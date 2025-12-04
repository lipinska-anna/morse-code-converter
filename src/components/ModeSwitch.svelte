<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    export let isTextToMorse = true;

    const dispatch = createEventDispatcher();

    function toggle() {
        dispatch('toggle');
    }
</script>

<div class="flex items-center justify-center gap-4 p-6 bg-vintage-shadow rounded-lg border-2 border-vintage-accent">
  <span class="text-lg font-semibold transition-colors duration-300"
        class:text-vintage-ink={isTextToMorse}
        class:text-vintage-accent={!isTextToMorse}>
    Text
  </span>

    <button
            on:click={toggle}
            class="relative w-16 h-8 bg-vintage-accent rounded-full transition-all duration-300
           hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-vintage-ink"
            aria-label="Toggle conversion mode"
    >
    <span
            class="absolute top-1 left-1 w-6 h-6 bg-vintage-paper rounded-full
             transition-transform duration-300 shadow-md"
            class:translate-x-8={!isTextToMorse}
    ></span>
    </button>

    <span class="text-lg font-semibold transition-colors duration-300"
          class:text-vintage-accent={isTextToMorse}
          class:text-vintage-ink={!isTextToMorse}>
    Morse
  </span>
</div>