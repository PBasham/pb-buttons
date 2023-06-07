// dependencies --------------------------------------------------
import React from "react"
// storybook dependencies --------------------------------------------------
import { Meta, StoryFn } from "@storybook/react"
import { within, userEvent } from "@storybook/testing-library"
import { size } from "lodash"
// components --------------------------------------------------
import { PbButton } from "../components"
import { PbButtonProps } from "../components/PbButton/PbButton"

const defaultParams: PbButtonProps = {
    label: "Press me",
    size: "md",
    btnStatus: "",
    borderRadius: "rounded",
    disabled: false,
    additionalClasses: "",
    customeStyles: {},
    onClick: () => {console.log("Button has been pressed!")}
}

export default {
    title: "React Button Components/PbButton",
    component: PbButton,
    argTypes: {
        label: {
            name: "label",
            defaultValue: "Press me",
            description: "",

        },
        size: {
            name: "size",
            defaultValue: "md",
            description: "Can be sm, md, or lg. This changes padding.",
        },
        btnStatus: {
            name: "btnStatus",
            defaultValue: "",
            description: `Changes color style of button. 
                        Options:
                        + ""
                        + ok            
                        + warning         
                        + attention    
                        + notification  
            `,
        },
        borderRadius: {
            name: "borderRadius",
            defaultValue: "rounded",
            description: "Sets class for border radius. 'squared' .btn-radius-sqr | 'rounded' .btn-radius-rnd"
        },
        disabled: {
            name: "disabled",
            defaultValue: false,
            description: "If button is disabled.",
        },
        additionalClasses: {
            name: "additionalClasses",
            defaultValue: "",
            description: "",
        },
        customeStyles: {
            name: "customeStyles",
            defaultValue: {},
            description: "",
        },
        onClick: { action: defaultParams.onClick }

    },
} as Meta<typeof PbButton>

const Template: StoryFn<PbButtonProps> = (args) => <PbButton {...args} />
// * standard --------------------------------------------------
export const Standard: StoryFn = Template.bind({})
Standard.args = {
    ...defaultParams
}
// * borderRadius --------------------------------------------------
export const RoundCorners: StoryFn = Template.bind({});
RoundCorners.args = {
    ...defaultParams,
    borderRadius: "rounded"
}
export const SquareCorners: StoryFn = Template.bind({});
SquareCorners.args = {
    ...defaultParams,
    borderRadius: "square"
}
// * btnStatus --------------------------------------------------
export const OkStatus: StoryFn = Template.bind({});
OkStatus.args = {
    ...defaultParams,
    btnStatus: "ok"
}
export const WarningStatus: StoryFn = Template.bind({});
WarningStatus.args = {
    ...defaultParams,
    btnStatus: "warning"
}
export const AttentionStatus: StoryFn = Template.bind({});
AttentionStatus.args = {
    ...defaultParams,
    btnStatus: "attention"
}
export const NotificationStatus: StoryFn = Template.bind({});
NotificationStatus.args = {
    ...defaultParams,
    btnStatus: "notification"
}
// * size --------------------------------------------------
export const SizeSm: StoryFn = Template.bind({});
SizeSm.args = {
    ...defaultParams,
    size: "sm"
}
export const SizeMd: StoryFn = Template.bind({});
SizeMd.args = {
    ...defaultParams,
    size: "md"
}
export const SizeLg: StoryFn = Template.bind({});
SizeLg.args = {
    ...defaultParams,
    size: "lg"
}
// * disabled --------------------------------------------------
export const Disabled: StoryFn = Template.bind({});
Disabled.args = {
    ...defaultParams,
    disabled: true
}
// * misc --------------------------------------------------
export const LongLable: StoryFn = Template.bind({});
LongLable.args = {
    ...defaultParams,
    label: "This is a test for a really long label, I mean, a really really long label, it's gonna just go on and on and on..."
}
export const NoLabel: StoryFn = Template.bind({});
NoLabel.args = {
    ...defaultParams,
    label: ""
}
export const Hovered: StoryFn = Template.bind({});
Hovered.args = {
    ...defaultParams,
    additionalClasses: "btn-isActive"
}