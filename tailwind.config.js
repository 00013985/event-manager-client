module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "mat-table-background":
          "var(--mat-table-background-color, var(--mat-sys-surface))",
      },
    },
  },
  plugins: [],
};
