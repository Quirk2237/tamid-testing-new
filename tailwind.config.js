/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				base: {
					black: "#110f0b",
					white: "#ffffff",
					"white-80": "#ffffffcc",
					50: "#f1f1f1",
				},
				neutral: {
					100: "#f6f6f6",
					200: "#f2f2f2",
					400: "#e7e7e7",
					600: "#d6d6d6",
					800: "#808080",
				},
				olive: {
					100: "#f7f8f0",
					200: "#eff1e1",
					400: "#dee2c3",
					600: "#bdc587",
					800: "#adb769",
				},
				blue: {
					100: "#f2f5fd",
					200: "#e4eafa",
					400: "#c9d6f5",
					600: "#94adeb",
					800: "#7998e6",
				},
				violet: {
					100: "#faf8fe",
					200: "#f4effc",
					400: "#eadff8",
					600: "#d5c0f1",
					800: "#cab0ee",
				},
				orange: {
					800: "#e6b379",
				},
				gray: "#717171",
			},
		},
	},
	plugins: [],
};
