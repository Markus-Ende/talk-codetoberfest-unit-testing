import { BeerFestival } from "./beer-festival";

export class Assignment {
  private beerfest: BeerFestival;
  private days: number;

  constructor(beerfest: BeerFestival, days: number) {
    this.beerfest = beerfest;
    this.days = days;
  }

  public getBeerFestival() {
    return this.beerfest;
  }

  public getDays(): number {
    return this.days;
  }

  public getDailyBeerEstimatePerWaiter(): number {
    return this.beerfest.getDailyBeerEstimatePerWaiter();
  }

  public getBeerFestivalName(): string {
    return this.beerfest.getName();
  }
}
