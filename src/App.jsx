import React from "react";
import "./";
import AdminRoutes from "./routes/AdminRoutes/AdminRoutes";
import TrainerRoutes from "./routes/TrainerRoutes/TrainerRoutes";
import UserRoutes from "./routes/UserRoutes/UserRoutes";
import theme from "./utility/Themes";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import "./App.css"

function App() {
  return (
    <div >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container className="App">
          <AdminRoutes />
          <TrainerRoutes />
          <UserRoutes />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
