<script lang="ts">
    import {createTypewriterEffect} from '../lib/typewriterEffect.svelte';

    let {text = ''}: { text: string } = $props();

    let displayText = $state('');
    let showCursor = $state(true);
    let typewriter: TypewriterEffect;

    $effect(() => {
        typewriter = createTypewriterEffect((newText) => {
            displayText = newText;
        });

        const interval = setInterval(() => {
            showCursor = !showCursor;
        }, 530);

        return () => {
            typewriter?.destroy();
            clearInterval(interval);
        };
    });

    $effect(() => {
        typewriter?.type(text);
    });
</script>

<div class="relative min-h-[200px] p-4 bg-white border-2 border-vintage-accent rounded">
    <div class="font-typewriter text-lg whitespace-pre-wrap break-words">
        {displayText}
        <span class="inline-block w-0.5 h-6 bg-vintage-ink ml-0.5 align-middle transition-opacity duration-100 {showCursor ? 'opacity-100' : 'opacity-0'}"
        ></span>
    </div>
</div>