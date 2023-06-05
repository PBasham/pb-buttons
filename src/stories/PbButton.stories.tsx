// storybook dependencies --------------------------------------------------
import { Meta, StoryFn } from "@storybook/react"
import { within, userEvent } from "@storybook/testing-library"
import { size } from "lodash"
import { PbButton } from "../components"
// component --------------------------------------------------


export default {
    title: "PbButton",
    component: PbButton,
    argTypes: { onClick: { action: "Button has been clicked" } },
} as Meta

// const Template: StoryFn = (args) => <PbButton {...args} />
const Template: StoryFn = (args) => <PbButton {...args} />

export const Standard: StoryFn = Template.bind({})
Standard.args = {
    label: "Press me",
    size: "md",
    customeStyles: {},
}

export const Small: StoryFn = Template.bind({})
Small.args = {
    label: "Press me",
    size: "sm",
    customeStyles: {
        borderRadius: "5px",
    },
}
export const Large: StoryFn = Template.bind({})
Large.args = {
    label: "Press me",
    size: "lg",
    customeStyles: {
        borderRadius: "5px",
    },
}
export const LongLabel: StoryFn = Template.bind({})
LongLabel.args = {
    label: "I have a very long label and needed to be set up seperatly",
    size: "md",
    customeStyles: {
        borderRadius: "5px",
    },
}
export const UpperCase: StoryFn = Template.bind({})
UpperCase.args = {
    label: "CLICK ME",
    size: "md",
    customeStyles: {
        borderRadius: "5px",
    },
}
export const LowerCase: StoryFn = Template.bind({})
LowerCase.args = {
    label: "click me",
    size: "md",
    customeStyles: {
        borderRadius: "5px",
    },
}
export const SquareCorners: StoryFn = Template.bind({})
SquareCorners.args = {
    label: "Click me",
    size: "md",
    customeStyles: {
        borderRadius: "0",
    },
}
export const RoundCorners: StoryFn = Template.bind({})
RoundCorners.args = {
    label: "Click me",
    size: "md",
    customeStyles: {
        borderRadius: "15px",
    },
}