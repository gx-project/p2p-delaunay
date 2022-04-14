import { __decorate, __metadata } from "tslib";
import { Schema, type } from "@colyseus/schema";
export class EventTransportSchema extends Schema {
}
__decorate([
    type(["int64"]),
    __metadata("design:type", Array)
], EventTransportSchema.prototype, "data", void 0);
__decorate([
    type(["uint64"]),
    __metadata("design:type", Array)
], EventTransportSchema.prototype, "signature", void 0);
__decorate([
    type(["string"]),
    __metadata("design:type", Array)
], EventTransportSchema.prototype, "alreadyReceivedPeersIds", void 0);
//# sourceMappingURL=transport-objects.schema.js.map