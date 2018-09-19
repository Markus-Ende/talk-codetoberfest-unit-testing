import { Assignment } from "./assignment";

export class Waiter {
  private name: string;
  private assignments: Assignment[];

  constructor(name: string) {
    this.name = name;
    this.assignments = [];
  }

  public getName() {
    return this.name;
  }

  public addAssignment(assignment: Assignment) {
    this.assignments.push(assignment);
  }

  public getAssignments() {
    return this.assignments;
  }

  public createAssignmentRecord() {
    return (
      `Assignment record for ${this.name}:\n` +
      this.createAssignmentLines() +
      `Total days: ${this.getTotalDays()}\n` +
      `Estimated amount of beer to sell: ${this.getTotalAmountOfBeer()}`
    );
  }

  private createAssignmentLines() {
    let lines = "";
    for (const assignment of this.assignments) {
      lines += `\t${assignment.getBeerFestivalName()}\t${assignment.getDays()}\n`;
    }
    return lines;
  }

  public getTotalDays() {
    let days = 0;
    for (const assignment of this.assignments) {
      days += assignment.getDays();
    }
    return days;
  }

  public getTotalAmountOfBeer() {
    let amount = 0;
    for (const assignment of this.assignments) {
      amount +=
        assignment.getDays() * assignment.getDailyBeerEstimatePerWaiter();
    }
    return amount;
  }
}
