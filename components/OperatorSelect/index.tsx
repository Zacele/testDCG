import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import * as React from 'react';

interface OperatorSelectPropsType {
  setOperator: (operator: string) => void;
  operator: string
}

const OperatorSelect: React.FC<OperatorSelectPropsType> = ({setOperator, operator}) => {

  const handleChange = (event: SelectChangeEvent) => {
    setOperator(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="operator-select-label">Operator</InputLabel>
      <Select
        labelId="operator-select-label"
        id="operator-select"
        value={operator}
        label="Operator"
        onChange={handleChange}
      >
        <MenuItem value={"+"}>+</MenuItem>
        <MenuItem value={"-"}>-</MenuItem>
        <MenuItem value={"*"}>*</MenuItem>
        <MenuItem value={"/"}>/</MenuItem>
      </Select>
    </FormControl>
  )
}

export default OperatorSelect
