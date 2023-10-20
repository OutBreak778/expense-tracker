import React from "react";
import styled from "styled-components";
import DashboardBox from "./DashboardBox";

function Button({ name, onClick, icon, bg, bPad, color, bRad }) {
  return (
    <DashboardBox>
        <ButtonStyled
          style={{
            background: bg,
            padding: bPad,
            borderRadius: bRad,
            color: color,
          }}
          onClick={onClick}
        >
          <span >{icon}</span>
          {name}
        </ButtonStyled>
    </DashboardBox>
  );
}

const ButtonStyled = styled.button`
border: 2px solid #6b6d74;
`;

export default Button;
