import { Waiter } from "./model/waiter";
import { Assignment } from "./model/assignment";
import { BeerFestival, FestivalType } from "./model/beer-festival";

export function waiterWithNoAssignments(name: string) {
  return new Waiter(name);
}

export function waiterWithOneOktoberfestAssignment(name: string) {
  const waiter = waiterWithNoAssignments(name);
  waiter.addAssignment(
    new Assignment(
      new BeerFestival("Oktoberfest", FestivalType.TouristAttraction),
      16
    )
  );
  return waiter;
}

export function waiterWithOneOktoberfestAndOneBerchAssignment(name: string) {
  const waiter = waiterWithOneOktoberfestAssignment(name);
  waiter.addAssignment(
    new Assignment(new BeerFestival("Bergkirchweih", FestivalType.Popular), 12)
  );
  return waiter;
}

export function waiterWithOneOfEachAssignmentTypes(name: string) {
  const waiter = waiterWithOneOktoberfestAndOneBerchAssignment(name);
  waiter.addAssignment(
    new Assignment(new BeerFestival("Walberlafest", FestivalType.Insider), 3)
  );
  return waiter;
}
