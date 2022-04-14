import EventEmitter3 from "eventemitter3";
export class PeerDataConnection {
    constructor(client, target) {
        this.client = client;
        this.target = target;
        this._emitter = new EventEmitter3();
        this.connected = false;
        if (typeof target === "string") {
            this.createPeerDataConnection(target);
        }
        else {
            this.dataConnection = target;
        }
        this.getPublicKey();
    }
    getPublicKey() { }
    createPeerDataConnection(id) {
        this.dataConnection = this.client.peer.connect(id);
    }
    on(event, cb) {
        this._emitter.on(event, (data) => {
            cb(data);
        });
    }
    send(_event, _content) { }
}
//# sourceMappingURL=peer-connection.js.map