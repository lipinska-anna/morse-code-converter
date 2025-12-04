/**
 * Morse Code Converter
 * Handles conversion between text and morse code
 * Following Single Responsibility Principle
 */

const MORSE_CODE_MAP: Record<string, string> = {
    'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',   'E': '.',
    'F': '..-.',  'G': '--.',   'H': '....',  'I': '..',    'J': '.---',
    'K': '-.-',   'L': '.-..',  'M': '--',    'N': '-.',    'O': '---',
    'P': '.--.',  'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
    'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',  'Y': '-.--',
    'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.',
    '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-',
    '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-',
    '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.',
    '$': '...-..-', '@': '.--.-.'
};

const TEXT_MAP: Record<string, string> = Object.fromEntries(
    Object.entries(MORSE_CODE_MAP).map(([key, value]) => [value, key])
);

export class MorseCodeConverter {
    /**
     * Convert text to morse code
     * @param {string} text - Input text
     * @returns {string} Morse code representation
     */
    textToMorse(text: string): string {
        if (!text) return '';

        return text
            .toUpperCase()
            .split('')
            .map(char => {
                if (char === ' ') return '/';
                return MORSE_CODE_MAP[char] || '';
            })
            // .filter(code => code !== '')
            .join(' ');
    }

    /**
     * Convert morse code to text
     * @param {string} morse - Input morse code
     * @returns {string} Text representation
     */
    morseToText(morse: string): string {
        if (!morse) return '';

        return morse
            .split(' / ')
            .map(word => {
                return word
                    .split(' ')
                    .map(code => TEXT_MAP[code] || '')
                    .join('');
            })
            .join(' ');
    }

    /**
     * Validate morse code format
     * @param {string} morse - Morse code to validate
     * @returns {boolean} Whether the morse code is valid
     */
    isValidMorse(morse: string): boolean {
        if (!morse) return false;

        const validChars = /^[.\-\s/]+$/;
        return validChars.test(morse);
    }

    /**
     * Get all available morse code mappings
     * @returns {Record<string, string>} Map of characters to morse code
     */
    getMorseMap(): Record<string, string> {
        return { ...MORSE_CODE_MAP };
    }
}