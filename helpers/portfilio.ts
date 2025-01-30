export function generateImagePaths(
  basePath: string,
  start: number,
  end: number,
  extension: string = "webp"
) {
  const paths = [];
  for (let i = start; i <= end; i++) {
    paths.push(`${basePath}${i}.${extension}`);
  }
  return paths;
}

export function pickRandomImage(imagePaths: string[]): string {
  const randomIndex = Math.floor(Math.random() * imagePaths.length);
  return imagePaths[randomIndex];
}
