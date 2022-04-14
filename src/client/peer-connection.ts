import Peer from "peerjs";
import EventEmitter3 from "eventemitter3";
import { Client } from "./client";

export class PeerDataConnection {
  _emitter = new EventEmitter3();
  public connected: boolean = false;
  public publicKey: Buffer;
  dataConnection: Peer.DataConnection;
  stream?: Peer.MediaConnection;

  constructor(
    private client: Client,
    public readonly target: string | Peer.DataConnection
  ) {
    if (typeof target === "string") {
      this.createPeerDataConnection(target);
    } else {
      this.dataConnection = target;
    }

    this.getPublicKey();
  }

  private getPublicKey() {}

  private createPeerDataConnection(id: string) {
    this.dataConnection = this.client.peer.connect(id);
  }

  on(event: string, cb: (...args: unknown[]) => void) {
    this._emitter.on(event, (data) => {
      cb(data);
    });
  }

  send(_event: string, _content: unknown) {}
}
