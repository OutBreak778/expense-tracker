/* eslint-disable no-unused-vars */
import { Box } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme";
import Navbar from "./scenes/navbar"
import Dashboard from "./scenes/dashboard"
import React from "react";
import Transaction from "./scenes/transaction"
import Income from "./scenes/income";
import Expense from "./scenes/expense";
import { useGlobalContext } from "./context/GlobalContext";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  const global = useGlobalContext()
  console.log(global)
  return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/transaction" element={<Transaction />} />
              <Route path="/income" element={<Income />} />
              <Route path="/expense" element={<Expense />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;