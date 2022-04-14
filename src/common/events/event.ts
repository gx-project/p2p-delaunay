export class EventObject<T> {
  constructor() {}

  encode(_raw: T): Buffer {
    return Buffer.from("");
  }
}
