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
  let resi, vroni, toni, alois: Waiter;
  let resiName = "Resi",
    vroniName = "Vroni",
    toniName = "Toni",
    aloisName = "Alois";
  let waiters: Waiter[];

  beforeEach(function() {
    resi = new Waiter(resiName);

    vroni = new Waiter(vroniName);
    vroni.addAssignment(assignmentOktoberfest);

    toni = new Waiter(toniName);
    toni.addAssignment(assignmentOktoberfest);
    toni.addAssignment(assignmentBerch);

    alois = new Waiter(aloisName);
    alois.addAssignment(assignmentOktoberfest);
    alois.addAssignment(assignmentBerch);
    alois.addAssignment(assignmentWalberla);

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
