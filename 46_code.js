// import InputNameField from "./MyInput";
// function App() {
//   return (
//     <InputNameField>
//       <h1>Hello At Our App</h1>
//     </InputNameField>
//   );
// }

// export default App;

// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Button from "@mui/material/Button";

// const theme = createTheme({
//   palette: {
//     primary: { main: "#1976d2" },
//     secondary: { main: "#9c27b0" },
//   },
// });

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Button color="secondary" variant="contained">
//         Custom Theme
//       </Button>
//     </ThemeProvider>
//   );
// }

// export default App;

// import React from "react";
// import { Card, CardContent, CardHeader, Typography, Box } from "@mui/material";

// function CustomCard({ title, children }) {
//   return (
//     <Card
//       sx={{
//         maxWidth: 345,
//         borderRadius: 3,
//         boxShadow: 3,
//         m: 2,
//       }}
//     >
//       {title && <CardHeader title={title} />}
//       <CardContent>
//         <Box>{children}</Box>
//       </CardContent>
//     </Card>
//   );
// }

// export default function App() {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         flexWrap: "wrap",
//         gap: 2,
//         p: 3,
//       }}
//     >
//       <CustomCard title="👤 User Info">
//         <Typography>Name: John Doe</Typography>
//         <Typography>Age: 25</Typography>
//       </CustomCard>

//       <CustomCard title="🛒 Product Info">
//         <Typography sx={{ mt: 1 }}>Product: Wireless Headphones</Typography>
//         <Typography color="text.secondary">$120</Typography>
//       </CustomCard>

//       <CustomCard title="💬 Message">
//         <Typography>"React with MUI feels amazing!"</Typography>
//         <Typography variant="caption">- Muhammad</Typography>
//       </CustomCard>
//     </Box>
//   );
// }

// import Button from "@mui/material/Button";
// import React from "react";
// import { useState } from "react";
// import SendIcon from "@mui/icons-material/Send";
// import Stack from "@mui/material/Stack";
// import Alert from "@mui/material/Alert";
// // import Stack from "@mui/material/Stack";

// // import Button from "@mui/material/Button";
// // import SendIcon from "@mui/icons-material/Send";

// export default function BasicAlerts() {
//   const [showAlert, setShowAlert] = React.useState(false);
//   return (
//     <>
//       <Button
//         onClick={() => setShowAlert(true)}
//         variant="contained"
//         endIcon={<SendIcon />}
//       >
//         Send
//       </Button>
//       <Stack sx={{ width: "100%" }} spacing={2}>
//         {showAlert && (
//           <Alert severity="success">You have sent the message right now.</Alert>
//         )}
//       </Stack>
//     </>
//   );
// }

// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Switch from "@mui/material/Switch";
// import { useState } from "react";
// import Container from "@mui/material/Container";
// import Collapse from "@mui/material/Collapse";

// const label = { inputProps: { "aria-label": "Switch demo" } };

// export default function AccordionUsage() {
//   const [checked, setChecked] = useState(true);
//   return (
//     <Container maxWidth="md" sx={{ mt: "16px" }}>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2-content"
//           id="panel2-header"
//         >
//           <Typography component="span">Accordion 1</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//           malesuada lacus ex, sit amet blandit leo lobortis eget.
//         </AccordionDetails>
//       </Accordion>

//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2-content"
//           id="panel2-header"
//         >
//           <Typography component="span">Accordion 2</Typography>
//         </AccordionSummary>
//         <AccordionDetails style={{ textAlign: "center" }}>
//           <Switch
//             onChange={(e) => setChecked(e.target.checked)}
//             {...label}
//             defaultChecked
//             sx={{
//               "& .MuiSwitch-switchBase.Mui-checked": {
//                 color: "green", // thumb color when ON
//               },
//               "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
//                 backgroundColor: "green", // track color when ON
//               },
//             }}
//           />
//         </AccordionDetails>
//       </Accordion>
//       <Collapse in={checked} collapsedSize={100}>
//       <div
//         style={{
//           backgroundColor: "orange",
//           textAlign: "center",
//           height: "300px"
//         }}
//       >
//         Hello World{" :)"}
//       </div>
//       </Collapse>
//     </Container>
//   );
// }

/*
import { useState } from "react";

function InputNameField({children}) {
  const [name, setName] = useState("");
  return (
    <>
      {children}
      <label htmlFor="name">The name of the user:</label>
      <br />
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        id="name"
        name="name"
        value={name}
      />
    </>
  );
}

export default InputNameField;
*/
