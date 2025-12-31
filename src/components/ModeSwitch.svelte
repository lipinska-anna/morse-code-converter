<script lang="ts">
    let {
        isTextToMorse = true,
        ontoggle
    }: {
        isTextToMorse: boolean,
        ontoggle: () => void
    } = $props();


    function toggle() {
        ontoggle?.();
    }
</script>

<div class="flex items-center justify-center gap-4 p-6 bg-vintage-shadow rounded-lg border-2 border-vintage-accent">
  <span class="text-lg font-semibold transition-colors duration-300 {isTextToMorse ? 'text-vintage-ink' : 'text-vintage-accent'}">
    Text
  </span>

    <button
            onclick={toggle}
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

    <span class="text-lg font-semibold transition-colors duration-300 {isTextToMorse ? 'text-vintage-accent' : 'text-vintage-ink'}">
    Morse
  </span>
</div>