# WebdriverIO Viewport Size

This is a port of the old [`setViewportSize` function](https://github.com/webdriverio-boneyard/v4/blob/master/lib/commands/setViewportSize.js) of webdriverio v4 to webdriverio v5.
It allows setting the size of the viewport which is helpful for consistent visual regression testing.

## Usage

1. Install the package:

```bash
npm install --save-dev wdio-viewport-size
```

2. Import the service and add it to your `wdio.conf.js` file:

```javascript
const { ViewportSizeService } = require("wdio-viewport-size");

exports.config = {
  // other configuration
  services: [[ViewportSizeService]],
};
```

3. Use available commands:

```typescript
browser.getViewport(): Promise<{ width: number, height: number }>
browser.setViewport(width: number, height: number): Promise<void>
```

## Example

The following repo contains a boilerplate setup for e2e testing with webdriverio: https://github.com/mondata-dev/e2e.
It includes `wdio-viewport-size` and uses it to set the viewport size before each feature to the same value.
