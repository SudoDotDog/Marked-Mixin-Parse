/**
 * @author WMXPY
 * @namespace MarkedMixinParse
 * @description Methods
 */

export const MarkedParseMixinMethods: Record<string, any> = {

    parseInt: (value: string, radix: number = 10): number => {
        return parseInt(value, radix);
    },
    parseFloat: (value: string): number => {
        return parseFloat(value);
    },
};
