import React, { useEffect } from "react";
import FlexBetween from "./FlexBetween";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Button from "./Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { dateFormat } from "../utils/DateFormat";

//income Icons
import CircleIcon from "@mui/icons-material/Circle";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PublicIcon from "@mui/icons-material/Public";
import AddchartIcon from "@mui/icons-material/Addchart";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SavingsIcon from "@mui/icons-material/Savings";

// Expens Icons
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import LuggageIcon from "@mui/icons-material/Luggage";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import { useGlobalContext } from "../context/GlobalContext";

type Props = {
  title: String;
  amount: String;
  id: any;
  date: Date;
  category: String;
  description: String;
  deleteItem?: any;
  indicatorColor?: any;
  type?: any;
};

const DashboardBoxItem = ({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  type,
}: Props) => {
  const { getExpense } = useGlobalContext();

  const IncomeCategoryIcon = () => {
    switch (category) {
      case "salary":
        return (
          <Typography color={palette.primary[400]}>
            <CurrencyRupeeIcon />
          </Typography>
        );
      case "freelancing":
        return (
          <Typography color={palette.secondary[500]}>
            <PublicIcon />
          </Typography>
        );
      case "investments":
        return (
          <Typography color={palette.primary[600]}>
            <AddchartIcon />
          </Typography>
        );
      case "stocks":
        return (
          <Typography color="lightgreen">
            <ShowChartIcon />
          </Typography>
        );
      case "bitcoin":
        return (
          <Typography color="yellow">
            <CurrencyBitcoinIcon />
          </Typography>
        );
      case "bank":
        return (
          <Typography color="lightsalmon">
            <AccountBalanceIcon />
          </Typography>
        );
      case "youtube":
        return (
          <Typography color="red">
            <YouTubeIcon />
          </Typography>
        );
      case "other":
        return (
          <Typography color={palette.secondary[600]}>
            <SavingsIcon />
          </Typography>
        );
      default:
        return "";
    }
  };

  const ExpenseCategoryIcon = () => {
    switch (category) {
      case "education":
        return <Typography color={palette.secondary[600]}>
        <LibraryBooksIcon />
      </Typography>
      case "groceries":
        return <Typography color={palette.secondary[600]}>
        <ShoppingCartIcon />
      </Typography>
      case "health":
        return <Typography color={palette.secondary[600]}>
        <HealthAndSafetyIcon />
      </Typography>
      case "subscription":
        return <Typography color={palette.secondary[600]}>
        <SubscriptionsIcon />
      </Typography>
      case "takeaway":
        return <Typography color={palette.secondary[600]}>
        <DeliveryDiningIcon />
      </Typography>
      case "clothing":
        return <Typography color={palette.secondary[600]}>
        <CheckroomIcon />
      </Typography>
      case "Travelling":
        return <Typography color={palette.secondary[600]}>
        <LuggageIcon />
      </Typography>
      case "other":
        return <Typography color={palette.secondary[600]}>
        <CircleIcon />
      </Typography>
      default:
        return "";
    }
  };

  const { palette } = useTheme();

  useEffect(() => {
    getExpense();
  }, []);

  const isAboveMedium = useMediaQuery("(min-width: 1024px)");

  return (
    <FlexBetween
      border="2px solid #6b6d74"
      color={palette.grey[200]}
      m="1rem 1rem 0rem 1rem"
      position="relative"
      borderRadius="7px"
      p="15px"
      mb="20px"
      className="scrollHide"
    >
      <Box border="1px dashed white" padding="0.9rem" mr="25px">
        {type === "expense" ? ExpenseCategoryIcon() : IncomeCategoryIcon()}
      </Box>
      <FlexBetween width="100%">
        <Box>
          <Typography variant="h4" className="flex">
            <Typography
              color="red"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <CircleIcon />
            </Typography>
            &nbsp;&nbsp;
            {title}
          </Typography>
          <Box className="flex justify-start ml-2 my-4">
            <Typography
              variant="h4"
              mb="-0.2rem"
              mr="10px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography color={palette.secondary[400]}>
                <CurrencyRupeeIcon />
              </Typography>
              {amount}
            </Typography>
            <Typography
              variant="h4"
              mb="-0.2rem"
              mr="10px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography color={palette.secondary[400]}>
                <CalendarMonthIcon />
              </Typography>
              &nbsp;
              {dateFormat(date)}
            </Typography>
            <Typography
              variant="h5"
              mr="10px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={
                isAboveMedium
                  ? {
                      display: "hidden",
                    }
                  : { display: "none" }
              }
            >
              <Typography
                color={palette.secondary[400]}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <ChatBubbleIcon />
              </Typography>
              &nbsp;
              <Typography px="7px">{description}</Typography>
            </Typography>
          </Box>
          <Typography
            variant="h5"
            sx={
              isAboveMedium
                ? {
                    display: "none",
                  }
                : { display: "hidden" }
            }
            display="flex"
          >
            <Typography
              color={palette.secondary[400]}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <ChatBubbleIcon />
            </Typography>
            &nbsp;&nbsp;
            {description}
          </Typography>
        </Box>
      </FlexBetween>
      <Box>
        <Button
          name={""}
          bPad={"1rem 1.4rem"}
          icon={<DeleteIcon />}
          bRad={"5px"}
          bg={palette.grey[900]}
          color={palette.grey[100]}
          onClick={() => deleteItem(id)}
        />
      </Box>
    </FlexBetween>
  );
};

export default DashboardBoxItem;
