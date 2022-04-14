import Peer from "peerjs";
import EventEmitter3 from "eventemitter3";
import { PeerDataConnection } from "./peer-connection";
import { Connections } from "./connections";
import { EventTransportSchema } from "../common/events/schemas/transport-objects.schema";
import { ClientConfig } from "./types";

export class Client extends EventEmitter3 {
  private _peer!: Peer;
  get peer(): Peer {
    return this._peer;
  }
  
  public connections: Connections;
  public peersConnections: Map<string, PeerDataConnection> = new Map();

  constructor(config: ClientConfig) {
    super();
    this._peer = new Peer(config.id, config.options);

    this.connections = new Connections(this);
  }

  createConnection(peer: string | Peer.DataConnection) {
    const id = typeof peer === "string" ? peer : peer.peer;

    if (this.peersConnections.has(id)) return;

    this.peersConnections.set(
      id,
      new PeerDataConnection(this, peer)
    );
  }

  broadcast(eventName: string, data: unknown) {
    // const event = new EventTransportSchema();
    // event.data = "";

    for(const [,client] of this.peersConnections) {
        client.send(eventName, data);
    }
  }
}
