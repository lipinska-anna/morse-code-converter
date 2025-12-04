<script>
    import { link } from 'svelte-spa-router';
    import { onMount } from 'svelte';

    let sosVisible = false;

    onMount(() => {
        setTimeout(() => sosVisible = true, 300);
    });
</script>

<div class="min-h-screen flex flex-col items-center justify-center px-4">
    <div class="text-center animate-fade-in">
        <h1 class="text-8xl font-bold text-vintage-ink mb-8">404</h1>

        <div class="mb-12">
            <p class="text-2xl text-vintage-accent mb-4">Page Not Found</p>
            <p class="text-vintage-ink mb-8">The page you're looking for has vanished into the ether.</p>
        </div>

        <div class="mb-12 p-8 bg-vintage-shadow rounded-lg border-2 border-vintage-accent">
            <p class="text-sm text-vintage-accent mb-4">Emergency Signal:</p>
            <div class="text-4xl font-bold text-vintage-ink tracking-wider transition-all duration-500"
                 class:opacity-100={sosVisible}
                 class:opacity-0={!sosVisible}>
                ··· ━━━ ···
            </div>
            <p class="text-xs text-vintage-accent mt-2">(SOS)</p>
        </div>

        <a
                href="/"
                use:link
                class="inline-block px-8 py-3 bg-vintage-accent text-vintage-paper rounded
             hover:bg-vintage-ink transition-all duration-300
             transform hover:scale-105 hover:shadow-lg"
        >
            Return to Safety
        </a>
    </div>
</div>