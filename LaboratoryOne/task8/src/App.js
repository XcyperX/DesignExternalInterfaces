import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function App() {
  return (
    <Container maxWidth="sm">
      <Paper variant="outlined" sx={{ my: { xs: 2, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <Box component="form" noValidate>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Введите ФИО"
              />
              <TextField
                fullWidth
                margin="normal"
                required
                id="outlined-required"
                label="Введите пароль"
              />
              <FormControl fullWidth>
                <FormLabel id="demo-radio-buttons-group-label">Какие курсы вы хотите получить?</FormLabel>
                <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                >
                  <FormControlLabel value="cd" control={<Radio />} label="CD" />
                  <FormControlLabel value="dvd" control={<Radio />} label="DVD" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth>
              <FormLabel component="legend">Какие обучающие курсы вы хотите видеть на диске?</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox name="photoshop" />
                  }
                  label="Курсы по Фотошопу"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox name="adobe" />
                    }
                    label="Курсы по Adobe Dreamweaver"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox name="php" />
                    }
                    label="Курсы по PHP"
                  />
                </FormGroup>
              </FormControl>
              <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel id="demo-simple-select-label">Выберите способ доставки</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Выберите способ доставки"
              >
                <MenuItem value='urgent'>Срочная</MenuItem>
                <MenuItem value='hz'>Как получится))</MenuItem>
              </Select>
            </FormControl>
            <TextField
                sx={{ mt: 1 }}
                fullWidth
                id="standard-multiline-static"
                label="Введите адрес доставки"
                multiline
                rows={4}
                variant="standard"
            />
            <Stack spacing={1} direction="row" sx={{ mt: 3 }}>
              <Button variant="contained">Сделать заказ</Button>
              <Button variant="contained">Отмена</Button>
            </Stack>
          </Box>           
        </Box>
      </Paper>
    </Container>
  );
}

export default App;