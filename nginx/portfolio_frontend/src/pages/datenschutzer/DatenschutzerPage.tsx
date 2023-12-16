import { Box, Typography } from "@mui/material";

export const DatenschutzerPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        height: "70vh",
        paddingX: "20%",
        gap: 2,
      }}
    >
      <Typography variant="h4">Datenschutzerklärung</Typography>
      <Typography variant="body1" textAlign={"start"}>
        Wir freuen uns über Ihren Besuch auf unserer Internetseite
        valerianodidomenico.ch und Ihr Interesse an unserem Unternehmen. Der
        Schutz Ihrer personenbezogenen Daten, wie z.B. Geburtsdatum, Name,
        Telefonnummer, Anschrift etc., ist uns ein wichtiges Anliegen. Der Zweck
        dieser Datenschutzerklärung besteht darin, Sie über die Bearbeitung
        Ihrer personenbezogenen Daten zu informieren, die wir bei einem
        Seitenbesuch von Ihnen sammeln. Unsere Datenschutzpraxis steht im
        Einklang mit den gesetzlichen Regelungen des Bundesgesetzes über den
        Datenschutz (DSG) der Schweiz. Die nachfolgende Datenschutzerklärung
        dient der Erfüllung der Informationspflichten aus dem DSG. Diese finden
        sich z.B. in Art. 19 ff. DSG.
      </Typography>
      <Typography variant="h4">Inhaber</Typography>
      <Typography variant="body1" textAlign={"start"}>
        Verantwortlicher der Daten im Sinne von Art. 5 Bst. j DSG sind private
        Personen oder das Bundesorgan, die über den Zweck und die Mittel der
        Bearbeitung entscheiden. Im Hinblick auf unsere Internetseite ist der
        Inhaber: Valeriano Di Domenico Künzlistrasse 25 8057 Zürich Schweiz
        E-Mail: mail@valerianodidomenico.ch Tel.: +41 78 604 02 05
      </Typography>
    </Box>
  );
};
