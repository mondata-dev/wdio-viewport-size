declare namespace WebdriverIOAsync {
  interface ViewportSize {
    width: number;
    height: number;
  }

  interface Browser {
    getViewportSize(): Promise<ViewportSize>;
    setViewportSize(width: number, height: number, retries?: number): Promise<void>;
  }
}
