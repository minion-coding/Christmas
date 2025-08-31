module.exports = {
    content: [
        './src/**/*.{html,js,jsx,ts,tsx}',
        './public/**/*.html',
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#3b82f6',
                'primary-dark': '#2563eb',
                'secondary': '#6b7280',
                'secondary-dark': '#4b5563',
            },
            fontFamily: {
                'sans': ['Roboto', 'sans-serif'],
                'serif': ['Merriweather', 'serif'],
            },
            spacing: {
                '72': '18rem',
                '84': '21rem',
                '96': '24rem',
            },
            borderRadius: {
                'xl': '0.75rem',
                '2xl': '1rem',
            },
            boxShadow: {
                'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            },
            keyframes: {
                'slide-in-right': {
                    '0%': {
                        transform: 'translateX(-10%)',
                    },
                    '100%': {
                        transform: 'translateX(0)',
                    },
                },
            },
            animation: {
                'slide-in-right': 'slide-in-right 0.5s ease-in-out',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
}