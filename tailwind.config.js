module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        h1: ["48px", { lineHeight: "52.8px" }],
        h2: ["40px", { lineHeight: "44px" }],
        h3: ["32px", { lineHeight: "35.2px" }],
        h4: ["28px", { lineHeight: "30.8px" }],
        h5: ["24px", { lineHeight: "26.4px" }],
        h6: ["20px", { lineHeight: "22px" }],
        "body-large": ["18px", { lineHeight: "25.2px" }],
        "body-medium": ["16px", { lineHeight: "22.4px" }],
        "body-regular": ["14px", { lineHeight: "19.6px" }],
        "body-small": ["12px", { lineHeight: "16.8px" }],
      },
      colors: {
        primary: "#2d9cdb", // Soft blue
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
        // Custom padding based on font size rules
        "btn-x": "1rem", // This will be for top & bottom (1 x font size)
        "btn-y": "5rem", // This will be for left & right (5 x font size)
      },
    },
  },
  plugins: [],
};
