<script lang="ts">
    import { converterStore } from '../stores/converterStore';
    import ModeSwitch from './ModeSwitch.svelte';
    import TextInput from './TextInput.svelte';
    import TypewriterText from './TypewriterText.svelte';

    let inputText = '';
    let outputText = '';

    $: {
        if (inputText) {
            outputText = $converterStore.isTextToMorse
                ? $converterStore.converter.textToMorse(inputText)
                : $converterStore.converter.morseToText(inputText);
        } else {
            outputText = '';
        }
    }

    function handleModeChange() {
        converterStore.toggleMode();
        inputText = '';
        outputText = '';
    }
</script>

<div class="space-y-8 animate-slide-up">
    <ModeSwitch
            isTextToMorse={$converterStore.isTextToMorse}
            on:toggle={handleModeChange}
    />

    <div class="grid md:grid-cols-2 gap-8">
        <div class="space-y-4">
            <h2 class="text-xl font-semibold text-vintage-accent">
                {$converterStore.isTextToMorse ? 'Text Input' : 'Morse Input'}
            </h2>
            <TextInput
                    bind:value={inputText}
                    placeholder={$converterStore.isTextToMorse
          ? 'Type your message...'
          : 'Enter morse code (use . and -)...'}
            />
        </div>

        <div class="space-y-4">
            <h2 class="text-xl font-semibold text-vintage-accent">
                {$converterStore.isTextToMorse ? 'Morse Output' : 'Text Output'}
            </h2>
            <TypewriterText text={outputText} />
        </div>
    </div>

    <div class="mt-8 p-4 bg-vintage-shadow rounded border border-vintage-accent">
        <p class="text-sm text-vintage-ink">
            <strong>Tip:</strong> In morse code, use dot (.) for short signals and dash (-) for long signals.
            Separate letters with spaces and words with slashes (/).
        </p>
    </div>
</div>