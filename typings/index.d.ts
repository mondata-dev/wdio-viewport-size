declare namespace WebdriverIOAsync {
  interface ViewportSize {
    width: number;
    height: number;
  }

  interface Browser {
    getViewportSize(): Promise<ViewportSize>;
    setViewportSize(width: number, height: number): Promise<void>;
  }
}

declare namespace WebdriverIO {
  interface ViewportSize {
    width: number;
    height: number;
  }

  interface Browser {
    getViewportSize(): ViewportSize;
    setViewportSize(width: number, height: number): void;
  }
}
