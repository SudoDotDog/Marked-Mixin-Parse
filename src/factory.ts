/**
 * @author WMXPY
 * @namespace MarkedMixinParse
 * @description Factory
 */

import { MarkedExportsMixinFactory } from "@sudoo/marked-mixin";
import { MarkedParseMixinMethods } from "./methods";

export const markedParseMixinFactory = MarkedExportsMixinFactory.fromExports(
    MarkedParseMixinMethods,
);
