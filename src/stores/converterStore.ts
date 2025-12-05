/**
 * Converter Store
 * Manages application state for morse code conversion
 * Following Single Responsibility Principle
 */

import { writable, derived } from 'svelte/store';
import { MorseCodeConverter } from '../lib/morseCodeConverter';

export interface ConverterStoreState {
    isTextToMorse: boolean;
    converter: MorseCodeConverter;
}

function createConverterStore() {
    const { subscribe, set, update } = writable<ConverterStoreState>({
        isTextToMorse: true,
        converter: new MorseCodeConverter()
    });

    const isTextToMorse = derived(
        { subscribe },
        ($store) => $store.isTextToMorse
    );

    return {
        subscribe,
        isTextToMorse,
        toggleMode: (): void => update(state => ({
            ...state,
            isTextToMorse: !state.isTextToMorse
        })),
        reset: (): void => set({
            isTextToMorse: true,
            converter: new MorseCodeConverter()
        })
    };
}

export const converterStore = createConverterStore();
