import { Box, Button, Divider, Typography } from "@mui/material";
import valeriano_profile_pic from "./data/valeriano_profile_pic.jpg";
import { data } from "./data/sideBarContent";
import styles from "./AboutPage.module.css";

export const AboutPage = () => {
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        marginTop: "4rem",
        marginBottom: "4rem",
        gap: 6,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          maxWidth: "80%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            maxWidth: "30rem",
            gap: 2,
          }}
        >
          <Typography variant="h4" style={{ fontWeight: "bold" }}>
            Valeriano Di Domenico
          </Typography>
          <img
            src={valeriano_profile_pic}
            alt="valeriano de demenico"
            style={{ width: "30rem", aspectRatio: "4 / 5", objectFit: "cover" }}
          />
          <Typography
            variant="body1"
            textAlign={"start"}
            sx={{ fontWeight: "bold" }}
          >
            "Hundert gedanken schwirren mir durch den kopf, wenn ich vor einer
            fotografischen aufgabe stehe"
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "40rem",
            gap: 2,
          }}
        >
          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            Seine Geschichte beginnt auf dem Fussballplatz. Natürlich ist es die
            Liebe zum Spiel. Noch mehr aber fasziniert Valeriano Di Domenico das
            Geschehen hinter der Linie. Wie Fotografen die Emotionen des Spiels
            einfangen. Prägende Sekunden für die Ewigkeit festhalten.
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            Die Liebe zum Sport bleibt. Als Fotograf entwickelt sich Valeriano
            aber immer weiter. Heute sagt er: «Vor einer fotografischen Aufgabe
            frage ich mich: Was ist die Geschichte hinter dem Sujet? Wie könnte
            sie sich entwickeln?» So tastet er sich heran: zum Kern, der sich
            hinter einem Sujet verbirgt. Denn fotografieren ist für den Züricher
            mit italienischen Wurzeln ein Prozess - genährt von Können,
            Kreativität und Fantasie. Eigenschaften, die ihn nach 18
            Berufsjahren auszeichnen.
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            Das Handwerk lernt er bei der Gruppe Autodidaktische Fotografen
            (GAF). Durch sie fand er den beruflichen Einstieg. Ab 2003 ist er
            fester Mitarbeiter bei «EQ Images». Valeriano beginnt als
            Sportfotograf, ist an Fussball-Grossanlässen wie WM und EM oder an
            Olympischen Spielen im Einsatz. Hier lernt er sich durchzusetzen.
            Und ein Auge für «das andere Bild» zu entwickeln, wie er sagt. Er
            weitet sein Spektrum immer mehr aus. 2011 gründet er die Bildagentur
            «Fresh Focus» mit. Themen wie Politik, Wirtschaft, Kultur und
            Gesellschaft kommen hinzu. 2014 dann der Schritt in die
            Selbstständigkeit. Valeriano Di Domenico beschäftigt sich vermehrt
            mit Porträtfotografie, Lichtführung, arbeitet immer mehr im Studio
            oder ist für Outdoor-Shootings draussen im Feld. Hier ist
            Zusammenarbeit gefragt. Natürlich ist Valeriano ein Teamplayer. Den
            Einzelkämpfer von einst im Stadion hat er längst hinter sich
            gelassen. Und genau das schätzt Valeriano an seiner Arbeit, die ihn
            täglich bereichert. «Die Vielseitigkeit. Ich arbeite ebenso gerne
            mit dem ganz langen Objektiv wie mit einer Minikamera. Und ich bin
            ebenso gerne im Studio wie an einem Live-Event.»
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            Fotografieren ist für ihn nicht nur ein Beruf, sondern Erfüllung.
            Und genau das macht ein gutes Bild für ihn aus: «Es muss etwas
            darstellen, etwas zeigen, etwas festhalten - und den Betrachter
            berühren. Es ist eigentlich ganz einfach. Oder eben: ganz
            schwierig.»
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography variant="subtitle2" textAlign="start">
            Phone: +41 78 604 02 05
          </Typography>
          <Typography variant="subtitle2" textAlign="start">
            Email: mail@valerianodidomenico.ch
          </Typography>
        </Box>
        <Divider style={{ width: "100%" }} />
        <Box display="flex" justifyContent="center" gap={2}>
          {data.map((item, index) => (
            <Button
              key={index}
              className={styles.socialMediaButton}
              onClick={() => window.open(item.url, "_blank")}
            >
              <img src={item.icon} alt={item.alt} className={styles.icon} />
              <Typography className={styles.socialMediaText}>
                {item.name}
              </Typography>
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
