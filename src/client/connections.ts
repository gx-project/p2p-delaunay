import Peer from "peerjs";
import { Client } from "./client";
import { PeerDataConnection } from "./peer-connection";

export class Connections {
  _connections: Map<string, PeerDataConnection> = new Map();
  get connections(): Map<string, PeerDataConnection> {
    return this._connections;
  }

  constructor(private client: Client) {
    this.registryEventsListeners();
  }

  private registryEventsListeners() {
    this.client.peer.on("connection", (connection) => {
      connection.on("open", () => {
        this.createConnection(connection);
      });
    });
  }

  createConnection(peer: string | Peer.DataConnection) {
    const id = typeof peer === "string" ? peer : peer.peer;

    if (this._connections.has(id)) return;

    this._connections.set(
      id,
      new PeerDataConnection(this.client, peer)
    );
  }
}
