/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'
// styling --------------------------------------------------
import "../../assets/styling/colors.css"
import "../../assets/styling/pbButton.css"

export interface PbButtonProps {
    /** Text that will display on button. Leave as empty string for no text.*/
    label?: string,
    /** Pass inline styling here, this will override any classes that are used. */
    customeStyles?: object
    /** If you want to overwrite any set classes, these are the class names.
     * 
     * Btn class: 'pb-btn'
     * 
     * Classes added if btnStatus is selected:
     * + 'btn-status-ok'
     * + 'btn-status-warning'
     * + 'btn-status-attention'
     * + 'btn-status-notification'
     * 
     * For disabled, use psudo ':disabled'
     */
    additionalClasses?: string
    /** This addes padding based off of size chooses. */
    size?: "sm" | "md" | "lg"
    /** Boolean if the button is disabled or not. */
    disabled?: boolean
    /** This will added classes to change the color of the button to a preset color scheme. */
    btnStatus?: "ok" | "warning" | "attention" | "notification" | ""
    /** Basic radius states. Default is 'rounded' */
    borderRadius?: "rounded" | "squared"
    /** Function for onClick() */
    onClick?: (() => void) | ((e: any) => void)
}

const PbButton: FC<PbButtonProps> = (props: PbButtonProps) => {
    const {
        label = "Press me",
        size = "md",
        customeStyles,
        additionalClasses = "",
        disabled = false,

        btnStatus,
        borderRadius = "rounded",

        onClick = () => console.log("I've been clicked!"),
    } = props

    // * Default button Background Color: "rgba(59, 129, 198, 1)"
    // * Default button Text Color: "white"
    // * Default button Border Color: "rgba(59, 129, 198, 1)"

    // * Color-status-ok: "rgb(221, 255, 221)"
    // * Color-status-ok-dark: "rgb(76, 175, 80)"
    // * Color-status-warning: "rgb(255, 221, 221)"
    // * Color-status-warning-dark: "rgb(222, 54, 42)"
    // * Color-status-attention: "rgb(255, 254, 204)"
    // * Color-status-attention-dark: "rgb(255, 235, 59)"
    // * Color-status-notification: "rgb(221, 255, 255)"
    // * Color-status-notification-dark: "rgb(32, 150, 243)"

    let btnStatusClass: string = ""
    if (btnStatus === "ok") btnStatusClass = "btn-status-ok"
    else if (btnStatus === "warning") btnStatusClass = "btn-status-warning"
    else if (btnStatus === "attention") btnStatusClass = "btn-status-attention"
    else if (btnStatus === "notification") btnStatusClass = "btn-status-notification"
    let btnBorderRadiusClass: string
    if (borderRadius === "rounded") btnBorderRadiusClass = "btn-radius-rnd"
    else btnBorderRadiusClass = "btn-radius-sqr"

    
    return (

        <button
            onClick={onClick}
            type="button"
            className={`pb-btn ${size} ${btnStatusClass} ${btnBorderRadiusClass} ${additionalClasses}`}
            style={{ ...customeStyles }}
            disabled={disabled}
        >
            {label}
        </button>
    )
}

export default PbButton