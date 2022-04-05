import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import SelectLang from '../SelectLang/SelectLang';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import api from '../../utils/Api';

const GetWord = () => {
  const [hashCode, setHashCode] = useState('');
  const [language, setLanguage] = useState('en');
  const [result, setResult] = useState('');
  const [load, setLoad] = useState(false);
  const getWord = async () => {
    setResult('');
    setLoad(true);
    try {
      let res = await api({
        method: 'get',
        url: 'word/',
        params: {
          word_code: hashCode.trim(),
          lang: language
        }
      });
      setResult(res.data.text);
    } catch (err) {
      setResult('There is no such word in the database');
    }
    setLoad(false);
  };
  return (
    <Grid sm={12}>
      <Card
        variant="outlined"
        sx={{
          m: 2,
          p: 4,
          minWidth: 600
        }}>
        <Typography variant="h5" mb={3}>
          Get Word
        </Typography>
        <Grid sm={12}>
          <TextField
            required
            defaultValue={hashCode}
            onChange={(e) => setHashCode(e.target.value)}
            label="WordCode"
            variant="outlined"
            sx={{
              ml: 1,
              mr: 1
            }}
          />
          <SelectLang setLanguage={setLanguage} />
        </Grid>
        <Button
          sx={{
            m: 1.5
          }}
          onClick={getWord}
          disabled={load}
          variant="contained">
          {'Get Word'}
        </Button>
        <Typography variant="h5"> {result}</Typography>
      </Card>
    </Grid>
  );
};

export default GetWord;
