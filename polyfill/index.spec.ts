import ".";

describe("String.prototype.remove", () => {
  describe("Error cases", () => {
    it("Should throw a TypeError if no string or RegExp is provided", () => {
      // @ts-ignore
      expect(() => "".remove()).toThrow(
        new TypeError("Value must be provided")
      );
    });

    it("Should throw a TypeError if there is a non-string and non-RegExp as parameter", () => {
      // @ts-ignore
      expect(() => "".remove({})).toThrow(
        new TypeError("Value must be a string or a RegExp")
      );
    });
  });

  describe("Success cases", () => {
    it("Should remove using string", () => {
      expect("bitcoin-mainnet".remove("-mainnet")).toEqual("bitcoin");
    });

    it("Should remove using RegExp", () => {
      expect("bitcoin-mainnet".remove(/-mainnet/)).toEqual("bitcoin");
    });

    it("Should remove a sequence using string", () => {
      expect("bitcoin-mainnet-mainnet".remove("-mainnet")).toEqual("bitcoin");
    });

    it("Should remove a sequence using RegExp", () => {
      expect("bitcoin-mainnet-mainnet".remove(/-mainnet/)).toEqual("bitcoin");
    });
  });
});
