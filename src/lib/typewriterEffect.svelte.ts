/**
 * Typewriter Effect - Svelte 5 Version
 * Creates a typing animation effect
 * Following Single Responsibility Principle
 */
export class TypewriterEffectSvelte {
    currentText = $state('');
    targetText = $state('');
    isTyping = $state(false);
    speed = $state(50);

    private readonly callback: (text: string) => void;
    private timeoutId: ReturnType<typeof setTimeout> | null = null;

    constructor(callback: (text: string) => void, speed: number = 50) {
        this.callback = callback;
        this.speed = speed;
    }

    /**
     * Start typing animation
     * @param {string} text - Text to type
     */
    type(text: string): void {
        if (text === '') {
            this.stop();
            this.currentText = '';
            this.targetText = '';
            this.callback('');
            return;
        }

        if (this.targetText === text) return;

        this.targetText = text;

        if (!this.isTyping) {
            this.currentText = '';
            this.startTyping();
        }
    }

    /**
     * Internal method to handle typing logic
     */
    private startTyping(): void {
        this.isTyping = true;

        const typeNextChar = () => {
            if (this.currentText.length < this.targetText.length) {
                this.currentText = this.targetText.slice(0, this.currentText.length + 1);
                this.callback(this.currentText);
                this.timeoutId = setTimeout(typeNextChar, this.speed);
            } else {
                this.isTyping = false;
            }
        };

        typeNextChar();
    }

    private stop(): void {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
        this.isTyping = false;
    }

    /**
     * Clean up resources
     */
    destroy(): void {
        this.stop();
    }
}

export function createTypewriterEffect(
    callback: (text: string) => void,
    speed: number = 50
): TypewriterEffectSvelte {
    return new TypewriterEffectSvelte(callback, speed);
}