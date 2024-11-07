import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Normalizes styles across browsers */}
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
