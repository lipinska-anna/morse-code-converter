<script lang="ts">
    import { onMount } from 'svelte';

    export let value = '';
    export const placeholder = 'Type here...';

    let textarea;
    let showCursor = true;

    onMount(() => {
        const cursorInterval = setInterval(() => {
            showCursor = !showCursor;
        }, 530);

        return () => clearInterval(cursorInterval);
    });

    function handleInput(event) {
        value = event.target.value;
    }
</script>

<div class="relative">
  <textarea
          bind:this={textarea}
          value={value}
          on:keyup={handleInput}
          on:paste={handleInput}
          {placeholder}
          rows="8"
          class="w-full p-4 bg-white border-2 border-vintage-accent rounded
           focus:outline-none focus:ring-2 focus:ring-vintage-ink
           resize-none font-typewriter text-lg
           transition-all duration-300
           hover:shadow-md"
  ></textarea>

    <!--{#if value === '' && showCursor}-->
    <!--    <div class="absolute top-6 left-6 w-0.5 h-6 bg-vintage-ink animate-blink pointer-events-none"></div>-->
    <!--{/if}-->
</div>

<style>
    textarea::placeholder {
        color: #8b7355;
        opacity: 0.5;
    }
</style>