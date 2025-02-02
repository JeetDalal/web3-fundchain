/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		colors: {
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))',
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))',
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))',
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))',
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))',
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))',
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))',
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  chart: {
			'1': 'hsl(var(--chart-1))',
			'2': 'hsl(var(--chart-2))',
			'3': 'hsl(var(--chart-3))',
			'4': 'hsl(var(--chart-4))',
			'5': 'hsl(var(--chart-5))',
		  },
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
		keyframes: {
			fadeInUp: {
			  '0%': { opacity: 0, transform: 'translateY(20px)' },
			  '100%': { opacity: 1, transform: 'translateY(0)' },
			},
			bounceIn: {
			  '0%': { opacity: 0, transform: 'scale(0.5)' },
			  '100%': { opacity: 1, transform: 'scale(1)' },
			},
			slideInLeft: {
			  '0%': { opacity: 0, transform: 'translateX(-100px)' },
			  '100%': { opacity: 1, transform: 'translateX(0)' },
			},
			fadeInRight: {
			  '0%': { opacity: 0, transform: 'translateX(20px)' },
			  '100%': { opacity: 1, transform: 'translateX(0)' },
			},
			gradientFlow: {
			  '0%': { backgroundPosition: '0% 50%' },
			  '50%': { backgroundPosition: '100% 50%' },
			  '100%': { backgroundPosition: '0% 50%' },
			},
		  },
		  animation: {
			'fade-in-up': 'fadeInUp 0.8s ease-in-out',
			'bounce-in': 'bounceIn 0.8s ease-in-out',
			'slide-in-left': 'slideInLeft 0.8s ease-in-out',
			'fade-in-right': 'fadeInRight 0.8s ease-in-out',
			'gradient-flow': 'gradientFlow 3s ease-in-out infinite',
		  },		  
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  