import "jasmine";
import { Assignment } from "./model/assignment";
import { BeerFestival, FestivalType } from "./model/beer-festival";
import { Waiter } from "./model/waiter";

describe("Waiters", function() {
  const assignmentOktoberfest = new Assignment(
    new BeerFestival("Oktoberfest", FestivalType.TouristAttraction),
    16
  );
  const assignmentBerch = new Assignment(
    new BeerFestival("Bergkirchweih", FestivalType.Popular),
    12
  );
  const assignmentWalberla = new Assignment(
    new BeerFestival("Walberlafest", FestivalType.Insider),
    3
  );

  it("should create correct assignment record with no assignments", () => {
    const waiter = new Waiter("TestWaiter");

    expect(waiter.createAssignmentRecord()).toEqual(
      `Assignment record for TestWaiter:\n` +
        `Total days: 0\n` +
        `Estimated amount of beer to sell: 0`
    );
  });

  it("should create correct record with one assignments", () => {
    const waiter = new Waiter("TestWaiter");
    waiter.addAssignment(assignmentOktoberfest);

    expect(waiter.createAssignmentRecord()).toEqual(
      `Assignment record for TestWaiter:\n` +
        `\tOktoberfest:\t16\n` +
        `Total days: 16\n` +
        `Estimated amount of beer to sell: 4000`
    );
  });

  it("should create correct record with two assignments", () => {
    const waiter = new Waiter("TestWaiter");
    waiter.addAssignment(assignmentOktoberfest);
    waiter.addAssignment(assignmentBerch);

    expect(waiter.createAssignmentRecord()).toEqual(
      `Assignment record for TestWaiter:\n` +
        `\tOktoberfest:\t16\n` +
        `\tBergkirchweih:\t12\n` +
        `Total days: 28\n` +
        `Estimated amount of beer to sell: 5200`
    );
  });

  it("should create correct assignment record with all kinds of assignments", () => {
    const waiter = new Waiter("TestWaiter");
    waiter.addAssignment(assignmentOktoberfest);
    waiter.addAssignment(assignmentBerch);
    waiter.addAssignment(assignmentWalberla);

    expect(waiter.createAssignmentRecord()).toEqual(
      `Assignment record for TestWaiter:\n` +
        `\tOktoberfest:\t16\n` +
        `\tBergkirchweih:\t12\n` +
        `\tWalberlafest:\t3\n` +
        `Total days: 31\n` +
        `Estimated amount of beer to sell: 5350`
    );
  });
});
