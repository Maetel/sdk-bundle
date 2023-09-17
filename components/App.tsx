import React, { useEffect } from "react";
import Hi from "@/Hi";
import styled from "@emotion/styled";

export type AppProps = {
  apiKey: string;
  videoSrc: string;
  onError: (error: Error) => any;
  onStartRender: () => any;
  onFinishRender: () => any;
  onFinishDubbing: (encryptedAudio: string) => any;
};

const App = ({ apiKey, videoSrc }: AppProps) => {
  useEffect(() => {
    const call = async () => {
      // fetch("api/dd.js").then((res) => res.json());
    };
  }, []);

  return (
    <TheApp>
      <Video controls src={videoSrc}></Video>
      Hello from MySDK!<Hi></Hi>
      <div>Received api key : {apiKey}</div>
      <div>Video src : {videoSrc}</div>
    </TheApp>
  );
};

const TheApp = styled.div`
  font-size: 18px;
  background-color: #eee;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const Video = styled.video`
  width: 100%;
  height: 300px;
`;

export default App;
