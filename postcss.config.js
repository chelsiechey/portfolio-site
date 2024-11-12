module.exports = {
  plugins: [
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
    [
      "@csstools/postcss-global-data",
      {
        files: ["./postcss/breakpoints.css"],
      },
    ],
    [
      "postcss-custom-media",
      {
        preserve: false,
      },
    ],
  ],
};
