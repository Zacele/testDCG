import {Button} from "@mui/material";
import React from "react"
import styled from 'styled-components';

const CustomButtonWrapper = styled(Button)`
  width: 100%;
  height: 56px;
  background-color: #79cea1;

  &:hover {
    background-color: #79cea1;
  }

  &:focus {
    background-color: #79cea1;
  }
`

interface CustomButtonPropsType {
  onClick: () => void,
  disabled: boolean,
  children: React.ReactNode
}

const CustomButton = ({
                        onClick,
                        disabled,
                        children
                      }: CustomButtonPropsType) => {
  return (
    <CustomButtonWrapper
      size={"large"}
      variant="contained"
      onClick={onClick}
      disabled={disabled}>
      {children}
    </CustomButtonWrapper>
  )
}

export default CustomButton