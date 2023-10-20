/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import axios from "axios";
const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext();

// eslint-disable-next-line react/prop-types
const GlobalProvider = ({ children }) => {
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);
  const [error, setError] = useState(null);

  const addIncome = async (income) => {
    const response = await axios
      .post(`${BASE_URL}add-income `, income)
      .catch((error) => {
        setError(error.response.data.message);
      });
    getIncome();
    // console.log(response);
  };

  const getIncome = async () => {
    const response = await axios.get(`${BASE_URL}get-income`);
    setIncome(response.data);
    // console.log(response.data)
  };

  const deleteIncome = async (id) => {
    const response = await axios.delete(`${BASE_URL}delete-income/${id}`);
    // console.log(response);
    getIncome();
  };

  const totalIncome = () => {
    let totalIncome = 0;
    income.forEach((income) => {
      totalIncome += income.amount;
    });
    return totalIncome;
  };
  // console.log("Total: ", totalIncome());

  const addExpense = async (expense) => {
    const response = await axios
      .post(`${BASE_URL}add-expense`, expense)
      .catch((error) => {
        setError(error.response.data.message);
      });
    // console.log(response.data);
    getExpense()
  };

  const getExpense = async () => {
    const response = await axios.get(`${BASE_URL}get-expense`);
    setExpense(response.data);
  };

  const deleteExpense = async (id) => {
    const response = await axios.delete(`${BASE_URL}delete-expense/${id}`);
    getExpense();
    // console.log(response.data);
  };

  const totalExpense = () => {
    let totalExpense = 0;
    expense.forEach((expense) => {
      totalExpense += expense.amount
    })
    return totalExpense
  }

  const totalBalance = () => {
    return totalIncome() - totalExpense()
  }

  // console.log(totalExpense())
  const transactionHistory = () => {
    const history = [...income, ...expense]
    history.sort((x,y) => {
      return new Date(y.createdAt) - new Date(x.createdAt)
    })
    return history.slice(0,3)
  }
  const transactionPage = () => {
    const history = [...income, ...expense]
    const histPage = history.sort((x,y) => {
      return new Date(y.createdAt) - new Date(x.createdAt)
    })
    return histPage
  }


  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncome,
        income,
        deleteIncome,
        totalIncome,
        addExpense,
        getExpense,
        expense,
        deleteExpense,
        totalExpense,
        transactionHistory,
        totalBalance,
        transactionPage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
export { GlobalContext, GlobalProvider };
