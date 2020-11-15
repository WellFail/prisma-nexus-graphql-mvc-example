"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UniqueEntityID_1 = require("./UniqueEntityID");
class Entity {
    constructor(props, id) {
        this.id = id || new UniqueEntityID_1.UniqueEntityID();
        this.props = props;
    }
    equals(object) {
        if (object === null || object === undefined) {
            return false;
        }
        if (this === object) {
            return true;
        }
        if (!(object instanceof Entity)) {
            return false;
        }
        return this.id.equals(object.id);
    }
}
exports.Entity = Entity;
//# sourceMappingURL=Entity.js.map