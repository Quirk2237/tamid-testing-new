# CLAUDE.md

This is an Expo React Native project with Supabase integration for authentication.

## Available Scripts

- `pnpm start` - Start the Expo development server
- `pnpm run web` - Start the web version
- `pnpm run android` - Run on Android device/emulator
- `pnpm run ios` - Run on iOS device/simulator
- `pnpm run lint` - Run ESLint with auto-fix
- `pnpm run generate-colors` - Generate color constants and lint them

## Linting/Type Checking

Run `pnpm run lint` after making changes to ensure code quality.

## Tech Stack

- React Native with Expo
- TypeScript
- Supabase for authentication and backend
- NativeWind for styling (Tailwind CSS for React Native)
- Expo Router for navigation
- React Hook Form with Zod validation
- AsyncStorage for local data persistence

## Project Structure

- `/app` - App routes using Expo Router
  - `/(protected)` - Protected routes requiring authentication
  - `/(public)` - Public authentication routes
- `/components` - Reusable UI components
- `/config` - Configuration files (Supabase setup)
- `/context` - React context providers
- `/lib` - Utility functions
- `/docs` - Project documentation

## Coding Guidelines

- **Component Reuse**: Always use existing components when possible. Avoid creating new components when adding designs from Figma or other sources - prefer extending or modifying existing ones.
- **Thoughtful Development**: Take time to carefully consider prompts and requirements before responding or implementing solutions.
- **Concise Code**: Write code as concisely as possible while maintaining readability and functionality.