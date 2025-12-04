<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { createTypewriterEffect } from '../lib/typewriterEffect';
    import { writable } from 'svelte/store';

    export let text = '';

    // Usare store per stato reattivo
    const displayText = writable('');
    const showCursor = writable(true);
    let typewriter = null;
    let cursorInterval;

    $: {
        if (typewriter) {
            typewriter.type(text);
        }
    }

    onMount(() => {
        typewriter = createTypewriterEffect((newText) => {
            displayText.set(newText);
        });

        cursorInterval = setInterval(() => {
            showCursor.update(v => !v);
        }, 530);
    });

    onDestroy(() => {
        if (typewriter) {
            typewriter.destroy();
        }
        if (cursorInterval) {
            clearInterval(cursorInterval);
        }
    });
</script>

<div class="relative min-h-[200px] p-4 bg-white border-2 border-vintage-accent rounded">
    <div class="font-typewriter text-lg whitespace-pre-wrap break-words">
        {$displayText}<span
            class="inline-block w-0.5 h-6 bg-vintage-ink ml-0.5 align-middle"
            class:opacity-100={$showCursor}
            class:opacity-0={!$showCursor}
        ></span>
    </div>
</div>