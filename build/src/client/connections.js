import { PeerDataConnection } from "./peer-connection";
export class Connections {
    constructor(client) {
        this.client = client;
        this._connections = new Map();
        this.registryEventsListeners();
    }
    get connections() {
        return this._connections;
    }
    registryEventsListeners() {
        this.client.peer.on("connection", (connection) => {
            connection.on("open", () => {
                this.createConnection(connection);
            });
        });
    }
    createConnection(peer) {
        const id = typeof peer === "string" ? peer : peer.peer;
        if (this._connections.has(id))
            return;
        this._connections.set(id, new PeerDataConnection(this.client, peer));
    }
}
//# sourceMappingURL=connections.js.map