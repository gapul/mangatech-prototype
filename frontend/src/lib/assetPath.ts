// Resolves a public asset path with the correct basePath for GitHub Pages
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function assetPath(path: string): string {
  // path should start with /
  return `${BASE}${path}`;
}
