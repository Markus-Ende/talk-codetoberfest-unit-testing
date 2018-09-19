import "jasmine";
import { instance, mock } from "ts-mockito";
import { Assignment } from "./model/assignment";
import { Waiter } from "./model/waiter";

/**
 * Final example with Assignment dummies using ts-mockito.
 * You could also stub the methods, if you don't like the nulls.
 */
describe("Waiters", function() {
  it("should create correct assignment record with no assignments", () => {
    const waiter = new Waiter("TestWaiter");

    expect(waiter.createAssignmentRecord()).toEqual(
      `Assignment record for TestWaiter:\n` +
        `Total days: 0\n` +
        `Estimated amount of beer to sell: 0`
    );
  });

  it("should create correct record with assignments", () => {
    const waiter = new Waiter("TestWaiter");
    waiter.addAssignment(instance(mock(Assignment)));
    waiter.addAssignment(instance(mock(Assignment)));

    expect(waiter.createAssignmentRecord()).toEqual(
      `Assignment record for TestWaiter:\n` +
        `\tnull:\tnull\n` +
        `\tnull:\tnull\n` +
        `Total days: 0\n` +
        `Estimated amount of beer to sell: 0`
    );
  });

  // Now go ahead and add tests for
  //  - Waiter#getTotalDays()
  //  - Waiter#getTotalAmountOfBeer()
});
