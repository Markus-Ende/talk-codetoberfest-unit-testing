export enum FestivalType {
  Insider,
  Popular,
  TouristAttraction
}

export class BeerFestival {
  private name: string;
  private type: FestivalType;

  constructor(name: string, type: FestivalType) {
    this.name = name;
    this.type = type;
  }

  public getName() {
    return this.name;
  }

  public getType() {
    return this.type;
  }

  public getDailyBeerEstimatePerWaiter() {
    switch (this.type) {
      case FestivalType.Insider:
        return 50;
      case FestivalType.Popular:
        return 100;
      case FestivalType.TouristAttraction:
        return 250;
    }
  }
}
