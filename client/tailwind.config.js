/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'register': "url('https://images.unsplash.com/photo-1542393545-10f5cde2c810?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&xid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbXB1dGVyfGVufDB8MXwwfHx8MA%3D%3D')",
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
      mono: ['Inconsolata', 'monospace'],

    },

  },
  plugins: [],
}

