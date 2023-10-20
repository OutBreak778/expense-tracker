import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PixIcon from "@mui/icons-material/Pix";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  const isAboveMedium = useMediaQuery("(min-width: 1032px)");
  const [open, setOpen] = useState(false)
  function handleClick() {
    setOpen(!open)
  }
  return (
    <>
      {isAboveMedium ? (
        <FlexBetween mb="0.75rem" p="0.5rem 0rem" color={palette.grey[300]}>
          {/* LEFT SIDE */}
          <FlexBetween gap="0.75rem">
            <PixIcon sx={{ fontSize: "28px" }} />
            <Typography variant="h4" fontSize="16px">
              OUTBREAK
            </Typography>
          </FlexBetween>

          {/* RIGHT SIDE */}
          <FlexBetween gap="1rem">
            <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
              <Link
                to="/"
                onClick={() => setSelected("dashboard")}
                style={{
                  color:
                    selected === "dashboard" ? "inherit" : palette.grey[700],
                  textDecoration: "inherit",
                }}
              >
                Dashboard
              </Link>
            </Box>
            <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
              <Link
                to="/transaction"
                onClick={() => setSelected("transaction")}
                style={{
                  color:
                    selected === "transaction" ? "inherit" : palette.grey[700],
                  textDecoration: "inherit",
                }}
              >
                Transaction
              </Link>
            </Box>
            <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
              <Link
                to="/income"
                onClick={() => setSelected("income")}
                style={{
                  color: selected === "income" ? "inherit" : palette.grey[700],
                  textDecoration: "inherit",
                }}
              >
                Income
              </Link>
            </Box>
            <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
              <Link
                to="/expense"
                onClick={() => setSelected("expense")}
                style={{
                  color: selected === "expense" ? "inherit" : palette.grey[700],
                  textDecoration: "inherit",
                }}
              >
                Expense
              </Link>
            </Box>
          </FlexBetween>
        </FlexBetween>
      ) : (
        <FlexBetween mb="0.75rem" p="0.5rem 0rem" color={palette.grey[300]}>
          {/* LEFT SIDE */}
          <FlexBetween gap="0.75rem">
            <PixIcon sx={{ fontSize: "28px" }} />
            <Typography variant="h4" fontSize="16px">
              OUTBREAK
            </Typography>
          </FlexBetween>

          {/* RIGHT SIDE */}
          <FlexBetween gap="1rem">
            {/* <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/transaction"
            onClick={() => setSelected("transaction")}
            style={{
              color: selected === "transaction" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Transaction
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/income"
            onClick={() => setSelected("income")}
            style={{
              color: selected === "income" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Income
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/expense"
            onClick={() => setSelected("expense")}
            style={{
              color: selected === "expense" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Expense
          </Link>
        </Box> */}
            <div className="container flex flex-col p-1" onClick={handleClick}>
              <span className="w-5 h[3px] border m-[2px] border-gray-50 gap-1"></span>
              <span className="w-5 h[3px] border m-[2px] border-gray-50 gap-1"></span>
              <span className="w-5 h[3px] border m-[2px] border-gray-50 gap-1"></span>
            </div>
          </FlexBetween>
        </FlexBetween>
      )}
    </>
  );
};

export default Navbar;
