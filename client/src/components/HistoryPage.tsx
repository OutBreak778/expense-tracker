import React, { useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useGlobalContext } from "../context/GlobalContext";
import FlexBetween from "./FlexBetween";

const HistoryPage = () => {
  const { transactionPage, getIncome, getExpense } = useGlobalContext();
  const { palette } = useTheme();
  const [...histPage] = transactionPage();
  useEffect(() => {
    getIncome(), getExpense();
  }, []);
  const isAboveMedium = useMediaQuery("(min-width: 1024px)");
  const isBelowMedium = useMediaQuery("(min-width: 676px)");

  return (
    <Box
      display="grid"
      justifyContent="space-between"
      rowGap="10px"
      columnGap="1.33%"
      width="100%"
      sx={
        isBelowMedium
          ? {
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            }
          : { gridTemplateColumns: "repeat(1, minmax(0, 1fr))" }
      }
    >
      {histPage.map((item: any) => {
        const { _id, title, amount, type, description } = item;
        return (
          <Box
            key={_id}
            border="2px solid"
            borderRadius={2}
            padding="1.5rem 1rem"
            borderColor={palette.grey[200]}
            width="100%"
            my={2}
            sx={{}}
          >
            <Box display="grid">
              <FlexBetween display="flex" flexDirection="column">
                <Card
                  sx={{
                    backgroundColor: `${palette.grey[700]}`,
                    borderRadius: "0.55rem 0.55rem 0 0",
                    width: "100%",
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="div" display="flex">
                      <Typography
                        color={palette.secondary[300]}
                        border="1px solid"
                        width="100%"
                        textAlign="center"
                        p={1}
                        borderRadius={1}
                        mb={1}
                        borderColor={`${palette.secondary[400]}`}
                      >
                        {title}
                      </Typography>
                    </Typography>
                    <Typography variant="body2" color={palette.grey[300]}>
                      {description}
                    </Typography>
                  </CardContent>
                </Card>
                <Typography
                  width="100%"
                  textAlign="center"
                  py={1}
                  pt={1}
                  borderRadius="0 0 0.55rem 0.55rem"
                  border={`2px solid ${palette.grey[200]}`}
                  color={type === "expense" ? "red" : palette.primary[400]}
                >
                  {type === "expense" ? `-${amount}` : `${amount}`}
                </Typography>
              </FlexBetween>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
export default HistoryPage;
