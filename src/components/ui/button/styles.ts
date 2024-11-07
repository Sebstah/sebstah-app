import { ButtonProps, CircularProgress, styled } from "@mui/material";

export const Styled = {
  Spinner: styled(CircularProgress)<{
    buttonVariant: ButtonProps["variant"];
    buttonDisabled?: boolean;
  }>`
    color: ${({ buttonVariant, buttonDisabled, theme }) => {
      if (buttonDisabled && buttonVariant === "contained") {
        return "white";
      }

      if (
        buttonDisabled &&
        (buttonVariant === "outlined" || buttonVariant == "text")
      ) {
        return theme.palette.grey[400];
      }

      if (buttonVariant === "outlined" || buttonVariant === "text") {
        return theme.palette.primary.main;
      }
      return "white";
    }};
    margin-right: 16px;
  `,
};
