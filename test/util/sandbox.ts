/**
 * @author WMXPY
 * @namespace Util
 * @description Sandbox
 * @override Test
 */

import { Sandbox } from "@sudoo/marked";
import { markedParseMixinFactory } from "../../src";

export const createTestSandbox = (): Sandbox => {

    const sandbox: Sandbox = Sandbox.fromAllEvaluators();
    sandbox.use(markedParseMixinFactory.createInjectMixin("Parse"));

    return sandbox;
};
