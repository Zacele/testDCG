import {Grid, TextField, Typography} from "@mui/material";
import CustomButton from "components/CustomButton";
import DisplayBox from "components/DisplayBox";
import OperatorSelect from "components/OperatorSelect";
import {TAppContext} from "context";
import useKeyPress from "hooks/useKeyPress"
import React from "react"
import postFixEvaluation from "utils/postfix";

const SecondScreenOnward = ({contextValue}: { contextValue: TAppContext }) => {
  const [operand, setOperand] = React.useState<number | null>(null)
  const [operator, setOperator] = React.useState<string | null>('')
  const textRef = React.useRef<HTMLInputElement>(null)
  const onEnterPressed = useKeyPress('Enter')
  const onAddOperationClicked = () => {
    contextValue.setItems([...contextValue.items, operand ?? " ", operator ?? " "])
    setOperator('')
    setOperand(null)
    textRef.current?.value && (textRef.current.value = '')
  }

  React.useEffect(() => {
    if (onEnterPressed) {
      onAddOperationClicked()
    }
  }, [onEnterPressed])

  return (
    <Grid container spacing={{xs: 2, md: 3}}>
      <Grid item xs={12} md={12} display={"flex"} alignItems={"center"} justifyContent={"center"}>
        {contextValue.items.filter(element => (element !== '' && element !== ' ')).map((item, idx) => {
          return (
            <DisplayBox item={item} key={idx}/>
          )
        })}
      </Grid>
      <Grid item xs={12} md={12} display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Typography variant="h4" component="h2" align={'center'} color={"black"}>
          =
        </Typography>
      </Grid>
      <Grid item xs={12} md={12} display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Typography variant="h4" component="h2" align={'center'} color={"#50e2c2"} marginBottom={"20px"}>
          {postFixEvaluation(contextValue.items)}
        </Typography>
      </Grid>
      {contextValue.items.filter(ele => (ele !== '' && ele !== ' ')).length < 11 ?
        <>
          <Grid item xs={6} md={4}>
            <OperatorSelect setOperator={setOperator} operator={operator}/>
          </Grid>
          <Grid item xs={6} md={4}>
            <TextField
              id="operand-onwards-field"
              label="Operand"
              fullWidth
              variant="outlined"
              onChange={(e) => setOperand(Number(e.target.value))}
              inputRef={textRef}
              type={'number'}/>
          </Grid>
          <Grid item xs={12} md={4}>
            <CustomButton onClick={onAddOperationClicked}>
              Add Operation
            </CustomButton>
          </Grid>
        </> :
        <Typography align={'center'} color={"red"}>
          Maximum operations reached.
        </Typography>
      }
    </Grid>)
}

export default SecondScreenOnward