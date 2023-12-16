import { Box, Typography } from "@mui/material";

export const ImpressumPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        gap: 2,
      }}
    >
      <Typography variant="h4" textAlign={"start"}>
        Impressum
      </Typography>
      <Typography variant="h5" textAlign={"start"}>
        Verantwortlich für den Inhalt
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography variant="body1" textAlign={"start"}>
          Valeriano Di Domenico
        </Typography>
        <Typography variant="body1" textAlign={"start"}>
          Künzlistrasse 25
        </Typography>
        <Typography variant="body1" textAlign={"start"}>
          8057 Zürich
        </Typography>
        <Typography variant="body1" textAlign={"start"}>
          Schweiz
        </Typography>
        <Typography variant="body1" textAlign={"start"}>
          E-Mail: mail@valerianodidomenico.ch
        </Typography>
        <Typography variant="body1" textAlign={"start"}>
          Tel.: +41 78 604 02 05
        </Typography>
      </Box>
    </Box>
  );
};
