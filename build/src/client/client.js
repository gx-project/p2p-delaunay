import Peer from "peerjs";
import EventEmitter3 from "eventemitter3";
import { PeerDataConnection } from "./peer-connection";
import { Connections } from "./connections";
export class Client extends EventEmitter3 {
    constructor(config) {
        super();
        this.peersConnections = new Map();
        this._peer = new Peer(config.id, config.options);
        this.connections = new Connections(this);
    }
    get peer() {
        return this._peer;
    }
    createConnection(peer) {
        const id = typeof peer === "string" ? peer : peer.peer;
        if (this.peersConnections.has(id))
            return;
        this.peersConnections.set(id, new PeerDataConnection(this, peer));
    }
    broadcast(eventName, data) {
        for (const [, client] of this.peersConnections) {
            client.send(eventName, data);
        }
    }
}
//# sourceMappingURL=client.js.map