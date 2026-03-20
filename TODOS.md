# TODOs

1. **CSP nonce-based inline scripts** — When adding user input/forms, implement nonce-based CSP for inline scripts instead of `unsafe-inline`.
2. **Optimize source images in /public** — Resize source images to their maximum display dimensions and convert to WebP format to reduce payload.
3. **Add basic test infrastructure** — Set up vitest with a smoke test to verify the page renders without errors.
