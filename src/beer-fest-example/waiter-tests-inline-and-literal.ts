import "jasmine";
import { Waiter } from "./model/waiter";
import * as helpers from "./waiter-test-helpers";

describe("Waiter", function() {
  it("should create correct assignment record with no assignments", () => {
    const sut = new Waiter("TestWaiter");

    expect(sut.createAssignmentRecord()).toEqual(
      `Assignment record for TestWaiter:\n` +
        `Total days: 0\n` +
        `Estimated amount of beer to sell: 0`
    );
  });

  it("should create correct assignment record with all kinds of assignments", () => {
    // for more complex SUTs, the builder pattern may be better for creating it
    const sut = helpers.waiterWithOneOfEachAssignmentTypes("TestWaiter");

    expect(sut.createAssignmentRecord()).toEqual(
      `Assignment record for TestWaiter:\n` +
        `\tOktoberfest:\t16\n` +
        `\tBergkirchweih:\t12\n` +
        `\tWalberlafest:\t3\n` +
        `Total days: 31\n` +
        `Estimated amount of beer to sell: 5350`
    );
  });
});
