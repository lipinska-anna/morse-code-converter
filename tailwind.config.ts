/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{svelte,js,ts}",
    ],
    theme: {
        extend: {
            colors: {
                vintage: {
                    paper: '#f4f1e8',
                    ink: '#2c2416',
                    accent: '#8b7355',
                    shadow: '#d4cfc4',
                }
            },
            fontFamily: {
                'typewriter': ['"Courier New"', 'Courier', 'monospace'],
            },
            animation: {
                'blink': 'blink 1s step-end infinite',
                'fade-in': 'fadeIn 0.3s ease-in',
                'slide-up': 'slideUp 0.4s ease-out',
            },
            keyframes: {
                blink: {
                    '0%, 50%': { opacity: '1' },
                    '51%, 100%': { opacity: '0' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                }
            }
        },
    },
    plugins: [],
}