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

  it("should create correct record with no assignments", () => {
    const resi = new Waiter("Resi");

    expect(resi.createAssignmentRecord()).toEqual(
      `Assignment record for ${resi.getName()}:\n` +
        `${assignmentInfo(resi.getAssignments())}` +
        `Total days: ${resi.getTotalDays()}\n` +
        `Estimated amount of beer to sell: ${resi.getTotalAmountOfBeer()}`
    );
  });

  it("should create correct record with one assignment", () => {
    const vroni = new Waiter("Vroni");
    vroni.addAssignment(assignmentOktoberfest);

    expect(vroni.createAssignmentRecord()).toEqual(
      `Assignment record for ${vroni.getName()}:\n` +
        `${assignmentInfo(vroni.getAssignments())}` +
        `Total days: ${vroni.getTotalDays()}\n` +
        `Estimated amount of beer to sell: ${vroni.getTotalAmountOfBeer()}`
    );
  });

  it("should create correct record with two assignments", () => {
    const toni = new Waiter("Toni");
    toni.addAssignment(assignmentOktoberfest);
    toni.addAssignment(assignmentBerch);

    expect(toni.createAssignmentRecord()).toEqual(
      `Assignment record for ${toni.getName()}:\n` +
        `${assignmentInfo(toni.getAssignments())}` +
        `Total days: ${toni.getTotalDays()}\n` +
        `Estimated amount of beer to sell: ` +
        toni.getTotalAmountOfBeer()
    );
  });

  it("should create correct record with all kinds of assignments", () => {
    const alois = new Waiter("Alois");
    alois.addAssignment(assignmentOktoberfest);
    alois.addAssignment(assignmentBerch);
    alois.addAssignment(assignmentWalberla);

    expect(alois.createAssignmentRecord()).toEqual(
      `Assignment record for ${alois.getName()}:\n` +
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
