import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { TOURNAMENT_TYPE } from "../../../enums/tournament_type";


export default function StepOne() {
  const [tournamentType, setTournamentType] = useState("");

  const handleChangeTournamentType = (event) => {
    setTournamentType(event.target.value);
  };

  return (
    <Box sx={{ width: "100%"}}>
      <Grid container sx={{marginTop: '24px', gap: '8px', justifyContent: 'center'}}>
        <Grid xs={7}>
            <TextField
              id="tournament-name"
              label="Nome do campeonato"
              variant="outlined"
              fullWidth
            />
        </Grid>
        <Grid xs={4}>

            <FormControl fullWidth>
              <InputLabel id="tournament-type-label">
                Tipo de campeonato
              </InputLabel>
              <Select
                labelId="tournament-type-select"
                id="tournament-type"
                value={tournamentType}
                label="Tipo de campeonato"
                onChange={handleChangeTournamentType}
              >
                {TOURNAMENT_TYPE.map(([key, value]) => (
                  <MenuItem key={key} value={key}>
                    {value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}
