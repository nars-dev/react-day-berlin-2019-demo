import * as React from "react";
import * as Nars from "nars-client";
import { config } from "./Config";

const RemoteComponent = Nars.createRemoteComponent(
  "ws://localhost:9000",
  config
);


export default () => null;

/*
export default () => (
        <RemoteComponent name="Example1" props={{
          color1: "yellow",
          color2: "purple"
        }} />
);
 */

/*
export default () => (
  <RemoteComponent name="Example2" props={{}} />
);
 */
