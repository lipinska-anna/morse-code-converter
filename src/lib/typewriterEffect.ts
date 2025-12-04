import { writable, type Writable } from 'svelte/store';

/**
 * Typewriter Effect
 * Creates a typing animation effect
 * Following Single Responsibility Principle
 */

export class TypewriterEffect {
    public readonly currentText: Writable<string>;
    public readonly targetText: Writable<string>;
    public readonly isTyping: Writable<boolean>;
    public readonly speed: Writable<number>;
    private readonly callback: (text: string) => void;
    private timeoutId: ReturnType<typeof setTimeout> | null;

    constructor(callback: (text: string) => void, speed: number = 50) {
        this.callback = callback;
        this.currentText = writable('');
        this.targetText = writable('');
        this.isTyping = writable(false);
        this.speed = writable(speed);
        this.timeoutId = null;
    }

    /**
     * Start typing animation
     * @param {string} text - Text to type
     */
    type(text: string): void {
        let currentTarget: string;
        this.targetText.subscribe(value => currentTarget = value)();
        if (currentTarget === text) return;
        this.targetText.set(text);
        let typing: boolean;
        this.isTyping.subscribe(value => typing = value)();
        if (!typing) {
            this.currentText.set('');
            this.startTyping();
        }
    }

    /**
     * Internal method to handle typing logic
     */
    private startTyping(): void {
        this.isTyping.set(true);
        const typeNextChar = () => {
            let current: string;
            let target: string;
            let speedValue: number;
            this.currentText.subscribe(value => current = value)();
            this.targetText.subscribe(value => target = value)();
            this.speed.subscribe(value => speedValue = value)();
            if (current.length < target.length) {
                this.currentText.set(target.slice(0, current.length + 1));
                this.callback(target.slice(0, current.length + 1));
                this.timeoutId = setTimeout(typeNextChar, speedValue);
            } else {
                this.isTyping.set(false);
            }
        };

        typeNextChar();
    }

    /**
     * Clean up resources
     */
    destroy(): void {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
        this.isTyping.set(false);
    }

    /**
     * Update typing speed
     * @param {number} speed - New speed in milliseconds
     */
    setSpeed(speed: number): void {
        this.speed.set(speed);
    }
}

/**
 * Factory function to create typewriter effect
 * Following Dependency Inversion Principle
 */
export function createTypewriterEffect(
    callback: (text: string) => void,
    speed: number = 50
): TypewriterEffect {
    return new TypewriterEffect(callback, speed);
}