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

describe("Fridge", function() {
  it("should have enough beer", () => {
    const fridge = new Fridge();
    assertTrue(fridge.getBeerAmount() > 2);
  });

  it("should have 1 pretzel", () => {
    const fridge = new Fridge();
    assertEquals(1, fridge.getPretzelAmount());
  });
});
