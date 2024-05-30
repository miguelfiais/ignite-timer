import styled, { css } from "styled-components";

interface ButtonContainerProps {
    variant: ButtonVariant
}

export type ButtonVariant = "primary" | "secondary" | "danger" | "success"

const ButtonVariants = {
    primary: "purple",
    secondary: "orange",
    danger: "red",
    success: "green"
}

export const ButtonContainer = styled.button<ButtonContainerProps>`   
    width: 100px;
    height: 40px;

    ${props => css`background-color: ${ButtonVariants[props.variant]}`}
`