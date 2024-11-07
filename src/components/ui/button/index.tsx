import { forwardRef } from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";
import { Styled } from "./styles";

interface Props extends ButtonProps {
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, loading, variant, disabled, ...props }, ref) => {
    return (
      <MuiButton {...props} variant={variant} disabled={disabled} ref={ref}>
        {loading ? (
          <Styled.Spinner
            buttonVariant={variant}
            buttonDisabled={disabled}
            size={18}
          />
        ) : null}
        {children}
      </MuiButton>
    );
  }
);

export default Button;
