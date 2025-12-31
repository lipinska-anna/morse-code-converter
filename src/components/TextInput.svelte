<script lang="ts">

    let {
      value = $bindable(''),
      placeholder = 'Type here...'
    } : {
      value: string,
      placeholder: string
    } = $props();

    let showCursor = true;

    $effect(() => {
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
          bind:value={value}
          {placeholder}
          oninput={handleInput}
          onpaste={handleInput}
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