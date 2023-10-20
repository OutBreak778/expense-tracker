import React, { useEffect } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import DashboardBox from "../../components/DashboardBox";
import BoxHeader from "../../components/BoxHeader";
import FlexBetween from "../../components/FlexBetween";
import { useGlobalContext } from "../../context/GlobalContext";
import FormInputPage from "../../components/ExpenseForm";
import DashboardBoxItem from "../../components/ExpenseDashboardBoxItem";
import CountUp from "react-countup";
import "../../App.css";

const gridTemplateLarge = `
"a a f"
"a a f"
"b b f"
"b b f"
"b b f"
"b b f"
"b b f"
"b b f"
"b b f"
"b b f"
`;

const gridTemplateSmall = `
"a"
"a"
"f"
"f"
"f"
"f"
"f"
"f"
"f"
"f"
"b"
"b"
"b"
"b"
"b"
"b"
"b"
`;

type Props = {};

const Expense = (props: Props) => {
  const { expense, getExpense, deleteExpense, totalExpense } =
    useGlobalContext();
  const { palette } = useTheme();
  // const [item, setItem] = useState([])
  const isAboveMedium = useMediaQuery("(min-width: 1024px)");
  const isSmallMedium = useMediaQuery("(min-width: 518px)")

  useEffect(() => {
    getExpense();
  }, []);

  return (
    <FlexBetween>
      <Box
        width="100%"
        display="grid"
        gap="0.9rem"
        mb="1rem"
        color={palette.grey[200]}
        sx={
          isAboveMedium
            ? {
                gridTemplateColumns: "repeat(3, minmax(320px, 1fr))",
                gridTemplateRows: "repeat(10, minmax(52px, 1fr))",
                gridTemplateAreas: gridTemplateLarge,
              }
            : {
                gridAutoColumns: "1fr",
                gridAutoRows: "75px",
                gridTemplateAreas: gridTemplateSmall,
                gap: "1.2em",
              }
        }
        className="myElement"
      >
        <DashboardBox gridArea="a">
          <BoxHeader
            title="Total Expense"
            subTitle="Summing your entirely of Financial Amount"
            sideText="Total"
          />
          <Box p="0.3rem 2rem">
            {isAboveMedium ? (
              <Typography
                variant="h1"
                display="flex"
                justifyContent="start"
                alignItems="center"
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
            ) : (
              <Typography
                variant="h3"
                display="flex"
                justifyContent="start"
                alignItems="center"
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
            )}
            
            {/* <Typography
              variant="h1"
              display="flex"
              justifyContent="start"
              alignItems="center"
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
            </Typography> */}
          </Box>
        </DashboardBox>

        <DashboardBox
          gridArea="b"
          py="0.5rem"
          px="1rem"
          height="100%"
          width="100%"
          position="relative"
          overflow="scroll"
          sx={{
            "& MuiBox-root": {
              display: "none",
            },
          }}
        >
          <BoxHeader
            title="Expense Transaction Data"
            subTitle="You have the option to delete the expense transaction data"
            sideText="Expense "
          />
          {expense.map((item: any) => {
            const { _id, title, amount, date, category, description, type } =
              item;
            return (
              <DashboardBoxItem
                key={_id}
                id={_id}
                title={title}
                description={description}
                amount={amount}
                date={date}
                type={type}
                category={category}
                deleteItem={deleteExpense}
              />
            );
          })}
        </DashboardBox>

        <DashboardBox gridArea="f" position="relative">
          <FormInputPage />
        </DashboardBox>
      </Box>
    </FlexBetween>
  );
};

export default Expense;
