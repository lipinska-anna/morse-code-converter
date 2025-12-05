# Morse Code Converter

A vintage-styled Svelte application for converting text to morse code and vice versa.

## Features

- 🔄 Bidirectional conversion (Text ↔ Morse)
- ⌨️ Typewriter-style animations
- 🎨 Vintage aesthetic with paper texture
- 📱 Responsive design
- 🚨 Custom 404 page with SOS signal
- ✨ Smooth animations and transitions

## Tech Stack

- **Svelte** - Reactive framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling

## Installation

1. Clone the repository
2. Install dependencies:
```bash
   npm install
```
3. Start development server:
```bash
   npm run dev
```
4. Build for production:
```bash
   npm run build
```

## Architecture

The project follows SOLID principles:

- **Single Responsibility**: Each component and utility has one clear purpose
- **Open/Closed**: Components can be extended without modification
- **Liskov Substitution**: Components are interchangeable
- **Interface Segregation**: Clean, minimal interfaces
- **Dependency Inversion**: Dependencies on abstractions, not concrete implementations

## Project Structure

- `/src/routes` - Page components
- `/src/components` - Reusable UI components
- `/src/lib` - Business logic and utilities
- `/src/stores` - State management

## Morse Code Reference

- Dot (.) represents a short signal
- Dash (-) represents a long signal
- Spaces separate letters
- Slashes (/) separate words

## License

MIT