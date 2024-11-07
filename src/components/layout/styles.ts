import { styled } from "@mui/material/styles";

export const Styled = {
  Container: styled("div")`
    display: flex;
    flex-direction: column;
    min-height: 100vh; // Use min-height to ensure the container covers the full viewport height
    width: 100%;
    background-color: #f8f9fa; // Set the background color here
  `,
  Content: styled("main")`
    flex: 1;
    max-width: 1440px; // Set the maximum width for the content
    width: 100%; // Full width up to the max-width
    margin: 0 auto; // Center the content horizontally
  `,
  Page: styled("div")`
    padding: 0px; // Adjust for spacing inside the page
  `,
};
