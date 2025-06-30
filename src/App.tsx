import "./App.css";
import { Container, Button, Stack, Typography } from "@mui/material";

function App() {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Kayzen
      </Typography>
      <Stack spacing={2}>
        <Button variant="contained" fullWidth>
          Pick a Quest
        </Button>
        <Button variant="contained" color="secondary" fullWidth>
          Add New Quest
        </Button>
        <Button variant="contained" fullWidth>
          Accepted Quests
        </Button>
        <Button variant="outlined" fullWidth>
          Settings
        </Button>
      </Stack>
    </Container>
  );
}

export default App;
