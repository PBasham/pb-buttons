// dependencies --------------------------------------------------
import React from "react"
// storybook dependencies --------------------------------------------------
import { Meta, StoryFn } from "@storybook/react"
import { within, userEvent } from "@storybook/testing-library"
import { size } from "lodash"
// components --------------------------------------------------
import { PbButton } from "../components"


export default {
    title: "React Button Components/PbButton",
    component: PbButton,
    argTypes: { onClick: { action: "Button has been clicked" } },
} as Meta<typeof PbButton>

const Template: StoryFn<typeof PbButton> = (args) => <PbButton {...args} />

export const Standard: StoryFn = Template.bind({})
Standard.args = {
    label: "Press me",
    size: "md",
}