/**
 * Copyright 2019, SumUp Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { describe, expect, it } from "vitest"

import { uniqueId } from "./id"

describe("Id", () => {
  it("should generate a unique, auto-incrementing id", () => {
    const firstActual = uniqueId()
    const firstExpected = "1"
    expect(firstActual).toBe(firstExpected)
    const secondActual = uniqueId()
    const secondExpected = "2"
    expect(secondActual).toBe(secondExpected)
  })

  it("should optionally prefix the id", () => {
    const actual = uniqueId()
    const expected = "3"
    expect(actual).toBe(expected)
  })
})
