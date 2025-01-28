export function generateImagePaths(
  basePath: string,
  start: number,
  end: number
) {
  const paths = [];
  for (let i = start; i <= end; i++) {
    paths.push(`${basePath}${i}.webp`);
  }
  return paths;
}

export function pickRandomImage(imagePaths: string[]): string {
  const randomIndex = Math.floor(Math.random() * imagePaths.length);
  return imagePaths[randomIndex];
}
