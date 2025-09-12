"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = void 0;
const class_validator_1 = require("class-validator");
const Match = (property, validationOptions) => {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'Match',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [property],
            validator: {
                validate(value, args) {
                    const [relatedPropertyName] = args.constraints;
                    return value === args.object[relatedPropertyName];
                },
                defaultMessage(args) {
                    const [relatedPropertyName] = args.constraints;
                    return `${args.property} must match ${relatedPropertyName}`;
                },
            },
        });
    };
};
exports.Match = Match;
//# sourceMappingURL=match.decorator.js.map