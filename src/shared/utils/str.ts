export class Str {
  constructor(public str: string) {}

  replaceMultiple(replArray: string[], repl = "") {
    const pattern = replArray
      .map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|");
    const regex = new RegExp(pattern, "g");
    return this.str.replace(regex, repl);
  }
}
