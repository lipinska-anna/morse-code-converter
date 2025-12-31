/**
 * Converter Store
 * Manages application state for morse code conversion
 * Following Single Responsibility Principle
 */
import { MorseCodeConverter } from '$lib/morseCodeConverter';

class ConverterStoreSvelte {
    isTextToMorse = $state(true);
    converter: MorseCodeConverter = new MorseCodeConverter();

    toggleMode() {
        this.isTextToMorse = !this.isTextToMorse;
    }

    reset() {
        this.isTextToMorse = true;
    }
}

export const converterStore = new ConverterStoreSvelte();
