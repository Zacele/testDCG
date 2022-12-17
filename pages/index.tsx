import {Box, Container, Typography} from '@mui/material';
import FirstScreen from "components/Screens/FirstScreen";
import SecondScreenOnward from "components/Screens/SecondScreenOnward";
import {AppContext,} from "context";
import React from 'react';

export default function Home() {
  const contextValue = React.useContext(AppContext)
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h2" align={'center'} color={"#50e2c2"}>
          Expression <br/> Evaluator
        </Typography>
      </Box>
      {contextValue.items.length > 0 ?
        <SecondScreenOnward contextValue={contextValue}/> :
        <FirstScreen contextValue={contextValue}/>}
    </Container>
  );
}