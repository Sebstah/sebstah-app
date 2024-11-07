import React from "react";
import Button from "@/components/ui/button";
import { Typography } from "@mui/material";
import HeroSection from "@/components/home/herosection";
const Reports: React.FC = () => {
  return (
    <div>
      <HeroSection/>
      <Button
        fullWidth={true}
        variant="contained"
        sx={{ margin: "5px 0px", color: "black" }}
      >
        Click Me
      </Button>
      <Typography color="primary">This text should be in the primary color</Typography>
      Home page
      Home page
      <div style={{ height: "2000px" }}>
  {/* Your page content */}
</div>
    </div>
    
  );
};

export default Reports;
