import { Grid, TextField } from "@mui/material";
import CustomButton from "components/CustomButton";
import { TAppContext } from "context";
import React from "react"

const FirstScreen = ({ contextValue }: { contextValue: TAppContext }) => {
  const [firstOperand, setFirstOperand] = React.useState<number | null>(null)
  const onFirstScreenAddOperandClick = () => {
    contextValue.setItems([firstOperand])
  }

  return (
    <Grid container spacing={3} alignItems={"center"}>
      <Grid item xs={12} md={6}>
        <TextField
          id="first-operand-field"
          label="Please enter a number"
          fullWidth
          variant="outlined"
          onChange={(e) => setFirstOperand(Number(e.target.value))}
          type={'number'} />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomButton
          onClick={onFirstScreenAddOperandClick}
          disabled={!firstOperand}>
          Add Number
        </CustomButton>
      </Grid>
    </Grid>
  )
}

export default FirstScreen