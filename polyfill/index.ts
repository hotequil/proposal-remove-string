export {};

type Value = string | RegExp;
type Options = { trim: boolean };

declare global {
  interface String {
    remove(value: Value, options?: Options): string;
  }
}

if (!String.prototype.remove) {
  Object.defineProperty(String.prototype, "remove", {
    value: function (value: Value, options?: Options): string {
      if (!value) {
        throw new TypeError("Value must be provided");
      }

      const trim = options?.trim === true;
      let pattern: Value;

      if (typeof value === "string") {
        pattern = value;
      } else if (value instanceof RegExp) {
        pattern = value.global
          ? value
          : new RegExp(value.source, value.flags + "g");
      } else {
        throw new TypeError("Value must be a string or a RegExp");
      }

      const newString = this.replaceAll(pattern, "");

      return trim ? newString.trim() : newString;
    },
    writable: false,
    configurable: false,
    enumerable: false
  });
}
