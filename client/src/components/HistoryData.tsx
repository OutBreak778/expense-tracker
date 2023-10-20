import React, { useEffect } from "react";
import FlexBetween from "./FlexBetween";
import BoxHeader from "./BoxHeader";
import { Box, Typography, useTheme } from "@mui/material";
import { useGlobalContext } from "../context/GlobalContext";
 const HistoryData = () => {
    const { transactionHistory, getIncome, getExpense } = useGlobalContext();
  const { palette } = useTheme();
  const [...hist] = transactionHistory();
  useEffect(() => {
    getIncome(),
    getExpense()
  },[])
  return (
    <Box>
      <BoxHeader
        title="Recent Transaction Added"
        subTitle="Transaction Histoy is Listed"
        sideText="History"
      />
        <Box>
            {hist.map((item: any) => {
            const { _id, title, amount, type } = item;
            return (
              <Box key={_id} px="1.4rem">
                <FlexBetween
                  border="2px solid"
                  borderRadius={2}
                  padding="0.9rem 0.9rem" 
                  borderColor={palette.grey[200]}
                  my={1}
                >
                  <Typography
                    color={type === "expense" ? "red" : palette.primary[400]}
                  >
                    {title}
                  </Typography>
                  <Typography
                    color={type === "expense" ? "red" : palette.primary[400]}
                  >
                    {type === "expense" ? `-${amount}` : `${amount}`}
                  </Typography>
                </FlexBetween>
              </Box>
            );
          })}
        </Box>
    </Box>
  );
};
export default HistoryData
