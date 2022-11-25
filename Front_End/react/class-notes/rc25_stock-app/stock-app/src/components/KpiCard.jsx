import { Avatar, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import { amber, indigo, pink } from "@mui/material/colors";
import { flex } from "../styles/globalStyle";
import { useSelector } from "react-redux";

const KpiCard = () => {
  const {sales, purchases} = useSelector((state) => state.stock);

  const totalSales = sales?.map((sale) => Number(sale.price_total)).reduce((acc, val)=> acc+ val, 0);
  
  const totalPurchases = purchases?.map((purchase) => Number(purchase.price_total)).reduce((acc, val)=> acc+ val, 0);

  const 

  const totalProfit = totalSales - totalPurchases;

}


  const data = () => [
    {
      title: "sales",
      metric: `$${totalSales || 0}`,
      icon: <MonetizationOnIcon />,
      color: indigo[900],
      bgColor: indigo[100],
    },

    {
      title: "profit",
      metric: "$2000",
      icon: <PaymentsIcon />,
      color: amber[900],
      bgColor: amber[100],
    },

    {
      title: "purchases",
      metric: "$0",
      icon: <ShoppingCartIcon />,
      color: pink[900],
      bgColor: pink[100],
    },
  ];

  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignItems="center"
      spacing={2}
    >
      {data.map((item) => (
        <Grid item key={item.title} xs={12} sm={6} md={4}>
          <Paper sx={{ p: 2 }} elevation={10}>
            <Box sx={flex}>
              <Avatar
                sx={{
                  width: "4rem",
                  height: "4rem",
                  color: item.color,
                  backgroundcolor: item.bgColor,
                }}
              >
                {item.icon}
              </Avatar>
              <Box>
                <Typography variant="button">{item.title}</Typography>
                <Typography variant="h5">{item.metric}</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default KpiCard;
