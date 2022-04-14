import { Schema, type } from "@colyseus/schema";
import { IEventTransportObject } from "../model/transport-objects.model";

export class EventTransportSchema
  extends Schema
  implements IEventTransportObject
{
  @type(["int64"])
  data: number[];

  @type(["uint64"])
  signature: number[];

  @type(["string"])
  alreadyReceivedPeersIds: string[];
}
