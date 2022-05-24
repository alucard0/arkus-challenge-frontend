module.exports = {
  "./src/**/*.{js,jsx,ts,tsx}": [
    "npx prettier --write src/**/*.js",
    "eslint src/**/*.js --fix-dry-run"
  ],
  "*.scss": [
    "stylelint --fix --custom-syntax postcss-scss",
    "npx prettier --write"
  ]
}
