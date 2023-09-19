import "../login/login.css";
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  FormControlLabel,
  Button,
} from "@mui/material";
import LockClock from "@mui/icons-material/LockOpen";
import Checkbox from "@mui/material/Checkbox";

function Login() {
  const avatarStyle = { backgroundColor: "green" };
  
  return (
    <Grid>
      <Paper elevation={10} id="container">
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockClock />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField label="User" fullWidth required />
        <TextField label="Password" type="password" fullWidth required />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button variant="contained" type="submit" color="primary" fullWidth>
          Sign In
        </Button>
      </Paper>
    </Grid>
  );
}

export { Login };
