import { Client } from "./client";

export class Broadcaster {


  constructor(private client: Client) {

  }

  broadcast(event: string, content: unknown) {
    
    for(const [, peerDataConnection] of this.client.connections.connections) {
      peerDataConnection.send(event, content)
    }
  }
}