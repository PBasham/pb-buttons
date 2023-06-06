import React from "react";
import { render } from "@testing-library/react"

import PbButton from "./PbButton";

describe("Button", () => {
    test("renders the MyComponent componenet", () => {
        render(<PbButton label="Press me!" />)
    })
})