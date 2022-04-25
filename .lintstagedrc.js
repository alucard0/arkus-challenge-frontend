module.exports = {
  "./src/*.{js,jsx,ts,tsx}": [
    "npx prettier --write",
    "eslint src/*.js --fix-dry-run"
  ],
  "*.scss": [
    "stylelint --fix --custom-syntax postcss-scss",
    "npx prettier --write"
  ]
}
