import "jasmine";

export class CashierSystem {
  private registeredWaiters: string[] = [];

  public registerWaiter(name: string) {
    this.registeredWaiters.push(name);
  }

  public logIn(name: string, callback: Function) {
    if (this.registeredWaiters.indexOf(name) < 0) {
      callback("Could not log in, not registered!");
    } else {
      // TODO
    }
  }
}

describe("CashierSystem", () => {
  it("should return correct log in message", () => {
    // this test case does not fail...
    const cashierSystem = new CashierSystem();
    cashierSystem.registerWaiter("Resi");

    cashierSystem.logIn("Resi", function(message) {
      // ...because the expect is never reached!
      expect(message).toEqual("Resi logged in.");
    });
  });

  it("should return correct log in message (fixed)", () => {
    const cashierSystem = new CashierSystem();
    cashierSystem.registerWaiter("Resi");

    let returnMessage: string;
    cashierSystem.logIn("Resi", function(message) {
      returnMessage = message;
    });
    expect(returnMessage).toEqual("Resi logged in.");
  });
});
