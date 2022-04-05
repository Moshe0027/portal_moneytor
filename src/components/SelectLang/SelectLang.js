import allLanguage from './data/allLanguage';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

// eslint-disable-next-line react/prop-types
const SelectLang = ({ setLanguage }) => {
  return (
    <FormControl>
      <InputLabel> Language </InputLabel>
      <Select label="Language *" defaultValue="en" onChange={(e) => setLanguage(e.target.value)}>
        {allLanguage.map((ele) => {
          return (
            <MenuItem key={ele.code} value={ele.code}>
              {ele.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectLang;
