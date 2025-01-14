import { Box } from "@mui/material";
import BtnRouting from "../../components/BtnRouting";
import NavBar from "../../navigation/NavBar";

const DevelopmentDash = () => {
  return (
    <Box>
      <NavBar link="/DevelopmentDash" />
      <Box>
        <BtnRouting btnName="" navigateTo="" />
      </Box>
    </Box>
  );
};

export default DevelopmentDash;
