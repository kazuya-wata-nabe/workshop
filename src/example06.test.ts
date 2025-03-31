import { describe, it, expect } from "vitest"

describe("example06", () => {
  it("test", () => {
    const a: unknown = 1
    const b: unknown = "1"
    if (a == b) {
      console.debug(1)
    } else {
      console.debug(2)
    }
    expect("1").toBe("1")
  })
})
