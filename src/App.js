import AddWord from './components/AddWord/AddWord';
import GetWord from './components/GetWord/GetWord';
import NavBar from './components/NavBar/NavBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import './App.css';
const App = () => {
  const nameWeb = 'Language service';
  return (
    <div className="App">
      <NavBar setNameWeb={nameWeb} />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
          <AddWord />
          <GetWord />
        </Box>
      </Container>
    </div>
  );
};

export default App;
