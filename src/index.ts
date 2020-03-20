export class ViewportSizeService {
  before() {
    browser.addCommand("getViewportSize", () => {
      return browser.execute(() => {
        return {
          screenWidth: Math.max(
            document.documentElement.clientWidth,
            window.innerWidth || 0,
          ),
          screenHeight: Math.max(
            document.documentElement.clientHeight,
            window.innerHeight || 0,
          ),
        };
      });
    });

    browser.addCommand(
      "setViewportSize",
      async (width: number, height: number) => {
        await browser.setWindowSize(width, height);
        const r = await (browser as any).getViewportSize();

        const widthDiff = width - r.screenWidth;
        const heightDiff = height - r.screenHeight;
        await browser.setWindowSize(width + widthDiff, height + heightDiff);
        const r2 = await (browser as any).getViewportSize();
        console.log(r2);
      },
    );
  }
}
