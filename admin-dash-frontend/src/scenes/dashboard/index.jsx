import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

const Dashboard=() =>{
  return (
    <Box m="20px">
      <Box 
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      >
        <Header title="DASHBOARD" subtitle="Welcome to your Dashboard"/>
      </Box>


    </Box>
  )
}

export default Dashboard;