import EventEmitter3 from "eventemitter3";
export class PeerClientDataConnection {
    constructor(selfPeer, target) {
        this.selfPeer = selfPeer;
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
        this.dataConnection = this.selfPeer.connect(id);
    }
    on(event, cb) {
        this._emitter.on(event, (data) => {
            cb(data);
        });
    }
    send(_event, _content) { }
}
//# sourceMappingURL=data-connection.js.map