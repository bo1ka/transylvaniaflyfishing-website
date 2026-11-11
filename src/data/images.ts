import type { ImageMetadata } from 'astro';

const photos = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.jpg', { eager: true });
const logos = import.meta.glob<{ default: ImageMetadata }>('../assets/logos/*.png', { eager: true });

const find = (set: typeof photos, path: string) => {
  const hit = set[path];
  if (!hit) throw new Error(`Missing image: ${path}`);
  return hit.default;
};

export const photo = (name: string) => find(photos, `../assets/photos/${name}.jpg`);
export const logo = (name: string) => find(logos, `../assets/logos/${name}.png`);
