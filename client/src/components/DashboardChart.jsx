/* eslint-disable no-unused-vars */
import React from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import { useGlobalContext } from "../context/GlobalContext";
import { dateFormat } from "../utils/DateFormat";
import { useTheme } from "@mui/material";
import "../App.css"

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function DashboardChart() {
  const { income, expense } = useGlobalContext();
  const { palette } = useTheme();

  const data = {
    labels: income.map((inc) => {
      const { date } = inc;
      return dateFormat(date);
    }),
    datasets: [
      {
        label: "Income",
        data: [
          ...income.map((income) => {
            const { amount } = income;
            return amount;
          }),
        ],
        tension: 0.4,
        borderColor: `${palette.primary[600]}`,
        pointBorderColor: `${palette.primary[700]}`,
        pointBackgroundColor: `${palette.grey[100]}`,
      },
      {
        label: "Expenses",
        data: [
          ...expense.map((expense) => {
            const { amount } = expense;
            return amount;
          }),
        ],
        tension: 0.4,
        borderColor: `${palette.secondary[600]}`,
        pointBorderColor: `${palette.primary[700]}`,
        pointBackgroundColor: `${palette.grey[100]}`,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false
  }

  return (
        <ChartStyled className="chatBox">
          <Line data={data} options={options} />
        </ChartStyled> 
  );
}

const ChartStyled = styled.div`
  background: transparent;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.08);
  padding: 1rem 0rem 0.8rem 1rem;
  border-radius: 20px;
  height: 80%;
`;

export default DashboardChart;
