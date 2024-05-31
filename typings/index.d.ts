import "webdriverio";

interface ViewportSize {
  width: number;
  height: number;
}

declare global {
  namespace WebdriverIO {
    interface Browser {
      getViewportSize(): Promise<ViewportSize>;
      setViewportSize(width: number, height: number, retries?: number): Promise<void>;
    }
  }
}
