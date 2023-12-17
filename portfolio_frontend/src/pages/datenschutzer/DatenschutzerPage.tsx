import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useIsMobileDevice } from "../../utils/useIsMobileDevice";

export const DatenschutzerPage = () => {
  const { isMobileDevice } = useIsMobileDevice();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        paddingX: isMobileDevice ? "5%" : "20%",
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
        Inhaber: <br /> <br />
        Valeriano Di Domenico
        <br />
        Künzlistrasse 25
        <br />
        8057 Zürich
        <br />
        Schweiz
        <br />
        E-Mail: mail@valerianodidomenico.ch
        <br />
        Tel.: +41 78 604 02 05
        <br />
      </Typography>
      <Typography variant="h4">
        Bereitstellung der Website und Erstellung von Logfiles
      </Typography>
      <Typography variant="body1" textAlign={"start"}>
        Bei jedem Aufruf unserer Internetseite erfasst unser System
        automatisiert Daten und Informationen des jeweils abrufenden Gerätes
        (z.B. Computer, Mobiltelefon, Tablet, etc.).
      </Typography>
      <Typography variant="h5" textAlign={"start"}>
        Welche personenbezogenen Daten werden erhoben und in welchem Umfang
        werden diese bearbeitet?
      </Typography>
      <Typography variant="body1" textAlign={"start"}>
        (1) Informationen über den Browsertyp und die verwendete Version; <br />
        (2) Das Betriebssystem des Abrufgerätes;
        <br />
        (3) Hostname des zugreifenden Rechners;
        <br />
        (4) Die IP-Adresse des Abrufgerätes;
        <br />
        (5) Datum und Uhrzeit des Zugriffs;
        <br />
        (6) Websites und Ressourcen (Bilder, Dateien, weitere Seiteninhalte),
        die auf unserer Internetseite aufgerufen wurden;
        <br />
        (7) Websites, von denen das System des Nutzers auf unsere Internetseite
        gelangte (Referrer- Tracking);
        <br />
        (8) Meldung, ob der Abruf erfolgreich war;
        <br />
        (9) Übertragene Datenmenge
        <br />
        Diese Daten werden in den Logfiles unseres Systems gespeichert. Eine
        Speicherung dieser Daten zusammen mit personenbezogenen Daten eines
        konkreten Nutzers findet nicht statt, so dass eine Identifizierung
        einzelner Seitenbesucher nicht erfolgt.
      </Typography>
      <Typography variant="h5" textAlign={"start"}>
        Rechtsgrundlage für die Bearbeitung personenbezogener Daten
      </Typography>
      <Typography variant="body1" textAlign={"start"}>
        Die Bearbeitung personenbezogener Daten erfolgt nach dem Prinzip der
        Rechtmässigkeit (Art. 6 Abs. 1 DSG) und nach dem Gebot von Treu und
        Glauben (Art. 6 Abs. 2 DSG bzw. Art. 2 ZGB).
      </Typography>
      <Typography variant="h5" textAlign={"start"}>
        Zweck der Datenbearbeitung
      </Typography>
      <Typography variant="body1" textAlign={"start"}>
        Die vorübergehende (automatisierte) Speicherung der Daten ist für den
        Ablauf eines Websitebesuchs erforderlich, um eine Auslieferung der
        Website zu ermöglichen. Die Speicherung und Bearbeitung der
        personenbezogenen Daten erfolgt zudem zur Erhaltung der Kompatibilität
        unserer Internetseite für möglichst alle Besucher und zur
        Missbrauchsbekämpfung und Störungsbeseitigung. Hierfür ist es notwendig,
        die technischen Daten des abrufenden Rechners zu loggen, um so
        frühestmöglich auf Darstellungsfehler, Angriffe auf unsere IT-Systeme
        und/oder Fehler der Funktionalität unserer Internetseite reagieren zu
        können. Zudem dienen uns die Daten zur Optimierung der Website und zur
        generellen Sicherstellung der Sicherheit unserer informationstechnischen
        Systeme.
      </Typography>
      <Typography variant="h5" textAlign={"start"}>
        Dauer der Speicherung
      </Typography>
      <Typography variant="body1" textAlign={"start"}>
        Die Löschung der vorgenannten technischen Daten erfolgt, sobald sie
        nicht mehr benötigt werden, um die Kompatibilität der Internetseite für
        alle Besucher zu gewährleisten, spätestens aber 3 Monate nach Abruf
        unserer Internetseite.
      </Typography>
      <Typography variant="h5" textAlign={"start"}>
        Einschränkungs-, Widerspruchs-, Berichtigungs- und Löschungsmöglichkeit
      </Typography>
      <Typography variant="body1" textAlign={"start"}>
        Sie können jederzeit eine Berichtigung oder Löschung der Daten
        verlangen. Welche Rechte Ihnen zustehen und wie Sie diese geltend
        machen, finden Sie im unteren Bereich dieser Datenschutzerklärung.
      </Typography>
      <Typography variant="h4">
        Besondere Funktionen der Internetseite
      </Typography>
      <Typography variant="body1" textAlign={"start"}>
        Unsere Seite bietet Ihnen verschiedene Funktionen, bei deren Nutzung von
        uns personenbezogene Daten erhoben, bearbeitet und gespeichert werden.
        Nachfolgend erklären wir, was mit diesen Daten geschieht:
      </Typography>
      <Typography variant="h5" textAlign={"start"}>
        Login-Bereich / Registrierung
      </Typography>
      <List sx={{ listStyleType: "circle", paddingLeft: 2 }}>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" textAlign="start">
                <b>
                  Umfang der Bearbeitung personenbezogener Daten und erhobene
                  personenbezogene Daten
                </b>
                <br />
                Die von Ihnen bei uns eingegebenen oder die Ihnen mitgeteilten
                Registrierungs- und Login-Daten.
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" textAlign="start">
                <b>
                  Rechtsgrundlage für die Bearbeitung personenbezogener Daten
                </b>
                <br />
                Die Bearbeitung personenbezogener Daten erfolgt nach dem Prinzip
                der Rechtmässigkeit (Art. 6 Abs. 1 DSG) und nach dem Gebot von
                Treu und Glauben (Art. 6 Abs. 2 DSG bzw. Art. 2 ZGB).
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" textAlign="start">
                <b>Zweck der Datenbearbeitung</b>
                <br />
                Sie haben auf unserer Internetseite die Möglichkeit, einen
                separaten Login-Bereich zu nutzen. Damit wir Ihre Berechtigung
                zur Nutzung des geschützten Bereichs bzw. der geschützten
                Dokumente prüfen können, müssen Sie Ihre Login-Daten (E-Mail
                bzw. Nutzername und Passwort) in das entsprechende Formular
                eingeben. Sofern benötigt, können wir Ihnen auf Anfrage Ihre
                Login-Daten bzw. die Möglichkeit das Passwort zurücksetzen zu
                lassen per E-Mail zusenden.
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" textAlign="start">
                <b>Dauer der Speicherung</b>
                <br />
                Die erhobenen Daten werden so lange gespeichert, wie Sie ein
                Benutzerkonto bei uns unterhalten.
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" textAlign="start">
                <b>
                  Einschränkungs-, Widerspruchs-, Berichtigungs- und
                  Löschungsmöglichkeit
                </b>
                <br />
                Sie können jederzeit eine Berichtigung oder Löschung der Daten
                verlangen. Welche Rechte Ihnen zustehen und wie Sie diese
                geltend machen, finden Sie im unteren Bereich dieser
                Datenschutzerklärung.
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" textAlign="start">
                <b>Erforderlichkeit der Angabe personenbezogener Daten</b>
                <br />
                Bestimmte Seiten und deren Inhalte sind nicht öffentlich
                zugänglich. Via Login- Bereich auf unserer Seite können
                bestimmte Anwender Zugang in den geschützten Bereich erhalten.
                Die Nutzung des durch den Login-Bereich geschützten Inhalts ist
                ohne die Eingabe der personenbezogenen Daten nicht möglich.
                Sofern Sie unseren Login-Bereich nutzen möchten, müssen Sie die
                als Pflichtangaben gekennzeichneten Felder (Benutzername und
                Passwort) ausfüllen. Die Eingabe der Daten setzt das Bestehen
                eines Nutzerkontos voraus. Eine Anmeldung ist nicht möglich,
                wenn die von Ihnen eingegebenen Daten falsch sind. Sofern die
                Daten von Ihnen falsch oder nicht eingegeben werden, kann der
                geschützte Bereich nicht genutzt werden. Der Rest der Seite ist
                jedoch weiterhin ohne Login nutzbar.
              </Typography>
            }
          />
        </ListItem>
      </List>
      <Typography variant="h4">Weitergabe von Angaben an Dritte</Typography>
      <Typography variant="body1" textAlign="start">
        Die Bearbeitung personenbezogener Daten erfolgt nach dem Prinzip der
        Rechtmässigkeit (Art. 6 Abs. 1 DSG) und nach dem Gebot von Treu und
        Glauben (Art. 6 Abs. 2 DSG bzw. Art. 2 ZGB). Die Weitergabe von Angaben
        an Dritte richtet sich nach dem Umfang nachfolgend beschriebener
        Tätigkeiten oder Angebote unserer Website bzw. unseres Geschäftsmodells.
        Grundsätzlich behalten wir Ihre Angaben nur so lange wie nötig und
        behandeln diese vertraulich. Ausgenommen davon sind die Übertragung
        personenbezogener Daten an Inkasso- Dienstleister, an öffentliche
        Stellen und Behörden sowie an Privatpersonen, die aufgrund gesetzlicher
        Bestimmungen, gerichtlichen Entscheidungen oder behördlichen Anordnungen
        einen Anspruch darauf haben sowie die Übertragung an Behörden zum Zwecke
        der Einleitung rechtlicher Verfahren oder für Strafverfolgungszwecke,
        falls unsere gesetzlich geschützten Rechte angegriffen werden.
      </Typography>
      <Typography variant="h4" textAlign="start">
        Statistische Auswertung der Besuche dieser Internetseite - Webtracker
      </Typography>
      <Typography variant="body1" textAlign="start">
        Wir erheben, bearbeiten und speichern bei dem Aufruf dieser
        Internetseite oder einzelner Dateien der Internetseite folgende Daten:
        IP-Adresse, Webseite, von der aus die Datei abgerufen wurde, Name der
        Datei, Datum und Uhrzeit des Abrufs, übertragene Datenmenge und Meldung
        über den Erfolg des Abrufs (sog. Web-Log). Diese Zugriffsdaten verwenden
        wir ausschliesslich in nicht personalisierter Form für die stetige
        Verbesserung unseres Internetangebots und zu statistischen Zwecken. Die
        Bearbeitung allfällig personenbezogener Daten erfolgt nach dem Prinzip
        der Rechtmässigkeit (Art. 6 Abs. 1 DSG) und nach dem Gebot von Treu und
        Glauben (Art. 6 Abs. 2 DSG bzw. Art. 2 ZGB). Wir setzen zur Auswertung
        der Besuche dieser Internetseite zudem noch folgende Webtracker ein:
      </Typography>
      <List sx={{ listStyleType: "circle", paddingLeft: 2 }}>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" textAlign="start">
                <b>Google</b>
                <br />
                Wir verwenden auf unserer Seite den Dienst Google des
                Unternehmens Google Ireland Limited, Gordon House, Barrow
                Street, 4 Dublin, Irland, E-Mail: support-
                deutschland@google.com, Website: https://www.google.com/. Die
                Bearbeitung findet gemäss Einschätzung von Schweizer Behörden in
                sicheren Drittländern statt. Die Staatenliste der Schweiz sowie
                weiterführende Informationen finden Sie unter folgendem Link:
                https://www.edoeb.admin.ch/edoeb/de/home/datenschutz/handel-
                und-wirtschaft/uebermittlung-ins-ausland.html. Rechtsgrundlage
                für die Übermittlung der personenbezogenen Daten stellt Ihre
                Einwilligung gem. Art. 6 Abs. 6 DSG bzw. Art. 31 Abs. 1 DSG dar,
                die Sie auf unserer Internetseite getätigt haben. Wir verwenden
                Google um auf der Internetseite weitere Dienste von Google
                nachladen zu können. Der Dienst wird dazu verwendet weitere
                Google-Dienste bereitstellen zu können, wie z.B. der benötigten
                Datenverarbeitung bei der Bereitstellung von Streams und
                Schriftarten und relevante Inhalte der Google-Suche. Er wird
                technisch benötigt, um die bereits Google vorliegenden
                Informationen des Seitenbesuchers zwischen den Google-Diensten
                austauschen zu können und dem Seitenbesucher angepasst an sein
                Google-Konto individuelle Inhalte bereitstellen zu können. Zur
                Bearbeitung selbst erhebt der Dienst bzw. wir folgende Daten:
                Hintergrunddaten, die im Google-Benutzerkonto oder bei anderen
                Google-Diensten über den Seitenbesucher gespeichert sind,
                Hintergrunddaten zur Bereitstellung von Google- Diensten wie
                z.B. Streamingdaten oder Werbedaten, Daten über den Umgang des
                Seitennutzers mit der Google-Suche, Angaben zum verwendeten
                Endgerät, zur IP- Adresse und zum Browser des Users und weitere
                Daten von Google-Diensten zur Bereitstellung der Google-Dienste
                bezogen auf unsere Webseite. Sofern der Dienst auf unserer
                Website aktiv geschaltet ist, stellt unsere Website eine
                Verbindung zu den Servern des Unternehmens Google Ireland
                Limited her und überträgt die benötigten Daten. Im Rahmen der
                Auftragsverarbeitung kann es auch zu einer Übermittlung von
                personenbezogenen Daten an die Server des Unternehmens Google
                LLC, 1600 Amphitheatre Parkway, 94043 Mountain View, Vereinigte
                Staaten kommen. Beim Einsatz des Google-Dienstes auf unserer
                Website werden von Google gegebenenfalls Informationen von
                weiteren Google-Diensten übermittelt und verarbeitet, um
                Hintergrunddienste für die Anzeige und Datenverarbeitung der von
                Google bereitgestellten Dienste zu erbringen. Hierzu erfolgt
                gegebenenfalls auch eine Datenübertragung an die Google-Dienste
                Google Apis, Doubleclick, Google Cloud, und Google Ads und
                Google Fonts gemäß der Google-Datenschutzerklärung. Die
                Zertifizierung im Rahmen des EU-US Data Privacy Frameworks
                können Sie unter
                https://www.dataprivacyframework.gov/s/participant-search/participant-
                detail?id=a2zt000000001L5AAI&amp;status=Active abrufen. Die
                Bearbeitung Ihrer Daten können Sie jederzeit widerrufen. Nähere
                Informationen zum Widerruf Ihrer Einwilligung finden Sie
                entweder bei der Einwilligung selbst oder am Ende dieser
                Datenschutzerklärung. Weitere Informationen zum Handling der
                übertragenen Daten finden Sie in der Datenschutzerklärung des
                Anbieters unter https://policies.google.com/privacy. Der
                Anbieter bietet unter https://support.google.com/My-Ad-Center-
                Help/answer/12155451?hl=de zusätzlich eine Opt-Out Möglichkeit
                an.
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" textAlign="start">
                <b>Google Ads</b>
                <br />
                Wir verwenden auf unserer Seite den Dienst Google Ads des
                Unternehmens Google Ireland Limited, Gordon House, Barrow
                Street, 4 Dublin, Irland, E-Mail: support-
                deutschland@google.com, Website: https://www.google.com/. Die
                Bearbeitung findet gemäss Einschätzung von Schweizer Behörden in
                sicheren Drittländern statt. Die Staatenliste der Schweiz sowie
                weiterführende Informationen finden Sie unter folgendem Link:
                https://www.edoeb.admin.ch/edoeb/de/home/datenschutz/handel-
                und-wirtschaft/uebermittlung-ins-ausland.html.
                <br />
                Rechtsgrundlage für die Übermittlung der personenbezogenen Daten
                stellt Ihre Einwilligung gem. Art. 6 Abs. 6 DSG bzw. Art. 31
                Abs. 1 DSG dar, die Sie auf unserer Internetseite getätigt
                haben.
                <br />
                Google Ads ist ein Werbesystem, mit dem wir im Internet auf
                externen Webseiten Werbeanzeigen schalten können, um unsere
                Kunden über unsere Leistungen zu informieren. Google Ads zeigt
                nach von uns eingestellten Parametern auf externen Webseiten
                individuell auf unseren Kundenkreis zugeschnittene Werbung an,
                die zu unserer Webseite führt. Sofern der Seitenbesucher auf die
                Google Ads-Werbung klickt, gelangt er auf unsere Webseite. Um
                die Google Ads-Werbeanzeigen hinsichtlich ihres Erfolges und der
                Vergütung messen zu können, führt Google Ads beim Aufruf unserer
                Webseite eine Messung über den Erfolg der Werbemaßnahme durch.
                unsere Webseite verarbeitet die von Google Ads bereitgestellten
                Daten, um unsere Werbemaßnahmen analysieren und verbessern zu
                können, sowie um eine ggf. anfallende Vergütung zu berechnen.
                <br />
                Zur Bearbeitung selbst erhebt der Dienst bzw. wir folgende
                Daten: Daten zu Werbeinteressen der Seitenbesucher,
                Interaktionen von Seitenbesuchern mit Werbung in Bezug auf
                unsere Webseite, Daten über den Aufruf unserer Webseite durch
                Seitenbesucher, die zuvor auf Google Ads-Werbung geklickt haben
                und zu unserer Webseite gelangt sind, Daten zum verwendeten
                Endgerät, zur IP-Adresse und zum Browser des Users und weitere
                Daten von Google-Diensten zur Bereitstellung und Verfeinerung
                der Google-Werbung bezogen auf unsere Webseite.
                <br />
                Sofern der Dienst auf unserer Website aktiv geschaltet ist,
                stellt unsere Website eine Verbindung zu den Servern des
                Unternehmens Google Ireland Limited her und überträgt die
                benötigten Daten. Im Rahmen der Auftragsverarbeitung kann es
                auch zu einer Übermittlung von personenbezogenen Daten an die
                Server des Unternehmens Google LLC, 1600 Amphitheatre Parkway,
                94043 Mountain View, Vereinigte Staaten kommen. Beim Einsatz von
                Google Ads auf unserer Website werden von Google gegebenenfalls
                Informationen von weiteren Google-Diensten übermittelt und
                verarbeitet, um Hintergrunddienste für die Verbesserung und
                Individualisierung von Google-Werbung bereitzustellen. Hierzu
                erfolgt gegebenenfalls auch eine Datenverarbeitung durch weitere
                Google-Dienste wie Google Apis, Google Cloud, Google Ads, Google
                Analytics, Google Tag Manager, Google Marketing Plattform und
                Google Fonts gemäß der Google-Datenschutzerklärung in eigener
                datenschutzrechtlicher Verantwortung von Google. Die
                Zertifizierung im Rahmen des EU-US Data Privacy Frameworks
                können Sie unter
                https://www.dataprivacyframework.gov/s/participant-search/participant-
                detail?id=a2zt000000001L5AAI&amp;status=Active abrufen.
                <br />
                Die Bearbeitung Ihrer Daten können Sie jederzeit widerrufen.
                Nähere Informationen zum Widerruf Ihrer Einwilligung finden Sie
                entweder bei der Einwilligung selbst oder am Ende dieser
                Datenschutzerklärung.
                <br />
                Weitere Informationen zum Handling der übertragenen Daten finden
                Sie in der Datenschutzerklärung des Anbieters unter
                https://policies.google.com/privacy.
                <br />
                Der Anbieter bietet unter
                https://support.google.com/My-Ad-Center-
                Help/answer/12155451?hl=de zusätzlich eine Opt-Out Möglichkeit
                an.
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" textAlign="start">
                <b>Google-Analytics</b>
                <br />
                <b>Umfang der Bearbeitung personenbezogener Daten</b>
                <br />
                Auf unserer Seite verwenden wir den Webtracking-Service des
                Unternehmens Google Ireland Ltd., Gordon House, Barrow Street, 4
                Dublin, Irland, E-Mail: support-deutschland@google.com, Website:
                https://www.google.com/ (nachfolgend: Google-Analytics).
                Google-Analytics nutzt im Rahmen des Webtrackings Cookies, die
                auf Ihrem Computer gespeichert werden und die eine Analyse der
                Benutzung unserer Website und Ihres Surfverhaltens ermöglichen
                (sogenanntes Tracken). Wir führen diese Analyse auf Basis des
                Tracking-Services von Google-Analytics durch, um unser
                Internetangebot ständig zu optimieren und besser verfügbar zu
                machen. Im Rahmen der Benutzung unserer Webseite werden dabei
                Daten, wie insbesondere Ihre IP- Adresse und Ihre
                Nutzeraktivitäten an Server des Unternehmens Google Ireland
                Limited übertragen. Wir führen diese Analyse auf Basis des
                Tracking- Services von Google durch, um unser Internetangebot
                ständig zu optimieren und besser verfügbar zu machen. Ebenso
                benötigen wir das Webtracking aus Sicherheitsgründen. Durch das
                Webtracking können wir nachverfolgen, ob Dritte unsere Website
                angreifen. Durch die Informationen des Webtrackers können wir
                wirksame Gegenmassnahmen ergreifen und die durch uns
                bearbeiteten personenbezogenen Daten vor diesen Cyberangriffen
                schützen. Durch die Aktivierung der IP-Anonymisierung innerhalb
                des Google-Analytics Tracking-Codes dieser Internetseite, wird
                Ihre IP-Adresse von Google- Analytics vor der Übertragung
                anonymisiert. Diese Website nutzt einen
                Google-Analytics-Tracking-Code, der um den Operator
                gat._anonymizeIp(); erweitert wurde, um nur eine anonymisierte
                Erfassung von IP-Adressen (sog. IP-Masking) zu ermöglichen.
                <br />
                <b>
                  Rechtsgrundlage für die Bearbeitung personenbezogener Daten
                </b>
                <br />
                Rechtsgrundlage für die Datenbearbeitung ist gemäss Art. 13 Abs.
                1 DSG Ihre Einwilligung in unserem Hinweisbanner bezüglich der
                Nutzung von Cookies und Webtracking (Einwilligung durch
                eindeutige bestätigende Handlung bzw. Verhaltensweise).
                <br />
                <b>Zweck der Datenbearbeitung</b>
                <br />
                In unserem Auftrag wird Google diese Informationen nutzen, um
                Ihren Besuch auf dieser Internetseite auszuwerten, Reports über
                die Websiteaktivitäten zusammenzustellen und um weitere, mit der
                Websitenutzung und der Internetnutzung verbundene
                Dienstleistungen, gegenüber uns zu erbringen. Ebenso benötigen
                wir das Webtracking aus Sicherheitsgründen. Durch das
                Webtracking können wir nachverfolgen, ob Dritte unsere Website
                angreifen. Durch die Informationen des Webtrackers können wir
                wirksame Gegenmassnahmen ergreifen und die durch uns
                bearbeiteten personenbezogenen Daten vor diesen Cyberangriffen
                schützen.
                <br />
                <b>Dauer der Speicherung</b>
                <br />
                Google wird die für die Bereitstellung des Webtracking
                relevanten Daten solange speichern, wie es notwendig ist, um den
                gebuchten Webservice zu erfüllen. Die Datenerhebung und
                Speicherung erfolgt anonymisiert. Soweit doch Personenbezug
                bestehen sollte, werden die Daten unverzüglich gelöscht, soweit
                diese keinen gesetzlichen Aufbewahrungspflichten unterfallen. In
                jedem Fall erfolgt die Löschung nach Ablauf der
                Aufbewahrungspflicht.
                <br />
                <b>Widerspruchs- und Löschungsmöglichkeiten</b>
                <br />
                Sie können die Erfassung und Weiterleitung der personenbezogenen
                Daten an Google (insb. Ihrer IP-Adresse) sowie die Bearbeitung
                dieser Daten durch Google verhindern, indem Sie die Ausführung
                von Script-Code in Ihrem Browser deaktivieren oder die „Do Not
                Track“ Einstellung Ihres Browsers aktivieren. Sie können darüber
                hinaus die Erfassung der durch den Google- Cookie erzeugten und
                auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer
                IP-Adresse) an Google sowie die Bearbeitung dieser Daten durch
                Google verhindern, indem Sie das unter dem folgenden Link
                (http://tools.google.com/dlpage/gaoptout?hl=de) verfügbare
                Browser-Plug-In herunterladen und installieren. Die Sicherheits-
                und Datenschutzgrundsätze von Google finden Sie unter
                https://policies.google.com/privacy.
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" textAlign="start">
                <b>Google Tag Manager</b>
                <br />
                <b>
                  Welche personenbezogenen Daten werden erhoben und in welchem
                  Umfang werden diese bearbeitet?
                </b>
                Auf unserer Seite verwenden wir den Service Google Tag Manager
                des Unternehmens Google Ireland Ltd., Gordon House, Barrow
                Street, 4 Dublin, Irland, E-Mail:
                support-deutschland@google.com, Website: https://www.google.com/
                (nachfolgend: Google Tag Manager). Google Tag Manager bietet
                eine technische Plattform um andere Webservices und
                Webtracking-Programme mittels sogenannter „Tags“ auszuführen und
                gebündelt steuern zu können. Google Tag Manager speichert in
                diesem Zusammenhang Cookies auf Ihrem Computer und analysiert,
                soweit Webtracking Tools mittels Google-Tag-Manager ausgeführt
                werden, Ihr Surfverhalten (sogenanntes „tracken“). Diese von
                einzelnen in Google-Tag- Manager eingebundenen Tags gesendeten
                Daten werden von Google Tag Manager unter einer einheitlichen
                Benutzeroberfläche zusammengeführt, gespeichert und bearbeitet.
                Alle eingebundenen „Tags“ werden in dieser Datenschutzerklärung
                nochmals gesondert aufgeführt. Nähere Informationen zum
                Datenschutz der in Google Tag Manager eingebundenen Tools finden
                Sie in dem jeweiligen Abschnitt dieser Datenschutzerklärung. Im
                Rahmen der Benutzung unserer Webseite bei aktivierter Einbindung
                von Tags von Google- Tag-Manager werden dabei Daten, wie
                insbesondere Ihre IP-Adresse und Ihre Nutzeraktivitäten an
                Server des Unternehmens Google Ireland Limited übertragen. Bzgl.
                der mittels Google Tag Manager eingebundenen Webservices gelten
                die Regelungen in dem jeweiligen Abschnitt dieser
                Datenschutzerklärung. Die in Google Tag Manager verwendeten
                Tracking- Tools stellen durch eine IP-Anonymisierung des
                Quellcodes sicher, dass die IP- Adresse von Google Tag Manager
                vor der Übertragung anonymisiert wird. Hierbei wird Google Tag
                Manager nur die anonymisierte Erfassung von IP- Adressen (sog.
                IP-Masking) ermöglicht.
                <br />
                <b>
                  Rechtsgrundlage für die Bearbeitung personenbezogener Daten
                </b>
                <br />
                Rechtsgrundlage für die Datenbearbeitung ist gemäss Art. 13 Abs.
                1 DSG Ihre Einwilligung in unserem Hinweisbanner bezüglich der
                Nutzung von Cookies und Webtracking (Einwilligung durch
                eindeutige bestätigende Handlung bzw. Verhaltensweise).
                <b>Zweck der Datenbearbeitung</b>
                <br />
                Im unserem Auftrag wird Google die mittels Google-Tag Manager
                gewonnenen Informationen nutzen, um Ihren Besuch auf dieser
                Internetseite auszuwerten, Reports über die Websiteaktivitäten
                zusammenzustellen und um weitere mit der Websitenutzung und der
                Internetnutzung verbundene Dienstleistungen gegenüber uns zu
                erbringen.
                <br />
                <b>Dauer der Speicherung</b>
                <br />
                Google wird die für die Funktion von Google-Tag-Manager
                relevanten Daten solange speichern, wie es notwendig ist, um den
                gebuchten Webservice zu erfüllen. Die Datenerhebung und
                Speicherung erfolgt anonymisiert. Soweit doch Personenbezug
                bestehen sollte, werden die Daten unverzüglich gelöscht, soweit
                diese keinen gesetzlichen Aufbewahrungspflichten unterfallen. In
                jedem Fall erfolgt die Löschung nach Ablauf der
                Aufbewahrungspflicht.
                <br />
                <b>Widerspruchs- und Löschungsmöglichkeit</b>
                <br />
                Sie können die Erfassung und Weiterleitung der personenbezogenen
                Daten an Google (insb. Ihrer IP-Adresse) sowie die Bearbeitung
                dieser Daten durch Google verhindern, indem Sie die Ausführung
                von Script-Code in Ihrem Browser deaktivieren, einen
                Script-Blocker in Ihrem Browser installieren oder die „Do Not
                Track&quot; Einstellung Ihres Browsers aktivieren. Sie können
                darüber hinaus die Erfassung der durch den Google-Cookie
                erzeugten und auf Ihre Nutzung der Website bezogenen Daten
                (inkl. Ihrer IP-Adresse) an Google sowie die Bearbeitung dieser
                Daten durch Google verhindern, indem Sie das unter dem folgenden
                Link http://tools.google.com/dlpage/gaoptout?hl=de verfügbare
                Browser-Plug-In herunterladen und installieren. Die Sicherheits-
                und Datenschutzgrundsätze von Google finden Sie unter
                https://policies.google.com/privacy.
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" textAlign="start">
                <b>Gstatic</b>
                <br />
                Wir verwenden auf unserer Seite den Dienst Gstatic des
                Unternehmens Google Ireland Limited, Gordon House, Barrow
                Street, 4 Dublin, Irland, E-Mail: support-
                deutschland@google.com, Website: https://www.google.com/. Die
                Bearbeitung findet gemäss Einschätzung von Schweizer Behörden in
                sicheren Drittländern statt. Die Staatenliste der Schweiz sowie
                weiterführende Informationen finden Sie unter folgendem Link:
                https://www.edoeb.admin.ch/edoeb/de/home/datenschutz/handel-
                und-wirtschaft/uebermittlung-ins-ausland.html.
                <br />
                Rechtsgrundlage für die Übermittlung der personenbezogenen Daten
                stellt Ihre Einwilligung gem. Art. 6 Abs. 6 DSG bzw. Art. 31
                Abs. 1 DSG dar, die Sie auf unserer Internetseite getätigt
                haben.
                <br />
                Gstatic ist ein von Google verwendeter Hintergrunddienst zum
                Abrufen statischer Inhalte, um die Bandbreitennutzung zu
                reduzieren und benötigte Katalogdateien bereits vorab zu laden.
                Der Dienst lädt insbesondere Hintergrunddaten zu Google Fonts
                und Google Maps.
                <br />
                Im Rahmen der Auftragsverarbeitung kann es auch zu einer
                Übermittlung von personenbezogenen Daten an die Server des
                Unternehmens Google LLC, 1600 Amphitheatre Parkway, 94043
                Mountain View, Vereinigte Staaten kommen. Die Zertifizierung im
                Rahmen des EU-US Data Privacy Frameworks können Sie unter
                https://www.dataprivacyframework.gov/s/participant-search/participant-
                detail?id=a2zt000000001L5AAI&amp;status=Active abrufen.
                <br />
                Die Bearbeitung Ihrer Daten können Sie jederzeit widerrufen.
                Nähere Informationen zum Widerruf Ihrer Einwilligung finden Sie
                entweder bei der Einwilligung selbst oder am Ende dieser
                Datenschutzerklärung.
                <br />
                Weitere Informationen zum Handling der übertragenen Daten finden
                Sie in der Datenschutzerklärung des Anbieters unter
                https://policies.google.com/privacy.
                <br />
                Der Anbieter bietet unter
                https://support.google.com/My-Ad-Center-
                Help/answer/12155451?hl=de zusätzlich eine Opt-Out Möglichkeit
                an.
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" textAlign="start">
                <b>Youtube</b>
                <br />
                Wir verwenden auf unserer Seite den Dienst Youtube des
                Unternehmens Google Ireland Limited, Gordon House, Barrow
                Street, 4 Dublin, Irland, E-Mail: support-
                deutschland@google.com, Website: https://www.google.com/. Die
                Bearbeitung findet gemäss Einschätzung von Schweizer Behörden in
                sicheren Drittländern statt. Die Staatenliste der Schweiz sowie
                weiterführende Informationen finden Sie unter folgendem Link:
                https://www.edoeb.admin.ch/edoeb/de/home/datenschutz/handel-
                und-wirtschaft/uebermittlung-ins-ausland.html.
                <br />
                Rechtsgrundlage für die Übermittlung der personenbezogenen Daten
                stellt Ihre Einwilligung gem. Art. 6 Abs. 6 DSG bzw. Art. 31
                Abs. 1 DSG dar, die Sie auf unserer Internetseite getätigt
                haben.
                <br />
                Über den Dienst Youtube werden auf unserer Seite Videos der
                Plattform Youtube eingebunden. Durch die Einbindung können wir
                Ihnen direkt in unserer Website Videos anzeigen. Auf diese Weise
                können sich Seitenbesucher Informationen zu unseren Leistungen
                anzeigen lassen ohne die Plattform Youtube aufsuchen zu müssen.
                <br />
                Zur Bearbeitung selbst erhebt der Dienst bzw. wir folgende
                Daten: Daten zum Anzeigen des Streams, Daten zu angeklickten
                Videos, erstellte Playlisten, Bewertungen und Kommentaren,
                Angaben zum verwendeten Endgerät, zur IP- Adresse und zum
                Browser des Users und weitere Daten von Google Diensten zur
                Bereitstellung des Videos gemäß der Google-Datenschutzerklärung
                <br />
                Sofern Youtube auf unserer Website aktiv geschaltet ist und ein
                Video abgespielt wird, stellt unsere Website eine Verbindung zu
                den Servern des Unternehmens Google Ireland Limited her und
                überträgt die benötigten Daten zur Anzeige des Streams bzw.
                Videos. Im Rahmen der Auftragsverarbeitung kann es auch zu einer
                Übermittlung von personenbezogenen Daten an die Server des
                Unternehmens Google LLC, 1600 Amphitheatre Parkway, 94043
                Mountain View, Vereinigte Staaten kommen. Die Übermittlung
                personenbezogener Daten erfolgt auch in die USA. Im Hinblick auf
                die Übermittlung personenbezogener Daten in die USA besteht ein
                Angemessenheitsbeschluss zum EU-US Data Privacy Framework der EU
                Kommission im Sinne des Art. 45 DSGVO (nachfolgend: DPF -
                https://commission.europa.eu/document/fa09cbad-dd7d-4684-ae60-be03fcb0fddf_en).
                Der Betreiber des Dienstes ist im Rahmen des DPF zertifiziert,
                so dass für die Übermittlung das übliche Schutzniveau der DSGVO
                gilt. Bei der Anzeige der Youtube-Videos auf unserer Website
                werden von Youtube gegebenenfalls Informationen von weiteren
                Google-Diensten übermittelt und verarbeitet, um
                Hintergrunddienste für das Video wie z.B. Streamingdaten
                bereitzustellen. Hierzu erfolgt gegebenenfalls auch eine
                Datenübertragung an die Google-Dienste Google Fonts, Google
                Apis, Google Video, Doubleclick. Die Zertifizierung im Rahmen
                des EU-US Data Privacy Frameworks können Sie unter
                https://www.dataprivacyframework.gov/s/participant-search/participant-
                detail?id=a2zt000000001L5AAI&amp;status=Active abrufen.
                <br />
                Die Bearbeitung Ihrer Daten können Sie jederzeit widerrufen.
                Nähere Informationen zum Widerruf Ihrer Einwilligung finden Sie
                entweder bei der Einwilligung selbst oder am Ende dieser
                Datenschutzerklärung.
                <br />
                Weitere Informationen zum Handling der übertragenen Daten finden
                Sie in der Datenschutzerklärung des Anbieters unter
                https://policies.google.com/privacy.
                <br />
                Der Anbieter bietet unter
                https://support.google.com/My-Ad-Center-
                Help/answer/12155451?hl=de zusätzlich eine Opt-Out Möglichkeit
                an.
              </Typography>
            }
          />
        </ListItem>
      </List>
      <Typography variant="h5" textAlign={"start"}>
        Einbindung externer Webservices und Bearbeitung von Daten ausserhalb der
        EU
      </Typography>
      <Typography variant="body1" textAlign={"start"}>
        Auf unserer Internetseite verwenden wir aktive Inhalte von externen
        Anbietern, sog. Webservices. Durch Aufruf unserer Internetseite erhalten
        diese externen Anbieter ggf. personenbezogene Informationen über Ihren
        Besuch auf unserer Internetseite. Hierbei ist ggf. eine Bearbeitung von
        Daten ausserhalb der Schweiz möglich. Sie können dies verhindern, indem
        Sie ein entsprechendes Browser-Plugin installieren oder das Ausführen
        von Scripten in Ihrem Browser deaktivieren. Hierdurch kann es zu
        Funktionseinschränkungen auf Internetseiten kommen, die Sie besuchen.
        <br />
        Wir verwenden folgende externe Webservices:
      </Typography>
      <List sx={{ listStyleType: "circle", paddingLeft: 2 }}>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" textAlign="start">
                <b>Google Cloud APIs</b>
                <br />
                Wir verwenden auf unserer Seite den Dienst Google Cloud APIs des
                Unternehmens Google Ireland Limited, Gordon House, Barrow
                Street, 4 Dublin, Irland, E-Mail:
                support-deutschland@google.com, Website:
                https://www.google.com/. Die Bearbeitung findet gemäss
                Einschätzung von Schweizer Behörden in sicheren Drittländern
                statt. Die Staatenliste der Schweiz sowie weiterführende
                Informationen finden Sie unter folgendem Link:
                <br />
                https://www.edoeb.admin.ch/edoeb/de/home/datenschutz/handel-und-
                wirtschaft/uebermittlung-ins-ausland.html.
                <br />
                Rechtsgrundlage für die Übermittlung der personenbezogenen Daten
                stellt Ihre Einwilligung gem. Art. 6 Abs. 6 DSG bzw. Art. 31
                Abs. 1 DSG dar, die Sie auf unserer Internetseite getätigt
                haben.
                <br />
                Wir verwenden Google APIs um auf der Internetseite weitere
                Dienste von Google nachladen zu können. Bei Google Apis handelt
                es sich um eine Sammlung von Schnittstellen zur Kommunikation
                zwischen den verschiedenen Google Diensten, die auf Ihrer
                Website zum Einsatz kommen. Der Dienst wird insbesondere zur
                Darstellung der Google Fonts-Schriftarten und zur Bereitstellung
                der Google Maps-Karte.
                <br />
                Zur Bearbeitung selbst erhebt der Dienst bzw. wir folgende
                Daten: IP-Adresse Sofern der Dienst auf unserer Website aktiv
                geschaltet ist, stellt unsere Website eine Verbindung zu den
                Servern des Unternehmens Google Ireland Limited her und
                überträgt die benötigten Daten. Im Rahmen der
                Auftragsverarbeitung kann es auch zu einer Übermittlung von
                personenbezogenen Daten an die Server des Unternehmens Google
                LLC, 1600 Amphitheatre Parkway, 94043 Mountain View, Vereinigte
                Staaten kommen. Beim Einsatz des Google-Dienstes auf unserer
                Website werden von Google gegebenenfalls Informationen von
                weiteren Google-Diensten übermittelt und verarbeitet, um
                Hintergrunddienste für die Anzeige und Datenverarbeitung der von
                Google bereitgestellten Dienste zu erbringen. Hierzu erfolgt
                gegebenenfalls auch eine Datenübertragung an die Google-Dienste
                Google Cloud, Google Maps, Google Ads und Google Fonts gemäß der
                Google-Datenschutzerklärung in datenschutzrechtlicher
                Verantwortung von Google. Die Zertifizierung im Rahmen des EU-US
                Data Privacy Frameworks können Sie unter
                https://www.dataprivacyframework.gov/s/participant-
                search/participant-detail?id=a2zt000000001L5AAI&amp;status=Active
                abrufen.
                <br />
                Die Bearbeitung Ihrer Daten können Sie jederzeit widerrufen.
                Nähere Informationen zum Widerruf Ihrer Einwilligung finden Sie
                entweder bei der Einwilligung selbst oder am Ende dieser
                Datenschutzerklärung.
                <br />
                Weitere Informationen zum Handling der übertragenen Daten finden
                Sie in der Datenschutzerklärung des Anbieters unter
                https://policies.google.com/privacy.
                <br />
                Der Anbieter bietet unter
                https://support.google.com/My-Ad-Center-
                Help/answer/12155451?hl=de zusätzlich eine Opt-Out Möglichkeit
                an.
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" textAlign="start">
                <b>Google Fonts</b>
                <br />
                Wir verwenden auf unserer Seite den Dienst Google Fonts des
                Unternehmens Google Ireland Limited, Gordon House, Barrow
                Street, 4 Dublin, Irland, E-Mail: support-
                deutschland@google.com, Website: https://www.google.com/. Die
                Bearbeitung findet gemäss Einschätzung von Schweizer Behörden in
                sicheren Drittländern statt. Die Staatenliste der Schweiz sowie
                weiterführende Informationen finden Sie unter folgendem Link:
                https://www.edoeb.admin.ch/edoeb/de/home/datenschutz/handel-
                und-wirtschaft/uebermittlung-ins-ausland.html.
                <br />
                Rechtsgrundlage für die Übermittlung der personenbezogenen Daten
                stellt Ihre Einwilligung gem. Art. 6 Abs. 6 DSG bzw. Art. 31
                Abs. 1 DSG dar, die Sie auf unserer Internetseite getätigt
                haben.
                <br />
                Wir verwenden den Dienst Google Fonts um auf unserer Seite
                attraktive Schriftarten einbinden zu können, um Ihnen unsere
                Webseite in einer optisch besseren Version anzeigen zu können.
                Ebenfalls kommt der Dienst auf unserer Webseite gegebenenfalls
                zum Einsatz wenn andere Google-Dienste auf unserer Webseite
                nachgeladen werden, die Google Fonts-Schriftarten zur Ausführung
                benötigen. Dies ist beispielsweise dann der Fall, sofern unsere
                Webseite Google-Dienste nutzt, die zur Ausführung Google Fonts
                zwingend benötigen.
                <br />
                Zur Bearbeitung selbst erhebt der Dienst bzw. wir folgende
                Daten: Daten zu Schriftarten, IP-Adresse des Seitenbesuchers,
                Statistiken über den Gebrauch von Schriftarten und weitere Daten
                von Google-Diensten bezogen auf unsere Webseite.
                <br />
                Sofern der Dienst auf unserer Website aktiv geschaltet ist,
                stellt unsere Website eine Verbindung zu den Servern des
                Unternehmens Google Ireland Limited her und überträgt die
                benötigten Daten. Im Rahmen der Auftragsverarbeitung kann es
                auch zu einer Übermittlung von personenbezogenen Daten an die
                Server des Unternehmens Google LLC, 1600 Amphitheatre Parkway,
                94043 Mountain View, Vereinigte Staaten kommen. Beim Einsatz des
                Google-Dienstes auf unserer Website werden von Google
                gegebenenfalls Informationen von weiteren Google-Diensten
                übermittelt und verarbeitet, um Hintergrunddienste für die
                Anzeige und Datenverarbeitung der von Google bereitgestellten
                Dienste zu erbringen. Hierzu erfolgt gegebenenfalls auch eine
                Datenübertragung an die Google-Dienste Google Apis, Google Cloud
                und Google Ads gemäß der Google-Datenschutzerklärung. Die
                Zertifizierung im Rahmen des EU-US Data Privacy Frameworks
                können Sie unter
                https://www.dataprivacyframework.gov/s/participant-search/participant-
                detail?id=a2zt000000001L5AAI&amp;status=Active abrufen.
                <br />
                Die Bearbeitung Ihrer Daten können Sie jederzeit widerrufen.
                Nähere Informationen zum Widerruf Ihrer Einwilligung finden Sie
                entweder bei der Einwilligung selbst oder am Ende dieser
                Datenschutzerklärung.
                <br />
                Weitere Informationen zum Handling der übertragenen Daten finden
                Sie in der Datenschutzerklärung des Anbieters unter
                https://policies.google.com/privacy.
                <br />
                Der Anbieter bietet unter
                https://support.google.com/My-Ad-Center-
                Help/answer/12155451?hl=de zusätzlich eine Opt-Out Möglichkeit
                an.
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" textAlign="start">
                <b>Legally ok Rechtstextsnippet und Module</b>
                <br />
                Wir verwenden auf unserer Seite den Dienst Legally ok
                Rechtstextsnippet und Module des Unternehmens Legally ok GmbH,
                Schochenmühlestrasse 6, 6340 Baar, Schweiz, E-Mail:
                hello@legally-ok.com, Website: https://www.legally-ok.com/. Die
                Bearbeitung erfolgt ausschliesslich in der Schweiz gemäss dort
                geltender Datenschutzgesetzgebung.
                <br />
                Rechtsgrundlage für die Übermittlung und Bearbeitung sind Art.
                31 Abs. 1 DSG. Der Einsatz des Dienstes unterstützt uns dabei
                unseren rechtlichen Verpflichtungen nachzukommen.
                <br />
                Mit Hilfe des Dienstes werden auf unserer Internetseite Inhalte
                unserer Rechtstexte nachgeladen. Über die vorgenommene
                Einbindung auf unserer Seite werden die jeweils aktuellen
                Rechtstexte nachgeladen. Über diese Einbindung können ggf. auch
                weitere technische Module im Hinblick auf die rechtlichen Texte
                oder rechtlich notwendigen Elemente nachgeladen werden.
                <br />
                Welche Rechte Ihnen im Hinblick auf die Bearbeitung zustehen,
                finden Sie am Ende dieser Datenschutzerklärung.
                <br />
                Weitere Informationen zum Handling der übertragenen Daten finden
                Sie in der Datenschutzerklärung des Anbieters unter
                https://www.legally-ok.com/datenschutz/.
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" textAlign="start">
                <b>ShortPixel</b>
                <br />
                Wir verwenden auf unserer Seite den Dienst ShortPixel des
                Unternehmens ID SCOUT SRL, 2 Transilvaniei st., Apt. 19,, 1
                Bucharest, Rumänien, E-Mail: andrei@shortpixel.com, Website:
                https://shortpixel.com/. Die Bearbeitung findet gemäss
                Einschätzung von Schweizer Behörden in sicheren Drittländern
                statt. Die Staatenliste der Schweiz sowie weiterführende
                Informationen finden Sie unter folgendem Link:
                https://www.edoeb.admin.ch/edoeb/de/home/datenschutz/handel-
                und-wirtschaft/uebermittlung-ins-ausland.html.
                <br />
                Rechtsgrundlage für die Übermittlung der personenbezogenen Daten
                stellt Ihre Einwilligung gem. Art. 6 Abs. 6 DSG bzw. Art. 31
                Abs. 1 DSG dar, die Sie auf unserer Internetseite getätigt
                haben.
                <br />
                Mit Hilfe des Dienstes ist es möglich Grafiken auf Webseiten zu
                komprimieren um somit eine schnellere Nachladung vom Server zu
                ermöglichen.
                <br />
                Die Bearbeitung Ihrer Daten können Sie jederzeit widerrufen.
                Nähere Informationen zum Widerruf Ihrer Einwilligung finden Sie
                entweder bei der Einwilligung selbst oder am Ende dieser
                Datenschutzerklärung.
                <br />
                Weitere Informationen zum Handling der übertragenen Daten finden
                Sie in der Datenschutzerklärung des Anbieters unter
                https://shortpixel.com/privacy.
              </Typography>
            }
          />
        </ListItem>
      </List>
      <Typography variant="h5" textAlign={"start"}>
        Informationen zur Verwendung von Cookies
      </Typography>
      <List sx={{ listStyleType: "circle", paddingLeft: 2 }}>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" textAlign="start">
                <b>Umfang der Bearbeitung personenbezogener Daten</b>
                <br />
                Auf verschiedenen Seiten integrieren und verwenden wir Cookies,
                um bestimmte Funktionen unserer Website zu ermöglichen und
                externe Webservices zu integrieren. Bei den sogenannten
                &quot;Cookies&quot; handelt es sich um kleine Textdateien, die
                Ihr Browser auf Ihrem Zugangsgerät speichern kann. Diese
                Textdateien enthalten eine charakteristische Zeichenkette, die
                den Browser eindeutig identifiziert, wenn Sie zu unserer Website
                zurückkehren. Der Prozess des Speicherns einer Cookie-Datei wird
                auch als &quot;Setzen eines Cookies&quot; bezeichnet. Cookies
                können hierbei sowohl von der Website selbst als auch von
                externen Webservices gesetzt werden.
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" textAlign="start">
                <b>
                  Rechtsgrundlage für die Bearbeitung personenbezogener Daten
                </b>
                <br />
                Relevant sind Art. 6 ff. DSG (Grundsätze).
                <br />
                Welche Rechtsgrundlage einschlägig ist, ergibt sich aus der
                später in diesem Punkt aufgeführten Cookie-Tabelle.
                <br />
                Generell gilt, dass bei Cookies, die aufgrund eines berechtigten
                Interesses erhoben werden, unser berechtigtes Interesse darin
                besteht, die Funktionalität unserer Website und der darauf
                eingebundenen Dienste zu gewährleisten (technisch notwendige
                Cookies). Zudem kann es sein, dass die Cookies ihre
                Benutzerfreundlichkeit erhöhen und eine individuellere Ansprache
                ermöglichen. Hier haben wir eine Abwägung zwischen Ihren
                Interessen und unseren Interessen vorgenommen.
                <br />
                Mit Hilfe der Cookie-Technologie können wir einzelne
                Website-Besucher nur dann identifizieren, analysieren und
                verfolgen, wenn der Website-Besucher in die Nutzung des Cookies
                gem. Art. 6. Abs. 6 DSG eingewilligt hat.
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" textAlign="start">
                <b>Zweck der Datenbearbeitung</b>
                <br />
                Die Cookies werden von unserer Website bzw. den externen
                Webservices gesetzt, um die volle Funktionalität unserer Website
                zu erhalten, die Benutzerfreundlichkeit zu verbessern oder um
                den mit Ihrer Einwilligung angegebenen Zweck zu verfolgen. Die
                Cookie- Technologie ermöglicht es uns auch, einzelne Besucher
                anhand von Pseudonymen, z.B. einer individuellen oder zufälligen
                IDs, zu erkennen, so dass wir mehr individuelle Dienstleistungen
                anbieten können. Details sind in der folgenden Tabelle
                aufgeführt.
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" textAlign="start">
                <b>Dauer der Speicherung</b>
                <br />
                Die nachfolgend aufgelisteten Cookies werden in Ihrem Browser
                gespeichert, bis sie gelöscht werden oder, im Falle eines
                Session-Cookies, bis die Sitzung abgelaufen ist. Details sind in
                der folgenden Tabelle aufgeführt:
              </Typography>
            }
          />
        </ListItem>
      </List>
      <table>
        <thead>
          <tr>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>Cookie-Name</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>Server</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>Anbieter</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>Zweck</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>Rechtsgrundlage</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>Speicherdauer</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>Typ</span>
              </p>
            </td>
          </tr>
        </thead>
        <tbody />
        <tbody>
          <tr>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>CONSENT (Youtube)</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>.youtube.com</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span className="c3 c2">
                  <a href="https://www.google.com/url?q=https://app.legally-ok.com/93763/policies/latest%23tracker-275&sa=D&source=editors&ust=1702823817527102&usg=AOvVaw2jftYW09CAuh9hZPp-fZO7">
                    Youtube
                  </a>
                </span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>
                  Durch das CONSENT Cookie wird nach der Einwilligung des
                  Nutzers die Erlaubnis des Nutzers zur Weiterleitung der Daten
                  an Youtube gespeichert.
                </span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>Erfüllung rechtl. Verpflichtungen</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>ca. 24 Monate</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>Cookie-Banner</span>
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>LAST_RESULT_ENTRY_KEY</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span className="c3 c2">
                  <a href="https://www.google.com/url?q=http://www.youtube.com&sa=D&source=editors&ust=1702823817528812&usg=AOvVaw1uRgOFafoAv7SKmHX2n-mh">
                    www.youtube.com
                  </a>
                </span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span className="c3 c2">
                  <a href="https://www.google.com/url?q=https://app.legally-ok.com/93763/policies/latest%23tracker-275&sa=D&source=editors&ust=1702823817529293&usg=AOvVaw2V1vu901LzLViO-b1A0zzt">
                    Youtube
                  </a>
                </span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>
                  Speichert die Benutzereinstellungen beim Abruf eines auf
                  anderen Webseiten integrierten Youtube-Videos.
                </span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>Einwilligung</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>Sitzung</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>Komfort</span>
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>PHPSESSID</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>valerianodidomenico.ch</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span className="c3 c2">
                  <a href="https://www.google.com/url?q=https://app.legally-ok.com/93763/policies/latest%23responsible-entity&sa=D&source=editors&ust=1702823817531093&usg=AOvVaw2wUaM8dhp0D2lTaBYz53bH">
                    Webseitenbetreiber
                  </a>
                </span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>
                  Wir setzen das Cookie "PHPSESSID" ein, um die Benutzersitzung
                  auf unserer Website zu verwalten. Dieses Cookie hat den Zweck,
                  eine eindeutige Kennung für die Sitzung eines Benutzers
                  bereitzustellen, während er unsere Website besucht. Dadurch
                  können wir den Zustand der Sitzung verfolgen und
                  sicherstellen, dass der Server den Benutzer korrekt
                  identifizieren kann, um eine reibungslose Interaktion mit der
                  Website zu gewährleisten. Das Cookie enthält normalerweise
                  eine zufällige Zeichenfolge, die als Session-ID fungiert. Nach
                  Beendigung der Sitzung, z. B. wenn der Benutzer den Browser
                  schließt, wird das Cookie in der Regel gelöscht.
                </span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>Berechtigtes Interesse</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>Sitzung</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>Komfort</span>
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>TESTCOOKIESENABLED</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span className="c3 c2">
                  <a href="https://www.google.com/url?q=http://www.youtube.com&sa=D&source=editors&ust=1702823817532819&usg=AOvVaw1PgmepIZZipgL5-WFi_nvZ">
                    www.youtube.com
                  </a>
                </span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span className="c3 c2">
                  <a href="https://www.google.com/url?q=https://app.legally-ok.com/93763/policies/latest%23tracker-275&sa=D&source=editors&ust=1702823817533287&usg=AOvVaw0QZAmcamLz2eRxwxktzFwV">
                    Youtube
                  </a>
                </span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>
                  Mit Hilfe des Cookies kann der von uns eingebettete
                  Videoplayer erkennen, ob die Übermittlung personenbezogener
                  Daten auf Basis einer Einwilligung erfolgt.
                </span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>Erfüllung rechtl. Verpflichtungen</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>ca. 60 Sekunden</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>Cookie-Banner</span>
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>VISITOR_INFO1_LIVE</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>.youtube.com</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span className="c3 c2">
                  <a href="https://www.google.com/url?q=https://app.legally-ok.com/93763/policies/latest%23tracker-275&sa=D&source=editors&ust=1702823817535094&usg=AOvVaw3Y8667yxheTM-NJn65WRba">
                    Youtube
                  </a>
                </span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>
                  Das Cookie wird dazu verwendet, abzuschätzen, wie die
                  Akzeptanz der Videos auf der Website durch die Seitenbesucher
                  sein wird.
                </span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>Einwilligung</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>ca. 6 Monate</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>Analytics</span>
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>VISITOR_PRIVACY_METADATA</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>.youtube.com</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span className="c3 c2">
                  <a href="https://www.google.com/url?q=https://app.legally-ok.com/93763/policies/latest%23tracker-275&sa=D&source=editors&ust=1702823817536988&usg=AOvVaw3tvnsWqfPuh7m7xQXcw7j_">
                    Youtube
                  </a>
                </span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>
                  Durch das Cookie werden basierend auf den
                  Datenschutzeinstellungen des Nutzers verschiedene
                  Informationen über den Nutzer erhoben.
                </span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>Einwilligung</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>ca. 6 Monate</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>Analytics</span>
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>YSC</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>.youtube.com</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span className="c3 c2">
                  <a href="https://www.google.com/url?q=https://app.legally-ok.com/93763/policies/latest%23tracker-275&sa=D&source=editors&ust=1702823817538776&usg=AOvVaw2jo5vqVgWgvdYm05Volv2z">
                    Youtube
                  </a>
                </span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>
                  Dieses Cookie weist dem Seitenbesucher eine ID zu. Diese ID
                  dient dazu, Statistiken der Videos des Seitenbesuchers zu
                  erstellen.
                </span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>Einwilligung</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>Sitzung</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>Analytics</span>
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>_ga</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>valerianodidomenico.ch</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span className="c3 c2">
                  <a href="https://www.google.com/url?q=https://app.legally-ok.com/93763/policies/latest%23tracker-418&sa=D&source=editors&ust=1702823817540565&usg=AOvVaw0yLWFzVBXniucpRHkFLD6w">
                    Google Analytics
                  </a>
                </span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>
                  Dieser Cookie ordnet einem User eine ID zu, damit der
                  Webtracker die Aktionen des Nutzers unter diese ID
                  zusammenfassen kann.
                </span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>Einwilligung</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>ca. 24 Monate</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>Analytics</span>
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>_ga_*</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>valerianodidomenico.ch</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span className="c3 c2">
                  <a href="https://www.google.com/url?q=https://app.legally-ok.com/93763/policies/latest%23tracker-418&sa=D&source=editors&ust=1702823817542409&usg=AOvVaw1-LxS6cFYhTd-UEoXaVUvl">
                    Google Analytics
                  </a>
                </span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>
                  Dieses Cookie speichert im Zusammenhang mit Google Analytics
                  bzw. Google Tag Manager eine eindeutige ID für einen
                  Website-Besucher und verfolgt, wie der Besucher die Website
                  nutzt.
                </span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>Einwilligung</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>ca. 24 Monate</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>Analytics</span>
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>remote_sid</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>youtube.com</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span className="c3 c2">
                  <a href="https://www.google.com/url?q=https://app.legally-ok.com/93763/policies/latest%23tracker-275&sa=D&source=editors&ust=1702823817544283&usg=AOvVaw2ypGwTXAqDrJIR_dYctF0o">
                    Youtube
                  </a>
                </span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>
                  Wir betten Videos von unserem offiziellen YouTube-Kanal im
                  privat genutzten Modus von YouTube ein. Dieser Modus kann
                  Cookies auf Ihrem Computer setzen, sobald Sie auf den
                  YouTube-Videoplayer klicken, jedoch speichert YouTube keine
                  persönlich identifizierbaren Cookie-Informationen für die
                  Wiedergabe von eingebetteten Videos im privat genutzten Modus.
                </span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>Einwilligung</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>Sitzung</span>
              </p>
            </td>
            <td colSpan={1} rowSpan={1}>
              <p>
                <span>Konfiguration</span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <Typography variant="h5" textAlign={"start"}>
        Widerspruchsmöglichkeit, Widerruf der Einwilligung und Löschung
      </Typography>
      <Typography variant="body1" textAlign={"start"}>
        Sie können Ihren Browser nach Ihren Wünschen so einstellen, dass das
        Setzen von Cookies generell verhindert wird. Sie können dann von Fall zu
        Fall über die Annahme von Cookies entscheiden oder Cookies grundsätzlich
        akzeptieren. Cookies können für verschiedene Zwecke verwendet werden,
        z.B. um zu erkennen, dass Ihr Zugangsgerät bereits mit unserer Website
        verbunden ist (permanente Cookies) oder um zuletzt angesehene Angebote
        zu speichern (Session-Cookies). Wenn Sie uns ausdrücklich die Erlaubnis
        erteilt haben, Ihre personenbezogenen Daten zu bearbeiten können Sie
        diese Einwilligung jederzeit widerrufen. Bitte beachten Sie, dass die
        Rechtmässigkeit der auf der Grundlage der Einwilligung bis zum Widerruf
        vorgenommenen Bearbeitung davon nicht berührt wird.
      </Typography>
      <Typography variant="h4" textAlign={"start"}>
        Datensicherheit und Datenschutz, Kommunikation per E- Mail
      </Typography>
      <Typography variant="body1" textAlign={"start"}>
        Ihre personenbezogenen Daten werden durch technische und
        organisatorische Massnahmen so bei der Erhebung, Speicherung und
        Bearbeitung geschützt, dass sie für Dritte nicht zugänglich sind. Bei
        einer unverschlüsselten Kommunikation per E-Mail kann die vollständige
        Datensicherheit auf dem Übertragungsweg zu unseren IT-Systemen von uns
        nicht gewährleistet werden, sodass wir bei Informationen mit hohem
        Geheimhaltungsbedürfnis eine verschlüsselte Kommunikation oder den
        Postweg empfehlen.
      </Typography>
      <Typography variant="h4" textAlign={"start"}>
        Dauer der Speicherung der Daten und Rechte der betroffenen Person
      </Typography>
      <Typography variant="h5" textAlign={"start"}>
        Dauer der Speicherung
      </Typography>
      <Typography variant="body1" textAlign={"start"}>
        Wir speichern die Personendaten nur in dem Umfang und so lange, wie dies
        für die Erfüllung der Zwecke, für die die Personendaten erhoben wurden,
        erforderlich ist, wir an der Aufbewahrung ein berechtigtes überwiegendes
        Interesse haben oder dazu gesetzlich verpflichtet sind.
      </Typography>
      <Typography variant="h5" textAlign={"start"}>
        Auskunftsanspruch
      </Typography>
      <Typography variant="body1" textAlign={"start"}>
        Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob wir
        personenbezogene Daten von Ihnen bearbeiten. Sofern dies der Fall ist,
        haben Sie ein Recht auf Auskunft über die in 25 ff. DSG benannten
        Informationen, soweit die Auskunft durch den Inhaber der Datensammlung
        nicht verweigert, eingeschränkt oder aufgeschoben werden kann (vgl. Art.
        26 f. DSG). Gerne stellen wir Ihnen auch eine Kopie der Daten zur
        Verfügung.
      </Typography>
      <Typography variant="h5" textAlign={"start"}>
        Berichtigungsanspruch
      </Typography>
      <Typography variant="body1" textAlign={"start"}>
        Sie haben gem. Art. 32 Abs. 1 DSG das Recht zu verlangen, dass unrichtig
        hinterlegte personenbezogene Daten (wie z.B. Adresse, Name, etc.)
        berichtigt werden, sofern diesem Anspruch keine gesetzliche Pflicht
        entgegensteht. Auch können Sie jederzeit eine Vervollständigung der bei
        uns gespeicherten Daten verlangen. Eine entsprechende Anpassung erfolgt
        unverzüglich.
      </Typography>
      <Typography variant="h5" textAlign={"start"}>
        Recht auf Löschung
      </Typography>
      <Typography variant="body1" textAlign={"start"}>
        Sie haben das Recht, dass wir die über Sie erhobenen personenbezogenen
        Daten löschen, wenn <br />
        &#x2022; die Daten entweder nicht mehr benötigt werden;
        <br />
        &#x2022; aufgrund des Widerrufs Ihrer Einwilligung die Rechtsgrundlage
        der Bearbeitung ersatzlos entfallen ist;
        <br />
        &#x2022; keine berechtigten Gründe für die Bearbeitung mehr vorliegen;
        <br />
        &#x2022; Ihre Daten unrechtmässig bearbeitet werden;
        <br />
        &#x2022; eine rechtliche Verpflichtung dies erfordert.
        <br /> <br />
        Das Recht besteht dann nicht, wenn
        <br />
        &#x2022; die Bearbeitung zur Ausübung des Rechtes auf freie
        Meinungsäusserung und Information erforderlich ist;
        <br />
        &#x2022; Ihre Daten auf Grundlage einer rechtlichen Verpflichtung
        erhoben worden sind;
        <br />
        &#x2022; die Bearbeitung aus Gründen des öffentlichen Interesses
        erforderlich ist;
        <br />
        &#x2022; die Daten zur Geltendmachung, Ausübung oder Verteidigung von
        Rechtsansprüchen
        <br />
        erforderlich sind.
      </Typography>
      <Typography variant="h5" textAlign={"start"}>
        Recht auf Widerruf
      </Typography>
      <Typography variant="body1" textAlign={"start"}>
        Sofern Sie uns eine ausdrückliche Einwilligung in die Bearbeitung Ihrer
        personenbezogenen Daten erteilt haben (Art. 6 Abs. 6 DSG und Art. 31
        Abs. 1 DSG) können Sie diese jederzeit widerrufen. Bitte beachten Sie,
        dass die Rechtmässigkeit der aufgrund der Einwilligung bis zum Widerruf
        erfolgten Bearbeitung hierdurch nicht berührt wird. Angaben, für welche
        wir gesetzlich zur Aufbewahrung verpflichtet sind, werden nach
        Fristablauf gelöscht.
      </Typography>
      <Typography variant="h5" textAlign={"start"}>
        Wie nehmen Sie Ihre Rechte wahr?
      </Typography>
      <Typography variant="body1" textAlign={"start"}>
        Ihre Rechte können Sie jederzeit wahrnehmen, indem Sie sich an die
        untenstehenden Kontaktdaten wenden:
        <br />
        <br />
        Valeriano Di Domenico
        <br />
        Künzlistrasse 25
        <br />
        8057 Zürich
        <br />
        Schweiz
        <br />
        E-Mail: mail@valerianodidomenico.ch
        <br />
        Tel.: +41 78 604 02 05
      </Typography>
      <Typography variant="h4" textAlign={"start"}>
        Recht auf Datenübertragbarkeit
      </Typography>
      <Typography variant="body1" textAlign={"start"}>
        Wir stellen Ihnen auf Anfrage folgende Daten bereit:
        <br />
        &#x2022; Daten, die aufgrund einer Einwilligung (Art. 31 Abs. 1 DSG)
        erhoben wurden;
        <br />
        &#x2022; Daten, die wir im Rahmen bestehender Verträge von Ihnen
        erhalten haben (Art. 31 Abs. 2 Bst. a DSG);
        <br />
        &#x2022; Daten, die im Rahmen eines automatisierten Verfahrens
        bearbeitet worden sind.
        <br />
        <br />
        Die Übertragung der personenbezogenen Daten direkt an einen von Ihnen
        gewünschten Verantwortlichen werden wir vornehmen, soweit dies technisch
        machbar ist. Bitte beachten Sie, dass wir Daten, die in überwiegende
        Interessen Dritter eingreifen gem. Art 26 Abs. 1 Bst. b DSG nicht oder
        nur eingeschränkt übertragen dürfen.
      </Typography>
      <Typography variant="h4" textAlign={"start"}>
        Mitteilungen an den EDÖB und Klagemöglichkeit
      </Typography>
      <Typography variant="body1" textAlign={"start"}>
        Betroffene Personen können gemäss Art. 49 DSG bei der Aufsichtsbehörde
        eine Anzeige machen, wenn genügend Anzeichen bestehen, dass eine
        Datenbearbeitung gegen die Datenschutzvorschriften verstossen könnte.
        Aufsichtsbehörde für den Datenschutz in der Schweiz ist der
        Eidgenössische Datenschutz- und Öffentlichkeitsbeauftragte (EDÖB).
        <br />
        Weiteres entnehmen Sie dem Kontaktformular des EDÖB:
        <br />
        https://www.edoeb.admin.ch/edoeb/de/home/deredoeb/kontakt.html
        <br />
        Sofern Sie den Verdacht haben, dass auf unserer Seite Ihre Daten
        rechtswidrig bearbeitet werden, können Sie gem. Art. 32 DSG eine
        gerichtliche Klärung der Problematik herbeiführen. In der Regel ist
        hierzu eine Klage nach Art. 28 ff. ZGB anzustreben. Sind Sie von einer
        Bearbeitung der Daten durch Bundesorgane betroffen richtet sich die
        Vorgehensweis nach Art. 41 DSG. Auch diesfalls können Sie den EDÖB
        kontaktieren (siehe Hinweis auf das Kontaktformular oben).
      </Typography>
    </Box>
  );
};
