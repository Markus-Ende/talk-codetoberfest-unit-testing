import { describe, it } from "./example-framework/test-suite";
import { assertTrue, assertEquals } from "./example-framework/assertions";

class Fridge {
  private beer: any[];
  private pretzels: any[];

  constructor() {
    this.beer = ["beer", "beer", "beer", "beer"];
    // please never put pretzels into the fridge
    this.pretzels = [];
  }

  public getBeerAmount() {
    return this.beer.length;
  }

  public getPretzelAmount() {
    return this.pretzels.length;
  }
}

// Unit Tests

function testFridgeShouldHaveEnoughBeer() {
  const fridge = new Fridge();
  if (fridge.getBeerAmount() < 3) {
    throw "not enough beer";
  }
}

function testFridgeShouldHaveOnePretzel() {
  const fridge = new Fridge();
  if (fridge.getPretzelAmount() !== 1) {
    throw "does not have one pretzel";
  }
}

// run tests
testFridgeShouldHaveEnoughBeer();
testFridgeShouldHaveOnePretzel();
