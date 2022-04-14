// apenas o pacote sera cripografado e só os eventos terão assinatura

export interface ISignedDataTransportObject {
  data: number[];
  signature: number[];
}
export type PacketTransportObject = Buffer;

export interface IEventTransportObject extends ISignedDataTransportObject {
  alreadyReceivedPeersIds: string[];
}

export interface IPacketObject {
  events: IEventTransportObject[];
  alreadyReceived: string[];
}

export interface IEventObject<D = any> {
  eventId: string;
  eventName: string;
  data: D;
  /**
   * List of peers that already received the event;
   */
  alreadyReceived: string[];
}

// const allNodes = new Set();

// function mapTree(root, set = []) {
  
//   set.push(root);
//   if(root.children && root.children.length > 0) {
//     for(const element of root.children) mapTree(element, set);
//   }

//   return set;
// }