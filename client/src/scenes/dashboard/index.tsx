import React, { useEffect, useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import DashboardBox from "../../components/DashboardBox";
import BoxHeader from "../../components/BoxHeader";
import { useTheme } from "@mui/material";

import { useGlobalContext } from "../../context/GlobalContext";
import DashboardChart from "../../components/DashboardChart";
import FlexBetween from "../../components/FlexBetween";
import CountUp from "react-countup";
import HistoryData from "../../components/HistoryData";
const gridTemplateLarge = `
"a a c"
"a a c"
"a a c"
"a a f"
"a a f"
"a a f"
"d e g"
"d e g"
`;

const gridTemplateSmall = `
"a"
"a"
"a"
"a"
"a"
"d"
"d"
"e"
"e"
"g"
"g"
"c"
"c"
"c"
"f"
"f"
"f"
`;

type Props = {};

const index = (props: Props) => {
  const {
    totalIncome,
    totalExpense,
    income,
    expense,
    getIncome,
    getExpense,
    totalBalance,
  } = useGlobalContext();
  const { palette } = useTheme();
  const colorChange = totalIncome() > totalExpense();

  const dataMinIncome = Math.min(
    ...income.map((item: { amount: any }) => item.amount)
  );
  const dataMaxIncome = Math.max(
    ...income.map((item: { amount: any }) => item.amount)
  );

  const dataMinExpense = Math.min(
    ...expense.map((item: { amount: any }) => item.amount)
  );
  const dataMaxExpense = Math.max(
    ...expense.map((item: { amount: any }) => item.amount)
  );

  useEffect(() => {
    getIncome(), getExpense();
  }, []);

  const isAboveMedium = useMediaQuery("(min-width: 1024px)");
  return (
    <Box
      width="100%"
      display="grid"
      className="myElement"
      position="relative"
      gap="0.9rem"
      sx={
        isAboveMedium
          ? {
              gridTemplateColumns: "repeat(3, minmax(320px, 1fr))",
              gridTemplateRows: "repeat(8, minmax(68px, 1fr))",
              gridTemplateAreas: gridTemplateLarge,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "75px",
              gridTemplateAreas: gridTemplateSmall,
              gap: "1.2em",
            }
      }
    >
      <DashboardBox gridArea="a" width="100%" height="100%">
        <BoxHeader
          title="Income & Expense Data"
          subTitle="The chart is made of income and expense"
          sideText="Chart"
        />
        <DashboardChart />
      </DashboardBox>
      <DashboardBox gridArea="c" overflow="scroll">
        <HistoryData />
      </DashboardBox>
      <DashboardBox gridArea="d">
        <BoxHeader
          title="Total Income Stored"
          subTitle="This is Total Income as per given instructions"
          sideText="Income"
        />
        {isAboveMedium ? (
          <Box p="0.3rem 2rem">
            <Typography
              variant="h2"
              display="flex"
              justifyContent="start"
              alignItems="center"
              color={palette.grey[100]}
            >
              Total Income:
              <Box
                border="2px solid"
                borderColor={palette.grey[700]}
                color={palette.primary[400]}
                borderRadius="9px"
                ml="2rem"
                px="1rem"
                py="0.6rem"
              >
                <CountUp
                  start={0}
                  end={totalIncome()}
                  prefix="₹"
                  duration={4}
                />
              </Box>
            </Typography>
          </Box>
        ) : (
          <Box p="0.3rem 1rem">
            <Typography
              variant="h1"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              color={palette.grey[100]}
            >
              Total Income:
              <Box
                border="2px solid"
                borderColor={palette.grey[700]}
                color={palette.primary[400]}
                borderRadius="9px"
                ml="3rem"
                px="1rem"
                py="0.9rem"
              >
                <CountUp
                  start={0}
                  end={totalIncome()}
                  prefix="₹"
                  duration={4}
                />
              </Box>
            </Typography>
          </Box>
        )}
      </DashboardBox>
      <DashboardBox gridArea="e">
        <BoxHeader
          title="Total Expense Stored"
          subTitle="This is Total Expense as per given instructions"
          sideText="Expense"
        />
        {isAboveMedium ? (
          <Box p="0.3rem 2rem">
            <Typography
              variant="h2"
              display="flex"
              justifyContent="start"
              alignItems="center"
              color={palette.grey[100]}
            >
              Total Expense:
              <Box
                border="2px solid"
                borderColor={palette.grey[700]}
                color="red"
                borderRadius="9px"
                ml="2rem"
                px="1rem"
                py="0.6rem"
              >
                <CountUp
                  start={0}
                  end={totalExpense()}
                  prefix="-₹"
                  duration={4}
                />
              </Box>
            </Typography>
          </Box>
        ) : (
          <Box p="0.3rem 1rem">
            <Typography
              variant="h1"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              color={palette.grey[100]}
            >
              Total Expense:
              <Box
                border="2px solid"
                borderColor={palette.grey[700]}
                color="red"
                borderRadius="9px"
                ml="0.8rem"
                px="1rem"
                py="0.9rem"
              >
                <CountUp
                  start={0}
                  end={totalExpense()}
                  prefix="-₹"
                  duration={4}
                />
              </Box>
            </Typography>
          </Box>
        )}
      </DashboardBox>
      <DashboardBox gridArea="f">
        <BoxHeader
          title="Transaction Comparison"
          subTitle="The minimum and maximum transaction"
          sideText="Transaction"
        />
        <Box px={3} mt={0.5}>
          <FlexBetween px={1}>
            <Typography variant="h4" color={palette.grey[100]}>
              Max
            </Typography>
            <Typography variant="h4" color={palette.grey[100]}>
              Income Data
            </Typography>
            <Typography variant="h4" color={palette.grey[100]}>
              Min
            </Typography>
          </FlexBetween>
          <FlexBetween
            px={1}
            mt={2}
            py={0.5}
            border="2px dashed"
            borderColor={palette.grey[100]}
          >
            <Typography
              variant="h3"
              display="flex"
              justifyContent="start"
              alignItems="center"
              color={palette.primary[400]}
            >
              <CountUp start={0} end={dataMaxIncome} prefix="₹" duration={4} />
            </Typography>
            <Typography
              variant="h3"
              display="flex"
              justifyContent="start"
              alignItems="center"
              color={palette.primary[400]}
            >
              <CountUp start={0} end={dataMinIncome} prefix="₹" duration={4} />
            </Typography>
          </FlexBetween>
        </Box>
        <Box px={3} mt={0.5}>
          <FlexBetween px={1}>
            <Typography variant="h4" color={palette.grey[100]}>
              Max
            </Typography>
            <Typography variant="h4" color={palette.grey[100]}>
              Expense Data
            </Typography>
            <Typography variant="h4" color={palette.grey[100]}>
              Min
            </Typography>
          </FlexBetween>
          <FlexBetween
            px={1}
            mt={2}
            py={1}
            border="2px dashed"
            borderColor={palette.grey[100]}
          >
            <Typography
              variant="h3"
              display="flex"
              justifyContent="start"
              alignItems="center"
              color="red"
            >
              {dataMaxExpense > 0 ? (
                <CountUp
                  start={0}
                  end={dataMaxExpense}
                  prefix="₹"
                  duration={4}
                />
              ) : (
                <Typography>No Data</Typography>
              )}
            </Typography>
            <Typography
              variant="h3"
              display="flex"
              justifyContent="start"
              alignItems="center"
              color="red"
            >
              {dataMinExpense > 0 ? (
                <CountUp
                  start={0}
                  end={dataMinExpense}
                  prefix="₹"
                  duration={4}
                />
              ) : (
                <Typography>No Data</Typography>
              )}
            </Typography>
          </FlexBetween>
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="g">
        <BoxHeader
          title="Total Balance Stored"
          subTitle="This is Total Balance is Calculated"
          sideText="Balance Remaining"
        />
        {isAboveMedium ? (
          <Box p="0.3rem 2rem">
            <Typography
              variant="h2"
              display="flex"
              justifyContent="start"
              alignItems="center"
              color={palette.grey[100]}
            >
              Total Balance:
              <Box
                border="2px solid"
                borderColor={palette.grey[700]}
                color={colorChange ? palette.primary[400] : "red"}
                borderRadius="9px"
                ml="2rem"
                px="1rem"
                py="0.6rem"
              >
                <CountUp
                  start={0}
                  end={totalBalance()}
                  prefix="₹"
                  duration={4}
                />
              </Box>
            </Typography>
          </Box>
        ) : (
          <Box p="0.3rem 1rem">
            <Typography
              variant="h1"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              color={palette.grey[100]}
            >
              Total Balance:
              <Box
                border="2px solid"
                borderColor={palette.grey[700]}
                color={colorChange ? palette.primary[400] : "red"}
                borderRadius="9px"
                ml="2rem"
                px="1rem"
                py="0.6rem"
              >
                <CountUp
                  start={0}
                  end={totalBalance()}
                  prefix="₹"
                  duration={4}
                />
              </Box>
            </Typography>
          </Box>
        )}
      </DashboardBox>
    </Box>
  );
};

export default index;
