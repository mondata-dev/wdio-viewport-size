import { setViewportSize } from "./setViewportSize";
import { getViewportSize } from "./getViewportSize";

export class ViewportSizeService {
  before() {
    browser.addCommand("getViewportSize", () => getViewportSize());

    browser.addCommand("setViewportSize", (width: number, height: number) =>
      setViewportSize(width, height),
    );
  }
}
