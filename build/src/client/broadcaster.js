export class Broadcaster {
    constructor(client) {
        this.client = client;
    }
    broadcast(event, content) {
        for (const [, peerDataConnection] of this.client.connections.connections) {
            peerDataConnection.send(event, content);
        }
    }
}
//# sourceMappingURL=broadcaster.js.map