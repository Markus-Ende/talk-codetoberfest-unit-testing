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
  });

  it("should create correct assignment record (Resi)", () => {
    expect(resi.createAssignmentRecord()).toEqual(
      `Assignment record for ${resiName}:\n` +
        `${assignmentInfo(resi.getAssignments())}` +
        `Total days: ${resi.getTotalDays()}\n` +
        `Estimated amount of beer to sell: ${resi.getTotalAmountOfBeer()}`
    );
  });

  it("should create correct assignment record (Vroni)", () => {
    expect(vroni.createAssignmentRecord()).toEqual(
      `Assignment record for ${vroniName}:\n` +
        `${assignmentInfo(vroni.getAssignments())}` +
        `Total days: ${vroni.getTotalDays()}\n` +
        `Estimated amount of beer to sell: ${vroni.getTotalAmountOfBeer()}`
    );
  });

  it("should create correct assignment record (Toni)", () => {
    expect(toni.createAssignmentRecord()).toEqual(
      `Assignment record for ${toniName}:\n` +
        `${assignmentInfo(toni.getAssignments())}` +
        `Total days: ${toni.getTotalDays()}\n` +
        `Estimated amount of beer to sell: ${toni.getTotalAmountOfBeer()}`
    );
  });

  it("should create correct assignment record (Alois)", () => {
    expect(alois.createAssignmentRecord()).toEqual(
      `Assignment record for ${aloisName}:\n` +
        `${assignmentInfo(alois.getAssignments())}` +
        `Total days: ${alois.getTotalDays()}\n` +
        `Estimated amount of beer to sell: ${alois.getTotalAmountOfBeer()}`
    );
  });

  function assignmentInfo(assignments: Assignment[]) {
    let result = "";
    for (const a of assignments) {
      result += `\t${a.getBeerFestival().getName()}:\t${a.getDays()}\n`;
    }
    return result;
  }
});
