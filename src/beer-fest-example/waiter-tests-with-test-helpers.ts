import "jasmine";
import { Assignment } from "./model/assignment";
import { Waiter } from "./model/waiter";
import * as helpers from "./waiter-test-helpers";

describe("Waiters", function() {
  let resi, vroni, toni, alois: Waiter;
  let resiName = "Resi",
    vroniName = "Vroni",
    toniName = "Toni",
    aloisName = "Alois";
  let waiters: Waiter[];

  beforeEach(function() {
    resi = helpers.waiterWithNoAssignments(resiName);
    vroni = helpers.waiterWithOneOktoberfestAssignment(vroniName);
    toni = helpers.waiterWithOneOktoberfestAndOneBerchAssignment(toniName);
    alois = helpers.waiterWithOneOfEachAssignmentTypes(aloisName);
    waiters = [resi, vroni, toni, alois];
  });

  it("should have correct name", function() {
    expect(resi.getName()).toEqual(resiName);
    expect(vroni.getName()).toEqual(vroniName);
    expect(toni.getName()).toEqual(toniName);
    expect(alois.getName()).toEqual(aloisName);
  });

  it("should create correct assignment record", () => {
    for (const waiter of waiters) {
      expect(waiter.createAssignmentRecord()).toEqual(
        `Assignment record for ${waiter.getName()}:\n` +
          `${assignmentInfo(waiter.getAssignments())}` +
          `Total days: ${waiter.getTotalDays()}\n` +
          `Estimated amount of beer to sell: ${waiter.getTotalAmountOfBeer()}`
      );
    }
  });

  function assignmentInfo(assignments: Assignment[]) {
    let result = "";
    for (const a of assignments) {
      result += `\t${a.getBeerFestival().getName()}:\t${a.getDays()}\n`;
    }
    return result;
  }
});
