import { Static } from "nars";
import { Server } from "ws";
import { config } from "../client/Config";
import { Example1 } from "./Example1";
import { Example2 } from "./Example2";

/* Create a router. config and components have to match! */
const router = Static.createRouter(config, { Example1, Example2 });

/* Create a server */
const webSocketServer = new Server({ port: 9000 });

/* Start listening for incoming requests */
Static.attatchListener(webSocketServer, router);
