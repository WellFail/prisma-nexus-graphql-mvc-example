"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const schema_1 = require("@nexus/schema");
const types = __importStar(require("./types"));
exports.rawSchema = schema_1.makeSchema({
    types,
    typegenAutoConfig: {
        contextType: 'Context.Context',
        sources: [
            {
                source: '@prisma/client',
                alias: 'prismaClient',
            },
            {
                source: require.resolve('../context'),
                alias: 'Context',
            },
        ],
    },
    outputs: {
        typegen: path_1.default.join(__dirname, '../../generated/typings.ts'),
        schema: path_1.default.join(__dirname, '../../generated/schema.graphql'),
    },
    nonNullDefaults: {
        input: false,
        output: false,
    },
});
exports.default = exports.rawSchema;
//# sourceMappingURL=index.js.map