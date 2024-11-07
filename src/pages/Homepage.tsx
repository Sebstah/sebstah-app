import React from "react";
import Button from "@/components/ui/button";
import { Typography } from "@mui/material";

const Reports: React.FC = () => {
  return (
    <div>
      <Button
        fullWidth={true}
        variant="contained"
        sx={{ margin: "5px 0px", color: "black" }}
      >
        Click Me
      </Button>
      <Typography color="primary">This text should be in the primary color</Typography>

      Home page
    </div>
  );
};

export default Reports;
