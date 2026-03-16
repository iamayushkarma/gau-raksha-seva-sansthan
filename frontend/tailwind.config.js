// export default {
//   darkMode: 'class',
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       fontFamily: {
//         inter: ['Inter', 'sans-serif'],
//       },
//       colors: {
//         primary: {
//           DEFAULT: 'var(--primary)',
//           light: 'var(--primary-light)',
//           lighter: 'var(--primary-lighter)',
//           dark: 'var(--primary-dark)',
//           darker: 'var(--primary-darker)',
//         },
//         secondary: 'var(--secondary)',
//         accent: {
//           DEFAULT: 'var(--accent)',
//           alt: 'var(--accent-alt)',
//         },
//         background: 'var(--background)',
//         surface: {
//           DEFAULT: 'var(--surface)',
//           light: 'var(--surface-light)',
//         },
//         border: 'var(--border)',
//         divider: 'var(--divider)',
//         text: {
//           primary: 'var(--text-primary)',
//           secondary: 'var(--text-secondary)',
//           tertiary: 'var(--text-tertiary)',
//           disabled: 'var(--text-disabled)',
//           onPrimary: 'var(--text-on-primary)',
//         },
//         success: 'var(--success)',
//         warning: 'var(--warning)',
//         error: 'var(--error)',
//         info: 'var(--info)',
//         hover: 'var(--hover)',
//         active: 'var(--active)',
//         focus: 'var(--focus)',
//         disabled: 'var(--disabled)',
//       },
//       boxShadow: {
//         sm: 'var(--shadow-sm)',
//         md: 'var(--shadow-md)',
//         lg: 'var(--shadow-lg)',
//       },
//     },
//   },
// };

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          light: 'var(--color-primary-light)',
          lighter: 'var(--color-primary-lighter)',
          dark: 'var(--color-primary-dark)',
          darker: 'var(--color-primary-darker)',
          // #f15a24 — used for CtaBanner bg and rich CTA surfaces
          cta: 'var(--color-primary-cta)',
          ctaHover: 'var(--color-primary-cta-hover)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          light: 'var(--color-secondary-light)',
          lighter: 'var(--color-secondary-lighter)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          light: 'var(--color-accent-light)',
          alt: 'var(--color-accent-alt)',
        },
        // Footer dark navy system
        footer: {
          DEFAULT: 'var(--color-footer)', // #0a1f3c — main footer bg
          surface: 'var(--color-footer-surface)', // #0f2847 — card/column bg
          border: 'var(--color-footer-border)', // #1a3a5c — dividers
          text: 'var(--color-footer-text)', // #a8c4e0 — body text
          muted: 'var(--color-footer-text-muted)', // #5a7fa0 — secondary text
        },
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        border: 'var(--color-border)',
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
        },
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
        info: 'var(--color-info)',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(255, 115, 0, 0.10)',
        md: '0 4px 6px rgba(255, 115, 0, 0.15)',
        lg: '0 10px 25px rgba(255, 115, 0, 0.20)',
      },
    },
  },
};
