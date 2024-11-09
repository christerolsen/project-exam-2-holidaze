// tailwind.config.js

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ['"Lato"', "sans-serif"],
        roboto: ['"Roboto"', "sans-serif"],
      },
      fontSize: {
        h1: ["48px", { lineHeight: "52.8px" }],
        h2: ["40px", { lineHeight: "44px" }],
        h3: ["32px", { lineHeight: "35.2px" }],
        h4: ["28px", { lineHeight: "30.8px" }],
        h5: ["24px", { lineHeight: "26.4px" }],
        h6: ["20px", { lineHeight: "22px" }],
        "body-large": ["20px", { lineHeight: "25.2px" }],
        "body-medium": ["18px", { lineHeight: "22.4px" }],
        "body-regular": ["16px", { lineHeight: "19.6px" }],
        "body-small": ["14px", { lineHeight: "16.8px" }],
      },
      colors: {
        primary: "#4A90E2", // Soft blue
        secondary: "#50e3c2", // Minty green
        accent: "#f5a623", // Warm orange
        info: "#2D9CDB", // Light blue for info state
        success: "#27AE60", // Green for success state
        warning: "#F2994A", // Soft amber for warnings
        error: "#EB5757", // Muted red for errors
        background: "#F7F8FA", // Light grey for background
        text: "#333333", // Charcoal grey for text
        shadow: "#1e1e1e80", // Transparent black for shadows
      },
      boxShadow: {
        custom: "0 4px 10px rgba(30, 30, 30, 0.5)",
      },
      spacing: {
        xxs: "4px", // Extra extra small
        xs: "8px", // Extra small
        s: "12px", // Small
        m: "16px", // Medium
        l: "24px", // Large
        xl: "32px", // Extra large
        xxl: "48px", // Double extra large
        xxxl: "80px", // Triple extra large
      },
      padding: {
        "btn-y": "1rem", // Top & bottom padding
        "btn-x": "5rem", // Left & right padding
      },
    },
    screens: {
      mobile: "450px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
  },
  plugins: [],
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  },
};
