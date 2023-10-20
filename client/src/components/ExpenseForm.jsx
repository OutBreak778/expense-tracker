/* eslint-disable no-unused-vars */

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import AddIcon from "@mui/icons-material/Add";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import BoxHeader from "./BoxHeader";
import { useGlobalContext } from "../context/GlobalContext";
import { useState } from "react";
import Button from "./Button";

const FormInputPage = () => {
  const { addExpense } = useGlobalContext();

  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(inputState);
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
  };

  return (
    <FormControl onSubmit={handleSubmit} fullWidth>
      <BoxHeader
        title="Please input your Expense"
        subTitle="Please provide the date of your expense for inclusion in the database"
        sideText="Form"
      />
      <Box
        component="form"
        noValidate
        autoComplete="off"
        mt="2rem"
        ml="2rem"
        width="80%"
        sx={{
          "& .MuiInputBase-input": {
            backgroundColor: "transparent",
            color: "white",
          },
        }}
      >
        <TextField
          id="filled-basic"
          label="Title"
          variant="filled"
          value={title}
          onChange={handleInput("title")}
          fullWidth
          sx={{
            "& .MuiFormLabel-root": {
              color: " white",
            },
          }}
        />
      </Box>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        mt="2rem"
        ml="2rem"
        width="80%"
        sx={{
          "& .MuiInputBase-input": {
            backgroundColor: "transparent",
            color: "white",
          },
        }}
      >
        <TextField
          id="filled-basic"
          label="Amount"
          variant="filled"
          value={amount}
          fullWidth
          onChange={handleInput("amount")}
          sx={{
            "& .MuiFormLabel-root": {
              color: "white",
            },
          }}
        />
      </Box>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        mt="2rem"
        ml="2rem"
        width="80%"
        sx={{
          "& .MuiInputBase-input": {
            backgroundColor: "transparent",
            color: "white",
          },
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={["DatePicker"]}
            sx={{
              "& .MuiSvgIcon-root": {
                color: "white",
              },
              "& .MuiFormLabel-root": {
                color: "white",
              },
            }}
          >
            <DatePicker
              label="Basic date picker"
              selected={date}
              dateFormat="dd/mm/yyy"
              onChange={(date) => {
                setInputState({ ...inputState, date: date });
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
      </Box>
      <Box
        component="form"
        noValidate
        mt="2rem"
        ml="2rem"
        width="80%"
        sx={{
          "& .MuiInputBase-input": {
            backgroundColor: "transparent",
            color: "white",
          },
        }}
      >
        <FormControl
          variant="filled"
          fullWidth
          sx={{
            "& .MuiFormLabel-root": {
              color: "white",
            },
            "& .MuiSvgIcon-root": {
              color: "white",
            },
          }}
        >
          <InputLabel id="demo-simple-select-filled-label">
            Expense Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            disableUnderline={true}
            value={category}
            onChange={handleInput("category")}
          >
            <MenuItem value="education">Education</MenuItem>
            <MenuItem value="groceries">Groceries</MenuItem>
            <MenuItem value="health">Stocks</MenuItem>
            <MenuItem value="subscription">Subscription</MenuItem>
            <MenuItem value="takeaway">Takeaway</MenuItem>
            <MenuItem value="clothing">Clothing</MenuItem>
            <MenuItem value="Travelling">Travelling</MenuItem>
            <MenuItem value="other">Others</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        mt="2rem"
        ml="2rem"
        width="80%"
        sx={{
          "& .MuiInputBase-input": {
            backgroundColor: "transparent",
            color: "white",
          },
        }}
      >
        <TextField
          id="filled-basic"
          label="Description"
          placeholder="Description should be less than 300 words"
          variant="filled"
          value={description}
          multiline
          fullWidth
          rows={4}
          sx={{
            "& .MuiFormLabel-root": {
              color: "white",
            },
          }}
          onChange={handleInput("description")}
        />
      </Box>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        mt="2rem"
        ml="2rem"
        width="80%"
        sx={{
          "& .MuiInputBase-input": {
            backgroundColor: "transparent",
            color: "white",
          },
        }}
      >
        <Stack
          spacing={10}
          direction="row"
          sx={{
            "& .MuiButton-root": {
              backgroundColor: "#242427",
            },
          }}
        >
          <Button
            name={"Add Expense"}
            bPad={".8rem 1.2rem"}
            icon={<AddIcon className="mr-2" />}
            bRad={"7px"}
            bg={"var(--color-accent"}
            color={"#fff"}
          />{" "}
        </Stack>
      </Box>
    </FormControl>
  );
};

export default FormInputPage;
