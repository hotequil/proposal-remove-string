export {};

declare global {
  interface String {
    remove(value: string | RegExp): string;
  }
}

if (!String.prototype.remove) {
  Object.defineProperty(String.prototype, "remove", {
    value: function (value: string | RegExp): string {
      if (!value) {
        throw new TypeError("Value must be provided");
      }

      let pattern: string | RegExp;

      if (typeof value === "string") {
        pattern = value;
      } else if (value instanceof RegExp) {
        pattern = value.global
          ? value
          : new RegExp(value.source, value.flags + "g");
      } else {
        throw new TypeError("Value must be a string or a RegExp");
      }

      return this.replaceAll(pattern, "");
    },
    writable: false,
    configurable: false,
    enumerable: false
  });
}
