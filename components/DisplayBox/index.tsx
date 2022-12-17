import Typography from '@mui/material/Typography';
import React from 'react';
import styled from 'styled-components';


const OperandBoxWrapper = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 4px;
  background-color: #ecf6f8;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
`
const OperandBox = ({item}: { item: string | number | null | undefined }) => {
  const [displayNumber, setDisplayNumber] = React.useState<string | number | null | undefined>("")

  React.useEffect(() => {
    if (JSON.stringify(item).length > 3) {
      setDisplayNumber(JSON.stringify(item).substring(0, 3) + "..")
      return
    }
    return setDisplayNumber(item)
  }, [])

  return (
    <OperandBoxWrapper>
      <Typography>
        {displayNumber}
      </Typography>
    </OperandBoxWrapper>
  )
}

export default OperandBox