export async function setViewportSize(
  width: number,
  height: number,
  retries: number,
): Promise<void> {
  const windowSize = await browser.getWindowSize();
  const viewportSize = await browser.getViewportSize();

  const widthDiff = windowSize.width - viewportSize.width;
  const heightDiff = windowSize.height - viewportSize.height;

  // change window size with indent
  await browser.setWindowSize(width + widthDiff, height + heightDiff);

  const newViewportSize = await browser.getViewportSize();

  // if viewport size not equals desired size, execute process again
  if (newViewportSize.width !== width || newViewportSize.height !== height) {
    if (retries > 0) {
      return await setViewportSize(width, height, retries - 1);
    } else {
      throw new Error(
        `Failed to set viewport size to ${width}x${height} after retries`,
      );
    }
  }
}
