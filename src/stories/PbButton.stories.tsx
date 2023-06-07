// dependencies --------------------------------------------------
import React from "react"
// storybook dependencies --------------------------------------------------
import { Meta, StoryFn } from "@storybook/react"
import { within, userEvent } from "@storybook/testing-library"
import { size } from "lodash"
// components --------------------------------------------------
import { PbButton } from "../components"
import { PbButtonProps } from "../components/PbButton/PbButton"



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
        onClick: { action: "Button has been clicked" }

    },
} as Meta<typeof PbButton>

const Template: StoryFn<PbButtonProps> = (args) => <PbButton {...args} />
// * standard --------------------------------------------------
export const Standard: StoryFn = Template.bind({})
Standard.args = {
    label: "Press me",
    size: "md",
    disabled: false
}
// * btnStatus --------------------------------------------------
export const OkStatus: StoryFn = Template.bind({});
OkStatus.args = {
    label: "Press me",
    size: "md",
    btnStatus: "ok",
    disabled: false,
}
export const WarningStatus: StoryFn = Template.bind({});
WarningStatus.args = {
    label: "Press me",
    size: "md",
    btnStatus: "warning",
    disabled: false,
}
export const AttentionStatus: StoryFn = Template.bind({});
AttentionStatus.args = {
    label: "Press me",
    size: "md",
    btnStatus: "attention",
    disabled: false,
}
export const NotificationStatus: StoryFn = Template.bind({});
NotificationStatus.args = {
    label: "Press me",
    size: "md",
    btnStatus: "notification",
    disabled: false,
}
// * size --------------------------------------------------
export const SizeSm: StoryFn = Template.bind({});
SizeSm.args = {
    label: "Press me",
    size: "sm",
    btnStatus: "",
    disabled: false,
}
export const SizeMd: StoryFn = Template.bind({});
SizeMd.args = {
    label: "Press me",
    size: "md",
    btnStatus: "",
    disabled: false,
}
export const SizeLg: StoryFn = Template.bind({});
SizeLg.args = {
    label: "Press me",
    size: "lg",
    btnStatus: "",
    disabled: false,
}
// * disabled --------------------------------------------------
export const Disabled: StoryFn = Template.bind({});
Disabled.args = {
    label: "Press me",
    size: "md",
    btnStatus: "",
    disabled: true,
}