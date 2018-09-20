import "jasmine";
import { instance, mock, when } from "ts-mockito";
import { Assignment } from "./model/assignment";
import { Waiter } from "./model/waiter";

/**
 * Final example with Assignment dummies / stubs using ts-mockito.
 * Choose your favorite.
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

  it("should create correct record with assignments (stubs)", () => {
    const waiter = new Waiter("TestWaiter");
    const assignment = mock(Assignment);
    when(assignment.getBeerFestivalName()).thenReturn("TestFestival");
    when(assignment.getDays()).thenReturn(0);
    waiter.addAssignment(instance(assignment));
    waiter.addAssignment(instance(assignment));

    expect(waiter.createAssignmentRecord()).toEqual(
      `Assignment record for TestWaiter:\n` +
        `\tTestFestival:\t0\n` +
        `\tTestFestival:\t0\n` +
        `Total days: 0\n` +
        `Estimated amount of beer to sell: 0`
    );
  });

  it("should create correct record with assignments (dummy)", () => {
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
