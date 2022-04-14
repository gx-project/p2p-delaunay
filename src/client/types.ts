import Peer from "peerjs";
import { Schema } from "@colyseus/schema";
import { Socket } from "socket.io-client"

export interface ClientConfig {
  id: string;
  socket: Socket;
  publicKey: Buffer;
  privateKey: Buffer;
  options?: Peer.PeerJSOption;
  events: Record<string, Schema>;
}