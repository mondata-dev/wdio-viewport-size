interface ViewportSize {
  width: number;
  height: number;
}

declare module 'webdriverio' {
  interface BrowserObject {
    getViewportSize(): Promise<ViewportSize>;
    setViewportSize(width: number, height: number, retries?: number): Promise<void>;
  }
}

declare module '@wdio/sync' {
  interface BrowserObject {
    getViewportSize(): Promise<ViewportSize>;
    setViewportSize(width: number, height: number, retries?: number): Promise<void>;
  }
}
