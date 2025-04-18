import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/features/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			keyframes: {
				float: {
					"0%, 100%": { transform: "translate(0, 0)" },
					"25%": { transform: "translate(3%, -3%)" },
					"50%": { transform: "translate(-2%, 2%)" },
					"75%": { transform: "translate(3%, 1%)" },
				},
				"float-reverse": {
					"0%, 100%": { transform: "translate(0, 0)" },
					"25%": { transform: "translate(-3%, 3%)" },
					"50%": { transform: "translate(2%, -2%)" },
					"75%": { transform: "translate(-3%, -1%)" },
				},
				"float-slow": {
					"0%, 100%": { transform: "translate(0, 0)" },
					"25%": { transform: "translate(2%, -2%)" },
					"50%": { transform: "translate(-1%, 1%)" },
					"75%": { transform: "translate(2%, 0.5%)" },
				},
			},
			animation: {
				float: "float 15s ease-in-out infinite",
				"float-reverse": "float-reverse 15s ease-in-out infinite",
				"float-slow": "float-slow 20s ease-in-out infinite",
			},
		},
	},
	plugins: [],
};

export default config; 