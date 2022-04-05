import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SelectLang from '../SelectLang/SelectLang';
import Card from '@mui/material/Card';
import api from '../../utils/Api';

const AddWord = () => {
  const [language, setLanguage] = useState('en');
  const [textWord, setTextLang] = useState('');
  const [load, setLoad] = useState(false);
  const [wordCode, setWordCode] = useState('');
  const [result, setResult] = useState('');
  const addWordF = async () => {
    setLoad(true);
    setResult('');

    api
      .post('word', {
        word_code: wordCode.trim(),
        lang: language,
        text: textWord.trim()
      })
      .then((res) => {
        if (res.data.word_code) {
          if (res.data.text !== textWord) {
            setResult('The word is already stored in the repository');
          } else {
            setResult('This word has been successfully saved');
          }
        }
      })
      .catch((err) => {
        setResult(err.response.data.message);
      });

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
          Add Word
        </Typography>
        <TextField
          required
          label="WordCode"
          variant="outlined"
          sx={{
            mr: 1,
            ml: 1
          }}
          onChange={(e) => setWordCode(e.target.value)}
        />
        <TextField
          required
          label="text"
          variant="outlined"
          onChange={(e) => setTextLang(e.target.value)}
          sx={{
            ml: 1,
            mr: 1
          }}
        />
        <SelectLang setLanguage={setLanguage} />
        <Button onClick={addWordF} disabled={load} sx={{ m: 1.5 }} variant="contained">
          Add Word
        </Button>
        <Typography variant="h5">{result}</Typography>
      </Card>
    </Grid>
  );
};

export default AddWord;
