import "jasmine";
import { instance, mock, when, verify } from "ts-mockito";
import { Assignment } from "./model/assignment";
import { Waiter } from "./model/waiter";

describe("Waiter", function() {
  it("should create correct assignment record with assignment (dummy)", () => {
    const waiter = new Waiter("TestWaiter");
    waiter.addAssignment({
      getBeerFestivalName: function() {},
      getDays: function() {},
      getDailyBeerEstimatePerWaiter: function() {}
    } as Assignment);

    expect(waiter.createAssignmentRecord()).toEqual(
      `Assignment record for TestWaiter:\n` +
        `\tundefined:\tundefined\n` +
        `Total days: NaN\n` +
        `Estimated amount of beer to sell: NaN`
    );
  });

  it("should create correct assignment record with assignment (stub)", () => {
    const waiter = new Waiter("TestWaiter");
    waiter.addAssignment({
      getBeerFestivalName: function() {
        return "TestFestival";
      },
      getDays: function() {
        return 2;
      },
      getDailyBeerEstimatePerWaiter: function() {
        return 3;
      }
    } as Assignment);

    expect(waiter.createAssignmentRecord()).toEqual(
      `Assignment record for TestWaiter:\n` +
        `\tTestFestival:\t2\n` +
        `Total days: 2\n` +
        `Estimated amount of beer to sell: 6`
    );
  });

  it("should create correct assignment record with assignment (ts-mockito)", () => {
    const waiter = new Waiter("TestWaiter");
    waiter.addAssignment(instance(mock(Assignment)));

    expect(waiter.createAssignmentRecord()).toEqual(
      `Assignment record for TestWaiter:\n` +
        `\tnull:\tnull\n` +
        `Total days: 0\n` +
        `Estimated amount of beer to sell: 0`
    );
  });

  it("should create correct assignment record with assignment (ts-mockito stub)", () => {
    const waiter = new Waiter("TestWaiter");
    const assignmentStub: Assignment = mock(Assignment);
    when(assignmentStub.getBeerFestivalName()).thenReturn("TestFestival");
    when(assignmentStub.getDays()).thenReturn(2);
    when(assignmentStub.getDailyBeerEstimatePerWaiter()).thenReturn(3);
    waiter.addAssignment(instance(assignmentStub));

    expect(waiter.createAssignmentRecord()).toEqual(
      `Assignment record for TestWaiter:\n` +
        `\tTestFestival:\t2\n` +
        `Total days: 2\n` +
        `Estimated amount of beer to sell: 6`
    );

    verify(assignmentStub.getBeerFestivalName()).called();
  });
});
