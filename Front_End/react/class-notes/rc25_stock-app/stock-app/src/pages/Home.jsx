import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import KpiCard from "../components/KpiCard";
import useStockCalls from "../hooks/useStockCalls";

const Home = () => {
  const {getSales, getPurchases } = useStockCalls();
  useEffect(() => {
    getSales();
    getPurchases();
  }, []);

  return (
  <Box>
    <Typography variant="h4" color="error" mb={4}>
      Dashboard
    </Typography>
    <KpiCard/>
  </Box>
  );
};


export default Home;
