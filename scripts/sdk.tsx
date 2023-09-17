import React from "react";
import { createRoot, Root } from "react-dom/client";
import App, { AppProps } from "@/App";
import reportError from "@scripts/IError";
import SDK_VERSION from "@scripts/VERSION";

class MySDK {
  static version = SDK_VERSION;

  //////////////////////////////////////////////
  // properties - callbacks
  onError = console.error;
  onStartRender = () => {};
  onFinishRender = () => {};
  onFinishDubbing = (encryptedAudio: string) => {};

  // properties - fields
  apiKey: string = null as unknown as string;
  videoSrc: string = null as unknown as string;
  elementId: string = null as unknown as string;
  theElement: Root = null as unknown as Root;

  //////////////////////////////////////////////
  // methods
  constructor(elementId: string = "sdk-root") {
    try {
      this.elementId = elementId;
      const root = document.getElementById(elementId);
      if (!root) {
        reportError(`Div element with id [${elementId}] not found.`);
      }
      this.theElement = createRoot(root!);
    } catch (error) {
      this.onError(error);
    }
  }

  render() {
    const props: AppProps = {
      apiKey: this.apiKey,
      videoSrc: this.videoSrc,
      onError: this.onError,
      onStartRender: this.onStartRender,
      onFinishRender: this.onFinishRender,
      onFinishDubbing: this.onFinishDubbing,
    };

    const failedKeys: (keyof AppProps)[] = [];
    //@ts-ignore
    Object.keys(props).forEach((key: keyof AppProps) => {
      if (!props[key]) {
        this.onError?.(new Error(`Property [${key}] is required.`));
        failedKeys.push(key);
      }
    });
    if (failedKeys.length > 0) {
      this.onError?.(
        new Error(
          `Failed to render SDK. Missing properties: ${failedKeys.join(", ")}`
        )
      );
      return;
    }

    if (this.theElement) {
      this.theElement.render(<App {...props} />);
      this.onStartRender?.();
      return;
    }
    this.onError?.(new Error(`Div element id[${this.elementId}] not found.`));
  }
}
if (window) {
  //@ts-ignore
  window.MySDK = MySDK;
} else {
  throw new Error("My SDK can only be used in a browser environment.");
}
