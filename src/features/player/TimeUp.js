import { Box, Stack, Typography, Button } from '@mui/material'

import { useSelector } from "react-redux";
import { playerSelector } from './playerSlice';
import DangerousIcon from '@mui/icons-material/Dangerous';

const TimeUp = () => {
  const { name, questions, curQuestion, score } = useSelector(
    playerSelector
  );

  return (
    <Box sx={{
      width: '100%',
      height: '100%',
    }}>
      <Box
        sx={{
          height: 1 / 10,
          boxShadow: 5,
          display: 'flex'
        }}
      >
        <Typography sx={{
          marginLeft: 1,
          fontWeight: 'bold',
          width: '15%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'left',
          display: 'flex',
        }}>
          {curQuestion ? curQuestion + 1 : 1} of {questions.length}
        </Typography>
        <Typography sx={{
          marginLeft: 1,
          fontWeight: 'bold',
          fontSize: 20,
          width: '70%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}>
          {curQuestion !== null ? questions[curQuestion].type : 'Type of question'}
        </Typography>
      </Box>
      <Box
        sx={{
          height: 8 / 10,
          width: '100%',
          bgcolor: '#46178F',
          display: 'inline-grid',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white'
        }}
      >
        <Box component='div' justifyContent='center' alignItems='center'  >
          <Stack spacing={5} alignItems="center">
            <Typography variant="h3" align='center' fontWeight='500' fontFamily='Segoe UI'>Time's up</Typography>
            <DangerousIcon
              sx={{
                fontSize: 100,
                stroke: "#ffffff",
                strokeWidth: 1,
                bgcolor: 'inherit',
                color: 'red',
              }}
            />
          </Stack>
        </Box>
      </Box>
      <Box
        sx={{
          height: 1 / 10,
          boxShadow: 5,
          display: 'flex'
        }}
      >
        <Typography sx={{
          marginLeft: 1,
          fontWeight: 'bold',
          width: '90%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'left',
          display: 'flex',
        }}>
          {name}
        </Typography>
        <Button variant="contained"
          aria-disabled='true'
          sx={{
            m: 'auto',
            mx: 1,
            width: '8%',
            height: '60%',
            fontSize: 20,
            fontWeight: 'bold',
            backgroundColor: 'black',
            "&:hover": {
              backgroundColor: "black"
            },
            cursor: 'text'
          }}
        >{score}</Button>
      </Box>
    </Box >
  );
};

export default TimeUp;
