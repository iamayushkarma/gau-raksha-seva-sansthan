export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          light: "var(--primary-light)",
          lighter: "var(--primary-lighter)",
          dark: "var(--primary-dark)",
          darker: "var(--primary-darker)",
        },
        secondary: "var(--secondary)",
        accent: {
          DEFAULT: "var(--accent)",
          alt: "var(--accent-alt)",
        },
        background: "var(--background)",
        surface: {
          DEFAULT: "var(--surface)",
          light: "var(--surface-light)",
        },
        border: "var(--border)",
        divider: "var(--divider)",
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
          disabled: "var(--text-disabled)",
          onPrimary: "var(--text-on-primary)",
        },
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
        info: "var(--info)",
        hover: "var(--hover)",
        active: "var(--active)",
        focus: "var(--focus)",
        disabled: "var(--disabled)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },
    },
  },
};
