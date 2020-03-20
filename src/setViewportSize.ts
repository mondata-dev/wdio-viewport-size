const MAX_RETRIES = 5;

export async function setViewportSize(
  width: number,
  height: number,
  retryNo = 0,
): Promise<void> {
  const windowSize = await browser.getWindowSize();
  const viewportSize = await browser.getViewportSize();

  const widthDiff = windowSize.width - viewportSize.width;
  const heightDiff = windowSize.height - viewportSize.height;

  // change window size with indent
  await browser.setWindowSize(width + widthDiff, height + heightDiff);

  const newViewportSize = await browser.getViewportSize();

  // if viewport size not equals desired size, execute process again
  if (
    retryNo < MAX_RETRIES &&
    (newViewportSize.width !== width || newViewportSize.height !== height)
  ) {
    return await setViewportSize(width, height, retryNo + 1);
  }
}
