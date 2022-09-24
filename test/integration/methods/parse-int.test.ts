/**
 * @author WMXPY
 * @namespace Methods
 * @description Parse Int
 * @override Integration Test
 */

// eslint-disable-next-line camelcase
import { MarkedResult, New_Line_Character, Sandbox } from "@sudoo/marked";
import { expect } from "chai";
import * as Chance from "chance";
import { assertSucceedMarkedResult } from "../../util/assert-result";
import { createTestSandbox } from "../../util/sandbox";

describe('Given (Parse Int) Parse Method for Integration Test', (): void => {

    const chance: Chance.Chance = new Chance('integration-method-parse-int');

    it('should be able to execute parseInt in sandbox', async (): Promise<void> => {

        const sandbox: Sandbox = createTestSandbox();

        const result: MarkedResult = await sandbox.evaluate([
            'export default Parse.parseInt("42")',
        ].join(New_Line_Character));

        assertSucceedMarkedResult(result);

        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        expect(result.exports.default).to.be.equal(42);
    });

    it('should be able to execute parseInt in sandbox with additional argument', async (): Promise<void> => {

        const sandbox: Sandbox = createTestSandbox();
        sandbox.setAdditionalArgument(chance.string());

        const result: MarkedResult = await sandbox.evaluate([
            'export default Parse.parseInt("42")',
        ].join(New_Line_Character));

        assertSucceedMarkedResult(result);

        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        expect(result.exports.default).to.be.equal(42);
    });
});
