<script>
    import MorseConverter from '../components/MorseConverter.svelte';
</script>

<div class="min-h-screen paper-texture">
    <div class="container mx-auto px-4 py-8 max-w-4xl">
        <header class="text-center mb-12 animate-fade-in">
            <h1 class="text-5xl font-bold text-vintage-ink mb-4 text-shadow">
                -- --- .-. ... ..
            </h1>
            <p class="text-xl text-vintage-accent">Morse Code Converter</p>
            <div class="w-24 h-1 bg-vintage-accent mx-auto mt-4"></div>
        </header>

        <MorseConverter />
    </div>
</div>
