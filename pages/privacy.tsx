import React from 'react';

import Head from 'next/head';

import Page from '@components/page';

import Container from '@components/container';
import { PageTitle, SecondaryTitle, TertiaryTitle } from '@components/title';
import Section from '@components/section';
import Link from '@components/link';
import Text from '@components/text';
import Strong from '@components/strong';
import Label from '@components/label';

const PrivacyPage: React.FunctionComponent = (): React.ReactElement => (
    <Page>

        <Head>

            <title>Steven Krahforst » 🔒 Datenschutzerklärung</title>

            <meta name="robots" content="none" />
            <meta name="googlebot" content="none" />

            <meta name="description" content="Datenschutzerklärung von Steven Krahforst" />
            <meta name="image" content="/legal.png" />

            <meta property="og:title" content="Steven Krahforst Datenschutzerklärung" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://krahforst.dev/privacy" />
            <meta property="og:image" content="/legal.png" />
            <meta property="og:description" content="Datenschutzerklärung von Steven Krahforst" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Steven Krahforst Datenschutzerklärung" />
            <meta name="twitter:description" content="Datenschutzerklärung von Steven Krahforst" />
            <meta name="twitter:image" content="/legal.png" />

        </Head>

        <Container>

            <PageTitle>🔒 Datenschutzerklärung</PageTitle>

            <Section id="m1870">
                <SecondaryTitle>Einleitung</SecondaryTitle>
                <Text>Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten
                    (nachfolgend auch kurz als "Daten“ bezeichnet) wir zu welchen Zwecken und in welchem Umfang im Rahmen der
                    Bereitstellung unserer Applikation verarbeiten.</Text>
                <Text>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</Text>
                <Text>Stand: 23. Juli 2021</Text>
            </Section>
            <Section>
                <SecondaryTitle>Inhaltsübersicht</SecondaryTitle>
                <ul>
                    <li><Link href="#m1870">Einleitung</Link></li>
                    <li><Link href="#m3">Verantwortlicher</Link></li>
                    <li><Link href="#mOverview">Übersicht der Verarbeitungen</Link></li>
                    <li><Link href="#m13">Maßgebliche Rechtsgrundlagen</Link></li>
                    <li><Link href="#m27">Sicherheitsmaßnahmen</Link></li>
                    <li><Link href="#m25">Übermittlung von personenbezogenen Daten</Link></li>
                    <li><Link href="#m24">Datenverarbeitung in Drittländern</Link></li>
                    <li><Link href="#m12">Löschung von Daten</Link></li>
                    <li><Link href="#m134">Einsatz von Cookies</Link></li>
                    <li><Link href="#m225">Bereitstellung des Onlineangebotes und Webhosting</Link></li>
                    <li><Link href="#m367">Registrierung, Anmeldung und Nutzerkonto</Link></li>
                    <li><Link href="#m182">Kontaktaufnahme</Link></li>
                    <li><Link href="#m328">Plugins und eingebettete Funktionen sowie Inhalte</Link></li>
                    <li><Link href="#m15">Änderung und Aktualisierung der Datenschutzerklärung</Link></li>
                    <li><Link href="#m10">Rechte der betroffenen Personen</Link></li>
                    <li><Link href="#m42">Begriffsdefinitionen</Link></li>
                </ul>
            </Section>
            <Section id="m3">
                <SecondaryTitle id="m3">Verantwortlicher</SecondaryTitle>
                <Text>Siehe <Link href="/imprint">Impressum</Link>.</Text>
            </Section>
            <Section id="mOverview">
                <SecondaryTitle id="mOverview">Übersicht der Verarbeitungen</SecondaryTitle>
                <Text>Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und
                    verweist auf die betroffenen Personen.</Text>
                <Section>
                    <TertiaryTitle>Arten der verarbeiteten Daten</TertiaryTitle>
                    <ul>
                        <li><Text>Bestandsdaten (z.B. Namen, Adressen).</Text></li>
                        <li><Text>Inhaltsdaten (z.B. Eingaben in Onlineformularen).</Text></li>
                        <li><Text>Kontaktdaten (z.B. E-Mail, Telefonnummern).</Text></li>
                        <li><Text>Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).</Text></li>
                        <li><Text>Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten).</Text></li>
                    </ul>
                </Section>
                <Section>
                    <TertiaryTitle>Kategorien betroffener Personen</TertiaryTitle>
                    <ul>
                        <li><Text>Kommunikationspartner.</Text></li>
                        <li><Text>Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</Text></li>
                    </ul>
                </Section>
                <Section>
                    <TertiaryTitle>Zwecke der Verarbeitung</TertiaryTitle>
                    <ul>
                        <li><Text>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</Text></li>
                        <li><Text>Direktmarketing (z.B. per E-Mail oder postalisch).</Text></li>
                        <li><Text>Kontaktanfragen und Kommunikation.</Text></li>
                        <li><Text>Sicherheitsmaßnahmen.</Text></li>
                        <li><Text>Erbringung vertraglicher Leistungen und Kundenservice.</Text></li>
                        <li><Text>Verwaltung und Beantwortung von Anfragen.</Text></li>
                    </ul>
                </Section>
                <Section id="m13">
                    <SecondaryTitle>Maßgebliche Rechtsgrundlagen</SecondaryTitle>
                    <Text>Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten
                        verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in
                        Ihrem bzw. unserem Wohn- oder Sitzland gelten können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen
                        maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.</Text>
                    <ul>
                        <li><Text><Strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a. DSGVO)</Strong> - Die betroffene Person hat ihre Einwilligung
                            in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen spezifischen Zweck oder mehrere
                            bestimmte Zwecke gegeben.</Text></li>
                        <li><Text><Strong>Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO)</Strong> - Die
                            Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur
                            Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen.</Text></li>
                        <li><Text><Strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO)</Strong> - Die Verarbeitung ist zur Wahrung
                            der berechtigten Interessen des Verantwortlichen oder eines Dritten erforderlich, sofern nicht die Interessen
                            oder Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten erfordern,
                            überwiegen.</Text></li>
                    </ul>
                    <Text><Strong>Nationale Datenschutzregelungen in Deutschland:</Strong> Zusätzlich zu den Datenschutzregelungen der
                        Datenschutz-Grundverordnung gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu gehört insbesondere
                        das Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz –
                        BDSG). Das BDSG enthält insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum
                        Widerspruchsrecht, zur Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere
                        Zwecke und zur Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall einschließlich Profiling. Des
                        Weiteren regelt es die Datenverarbeitung für Zwecke des Beschäftigungsverhältnisses (§ 26 BDSG), insbesondere im
                        Hinblick auf die Begründung, Durchführung oder Beendigung von Beschäftigungsverhältnissen sowie die Einwilligung von
                        Beschäftigten. Ferner können Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung gelangen.</Text>
                </Section>
            </Section>
            <Section id="m27">
                <SecondaryTitle>Sicherheitsmaßnahmen</SecondaryTitle>
                <Text>Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der
                    Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der
                    unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher
                    Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu
                    gewährleisten.</Text>
                <Text>Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch
                    Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der
                    Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren
                    eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung
                    der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung
                    bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch
                    Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.</Text>
                <Text><Strong>SSL-Verschlüsselung (https):</Strong> Um Ihre via unserem Online-Angebot übermittelten Daten zu schützen,
                    nutzen wir eine SSL-Verschlüsselung. Sie erkennen derart verschlüsselte Verbindungen an dem Präfix https:// in der
                    Adresszeile Ihres Browsers.</Text>
            </Section>
            <Section id="m25">
                <SecondaryTitle>Übermittlung von personenbezogenen Daten</SecondaryTitle>
                <Text>Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass die Daten an andere Stellen,
                    Unternehmen, rechtlich selbstständige Organisationseinheiten oder Personen übermittelt oder sie ihnen gegenüber
                    offengelegt werden. Zu den Empfängern dieser Daten können z.B. mit IT-Aufgaben beauftragte Dienstleister oder
                    Anbieter von Diensten und Inhalten, die in eine Webseite eingebunden werden, gehören. In solchen Fall beachten wir
                    die gesetzlichen Vorgaben und schließen insbesondere entsprechende Verträge bzw. Vereinbarungen, die dem Schutz
                    Ihrer Daten dienen, mit den Empfängern Ihrer Daten ab.</Text>
            </Section>
            <Section id="m24">
                <SecondaryTitle>Datenverarbeitung in Drittländern</SecondaryTitle>
                <Text>Sofern wir Daten in einem Drittland (d.h., außerhalb der Europäischen Union (EU), des Europäischen Wirtschaftsraums
                    (EWR)) verarbeiten oder die Verarbeitung im Rahmen der Inanspruchnahme von Diensten Dritter oder der Offenlegung
                    bzw. Übermittlung von Daten an andere Personen, Stellen oder Unternehmen stattfindet, erfolgt dies nur im Einklang
                    mit den gesetzlichen Vorgaben. </Text>
                <Text>Vorbehaltlich ausdrücklicher Einwilligung oder vertraglich oder gesetzlich erforderlicher Übermittlung verarbeiten
                    oder lassen wir die Daten nur in Drittländern mit einem anerkannten Datenschutzniveau, vertraglichen Verpflichtung
                    durch sogenannte Standardschutzklauseln der EU-Kommission, beim Vorliegen von Zertifizierungen oder verbindlicher
                    internen Datenschutzvorschriften verarbeiten (Art. 44 bis 49 DSGVO, Informationsseite der EU-Kommission: <Link href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de" target="_blank">https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de</Link>).
                </Text>
            </Section>
            <Section id="m12">
                <SecondaryTitle>Löschung von Daten</SecondaryTitle>
                <Text>Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen Vorgaben gelöscht, sobald deren zur Verarbeitung
                    erlaubten Einwilligungen widerrufen werden oder sonstige Erlaubnisse entfallen (z.B. wenn der Zweck der Verarbeitung
                    dieser Daten entfallen ist oder sie für den Zweck nicht erforderlich sind).</Text>
                <Text>Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird
                    deren Verarbeitung auf diese Zwecke beschränkt.D.h., die Daten werden gesperrt und nicht für andere Zwecke
                    verarbeitet.Das gilt z.B. für Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen oder
                    deren Speicherung zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte
                    einer anderen natürlichen oder juristischen Person erforderlich ist.</Text>
                <Text>Unsere Datenschutzhinweise können ferner weitere Angaben zu der Aufbewahrung und Löschung von Daten beinhalten, die
                    für die jeweiligen Verarbeitungen vorrangig gelten.</Text>
            </Section>
            <Section id="m134">
                <SecondaryTitle>Einsatz von Cookies</SecondaryTitle>
                <Text>Cookies sind Textdateien, die Daten von besuchten Websites oder Domains enthalten und von einem Browser auf dem
                    Computer des Benutzers gespeichert werden. Ein Cookie dient in erster Linie dazu, die Informationen über einen
                    Benutzer während oder nach seinem Besuch innerhalb eines Onlineangebotes zu speichern.Zu den gespeicherten Angaben
                    können z.B. die Spracheinstellungen auf einer Webseite, der Loginstatus, ein Warenkorb oder die Stelle, an der ein
                    Video geschaut wurde, gehören. Zu dem Begriff der Cookies zählen wir ferner andere Technologien, die die gleichen
                    Funktionen wie Cookies erfüllen (z.B. wenn Angaben der Nutzer anhand pseudonymer Onlinekennzeichnungen gespeichert
                    werden, auch als "Nutzer-IDs" bezeichnet)</Text>
                <Text>Die folgenden Cookie-Typen und Funktionen werden unterschieden: </Text>
                <ul>
                    <li><Text><Strong>Temporäre Cookies (auch: Session- oder Sitzungs-Cookies):</Strong>&nbsp; Temporäre Cookies werden
                        spätestens gelöscht, nachdem ein Nutzer ein Online-Angebot verlassen und seinen Browser geschlossen hat.</Text></li>
                    <li><Text><Strong>Permanente Cookies:</Strong>&nbsp; Permanente Cookies bleiben auch nach dem Schließen des Browsers
                        gespeichert. So kann beispielsweise der Login-Status gespeichert oder bevorzugte Inhalte direkt angezeigt
                        werden, wenn der Nutzer eine Website erneut besucht. Ebenso können die Interessen von Nutzern, die zur
                        Reichweitenmessung oder zu Marketingzwecken verwendet werden, in einem solchen Cookie gespeichert werden.</Text></li>
                    <li><Text><Strong>First-Party-Cookies:</Strong>&nbsp; First-Party-Cookies werden von uns selbst gesetzt.</Text></li>
                    <li><Text><Strong>Third-Party-Cookies (auch: Drittanbieter-Cookies)</Strong>: Drittanbieter-Cookies werden hauptsächlich
                        von Werbetreibenden (sog. Dritten) verwendet, um Benutzerinformationen zu verarbeiten.</Text></li>
                    <li><Text><Strong>Notwendige (auch: essentielle oder unbedingt erforderliche) Cookies:</Strong> Cookies können zum einen
                        für den Betrieb einer Webseite unbedingt erforderlich sein (z.B. um Logins oder andere Nutzereingaben zu
                        speichern oder aus Gründen der Sicherheit).</Text></li>
                    <li><Text><Strong>Statistik-, Marketing- und Personalisierungs-Cookies</Strong>: Ferner werden Cookies im Regelfall auch
                        im Rahmen der Reichweitenmessung eingesetzt sowie dann, wenn die Interessen eines Nutzers oder sein Verhalten
                        (z.B. Betrachten bestimmter Inhalte, Nutzen von Funktionen etc.) auf einzelnen Webseiten in einem Nutzerprofil
                        gespeichert werden. Solche Profile dienen dazu, den Nutzern z.B. Inhalte anzuzeigen, die ihren potentiellen
                        Interessen entsprechen. Dieses Verfahren wird auch als "Tracking", d.h., Nachverfolgung der potentiellen
                        Interessen der Nutzer bezeichnet. Soweit wir Cookies oder "Tracking"-Technologien einsetzen, informieren wir Sie
                        gesondert in unserer Datenschutzerklärung oder im Rahmen der Einholung einer Einwilligung.</Text></li>
                </ul>
                <Text><Strong>Hinweise zu Rechtsgrundlagen: </Strong> Auf welcher Rechtsgrundlage wir Ihre personenbezogenen Daten mit
                    Hilfe von Cookies verarbeiten, hängt davon ab, ob wir Sie um eine Einwilligung bitten. Falls dies zutrifft und Sie
                    in die Nutzung von Cookies einwilligen, ist die Rechtsgrundlage der Verarbeitung Ihrer Daten die erklärte
                    Einwilligung. Andernfalls werden die mithilfe von Cookies verarbeiteten Daten auf Grundlage unserer berechtigten
                    Interessen (z.B. an einem betriebswirtschaftlichen Betrieb unseres Onlineangebotes und dessen Verbesserung)
                    verarbeitet oder, wenn der Einsatz von Cookies erforderlich ist, um unsere vertraglichen Verpflichtungen zu
                    erfüllen.</Text>
                <Text><Strong>Speicherdauer:</Strong> Sofern wir Ihnen keine expliziten Angaben zur Speicherdauer von permanenten Cookies
                    mitteilen (z.B. im Rahmen eines sog. Cookie-Opt-Ins), gehen Sie bitte davon aus, dass die Speicherdauer bis zu zwei
                    Jahre betragen kann.</Text>
                <Text><Strong>Allgemeine Hinweise zum Widerruf und Widerspruch (Opt-Out):</Strong> Abhängig davon, ob die Verarbeitung auf
                    Grundlage einer Einwilligung oder gesetzlichen Erlaubnis erfolgt, haben Sie jederzeit die Möglichkeit, eine erteilte
                    Einwilligung zu widerrufen oder der Verarbeitung Ihrer Daten durch Cookie-Technologien zu widersprechen
                    (zusammenfassend als "Opt-Out" bezeichnet). Sie können Ihren Widerspruch zunächst mittels der Einstellungen Ihres
                    Browsers erklären, z.B., indem Sie die Nutzung von Cookies deaktivieren (wobei hierdurch auch die Funktionsfähigkeit
                    unseres Onlineangebotes eingeschränkt werden kann). Ein Widerspruch gegen den Einsatz von Cookies zu Zwecken des
                    Onlinemarketings kann auch mittels einer Vielzahl von Diensten, vor allem im Fall des Trackings, über die Webseiten <Link href="https://optout.aboutads.info" target="_blank">https://optout.aboutads.info</Link> und <Link href="https://www.youronlinechoices.com/" target="_blank">https://www.youronlinechoices.com/</Link> erklärt werden.
                    Daneben können Sie weitere Widerspruchshinweise im Rahmen der Angaben zu den eingesetzten Dienstleistern und Cookies
                    erhalten.</Text>
                <Text><Strong>Verarbeitung von Cookie-Daten auf Grundlage einer Einwilligung:</Strong> Wir setzen ein Verfahren zum
                    Cookie-Einwilligungs-Management ein, in dessen Rahmen die Einwilligungen der Nutzer in den Einsatz von Cookies, bzw.
                    der im Rahmen des Cookie-Einwilligungs-Management-Verfahrens genannten Verarbeitungen und Anbieter eingeholt sowie
                    von den Nutzern verwaltet und widerrufen werden können. Hierbei wird die Einwilligungserklärung gespeichert, um
                    deren Abfrage nicht erneut wiederholen zu müssen und die Einwilligung entsprechend der gesetzlichen Verpflichtung
                    nachweisen zu können. Die Speicherung kann serverseitig und/oder in einem Cookie (sogenanntes Opt-In-Cookie, bzw.
                    mithilfe vergleichbarer Technologien) erfolgen, um die Einwilligung einem Nutzer, bzw. dessen Gerät zuordnen zu
                    können.Vorbehaltlich individueller Angaben zu den Anbietern von Cookie-Management-Diensten, gelten die folgenden
                    Hinweise: Die Dauer der Speicherung der Einwilligung kann bis zu zwei Jahren betragen. Hierbei wird ein pseudonymer
                    Nutzer-Identifikator gebildet und mit dem Zeitpunkt der Einwilligung, Angaben zur Reichweite der Einwilligung (z.B.
                    welche Kategorien von Cookies und/oder Diensteanbieter) sowie dem Browser, System und verwendeten Endgerät
                    gespeichert.</Text>
                <ul>
                    <li><Text><Strong>Verarbeitete Datenarten:</Strong> Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
                        Zugriffszeiten), Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).</Text></li>
                    <li><Text><Strong>Betroffene Personen:</Strong> Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</Text></li>
                    <li><Text><Strong>Rechtsgrundlagen:</Strong> Einwilligung (Art. 6 Abs. 1 S .1 lit. a. DSGVO), Berechtigte Interessen (Art.
                        6 Abs. 1 S. 1 lit. f. DSGVO).</Text></li>
                </ul>
            </Section>
            <Section id="m225">
                <SecondaryTitle>Bereitstellung des Onlineangebotes und Webhosting</SecondaryTitle>
                <Text>Um unser Onlineangebot sicher und effizient bereitstellen zu können, nehmen wir die Leistungen von einem oder
                    mehreren Webhosting-Anbietern in Anspruch, von deren Servern (bzw. von ihnen verwalteten Servern) das Onlineangebot
                    abgerufen werden kann. Zu diesen Zwecken können wir Infrastruktur- und Plattformdienstleistungen, Rechenkapazität,
                    Speicherplatz und Datenbankdienste sowie Sicherheitsleistungen und technische Wartungsleistungen in Anspruch nehmen.
                </Text>
                <Text>Zu den im Rahmen der Bereitstellung des Hostingangebotes verarbeiteten Daten können alle die Nutzer unseres
                    Onlineangebotes betreffenden Angaben gehören, die im Rahmen der Nutzung und der Kommunikation anfallen. Hierzu
                    gehören regelmäßig die IP-Adresse, die notwendig ist, um die Inhalte von Onlineangeboten an Browser ausliefern zu
                    können, und alle innerhalb unseres Onlineangebotes oder von Webseiten getätigten Eingaben.</Text>
                <Text><Strong>Erhebung von Zugriffsdaten und Logfiles</Strong>: Wir selbst (bzw. unser Webhostinganbieter) erheben Daten zu
                    jedem Zugriff auf den Server (sogenannte Serverlogfiles). Zu den Serverlogfiles können die Adresse und Name der
                    abgerufenen Webseiten und Dateien, Datum und Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über erfolgreichen
                    Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite) und im
                    Regelfall IP-Adressen und der anfragende Provider gehören.</Text>
                <Text>Die Serverlogfiles können zum einen zu Zwecken der Sicherheit eingesetzt werden, z.B., um eine Überlastung der Server
                    zu vermeiden (insbesondere im Fall von missbräuchlichen Angriffen, sogenannten DDoS-Attacken) und zum anderen, um
                    die Auslastung der Server und ihre Stabilität sicherzustellen.</Text>
                <ul>
                    <li><Text><Strong>Verarbeitete Datenarten:</Strong> Inhaltsdaten (z.B. Eingaben in Onlineformularen), Nutzungsdaten (z.B.
                        besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten (z.B.
                        Geräte-Informationen, IP-Adressen).</Text></li>
                    <li><Text><Strong>Betroffene Personen:</Strong> Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</Text></li>
                    <li><Text><Strong>Zwecke der Verarbeitung:</Strong> Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</Text></li>
                    <li><Text><Strong>Rechtsgrundlagen: </Strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).</Text></li>
                </ul>
            </Section>
            <Section id="m367">
                <SecondaryTitle>Registrierung, Anmeldung und Nutzerkonto</SecondaryTitle>
                <Text>Nutzer können ein Nutzerkonto anlegen. Im Rahmen der Registrierung werden den Nutzern die erforderlichen
                    Pflichtangaben mitgeteilt und zu Zwecken der Bereitstellung des Nutzerkontos auf Grundlage vertraglicher
                    Pflichterfüllung verarbeitet. Zu den verarbeiteten Daten gehören insbesondere die Login-Informationen (Nutzername,
                    Passwort sowie eine E-Mail-Adresse).</Text>
                <Text>Im Rahmen der Inanspruchnahme unserer Registrierungs- und Anmeldefunktionen sowie der Nutzung des Nutzerkontos
                    speichern wir die IP-Adresse und den Zeitpunkt der jeweiligen Nutzerhandlung. Die Speicherung erfolgt auf Grundlage
                    unserer berechtigten Interessen als auch jener der Nutzer an einem Schutz vor Missbrauch und sonstiger unbefugter
                    Nutzung. Eine Weitergabe dieser Daten an Dritte erfolgt grundsätzlich nicht, es sei denn, sie ist zur Verfolgung
                    unserer Ansprüche erforderlich oder es besteht eine gesetzliche Verpflichtung hierzu. <Link href="#notice-account">*</Link></Text>
                <Text>Die Nutzer können über Vorgänge, die für deren Nutzerkonto relevant sind, wie z.B. technische Änderungen, per E-Mail
                    informiert werden.</Text>
                <Text><Strong>Registrierung mit Pseudonymen:</Strong> Nutzer dürfen statt Klarnamen Pseudonyme als Nutzernamen verwenden.</Text>
                <Text><Strong>Einstellung der Sichtbarkeit von Profilen:</Strong> Die Nutzer können mittels Einstellungen bestimmen, in
                    welchem Umfang ihre Profile für die Öffentlichkeit oder nur für bestimmte Personengruppen sichtbar, bzw. zugänglich
                    sind.</Text>
                <Text><Strong>Zwei-Faktor-Authentifizierung:</Strong> Die Zwei-Faktor-Authentifizierung bietet eine zusätzliche
                    Sicherheitsebene für Ihr Benutzerkonto und stellt sicher, dass nur Sie auf Ihr Konto zugreifen können, auch, wenn
                    jemand anderes Ihr Passwort kennt. Zu diesem Zweck müssen Sie zusätzlich zu Ihrem Passwort eine weitere
                    Authentifizierungsmaßnahme durchführen (z.B. einen an ein mobiles Gerät gesandten Code eingeben). Wir werden Sie
                    über das von uns eingesetzte Verfahren informieren.</Text>
                <Text><Strong>Löschung von Daten nach Kündigung:</Strong> Wenn Nutzer ihr Nutzerkonto gekündigt haben, werden deren Daten
                    im Hinblick auf das Nutzerkonto, vorbehaltlich einer gesetzlichen Erlaubnis, Pflicht oder Einwilligung der Nutzer,
                    gelöscht.</Text>
                <Text>Es obliegt den Nutzern, ihre Daten bei erfolgter Kündigung vor dem Vertragsende zu sichern. Wir sind berechtigt,
                    sämtliche während der Vertragsdauer gespeicherte Daten des Nutzers unwiederbringlich zu löschen.</Text>
                <ul>
                    <li><Text><Strong>Verarbeitete Datenarten:</Strong> Bestandsdaten (z.B. Namen, Adressen), Kontaktdaten (z.B. E-Mail,
                        Telefonnummern), Inhaltsdaten (z.B. Eingaben in Onlineformularen), Meta-/Kommunikationsdaten (z.B.
                        Geräte-Informationen, IP-Adressen).</Text></li>
                    <li><Text><Strong>Betroffene Personen:</Strong> Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</Text></li>
                    <li><Text><Strong>Zwecke der Verarbeitung:</Strong> Erbringung vertraglicher Leistungen und Kundenservice,
                        Sicherheitsmaßnahmen, Verwaltung und Beantwortung von Anfragen.</Text></li>
                    <li><Text><Strong>Rechtsgrundlagen:</Strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b.
                        DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).</Text></li>
                </ul>
            </Section>
            <Section id="m182">
                <SecondaryTitle>Kontaktaufnahme</SecondaryTitle>
                <Text>Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon oder via soziale Medien) werden die
                    Angaben der anfragenden Personen verarbeitet, soweit dies zur Beantwortung der Kontaktanfragen und etwaiger
                    angefragter Maßnahmen erforderlich ist.</Text>
                <Text>Die Beantwortung der Kontaktanfragen im Rahmen von vertraglichen oder vorvertraglichen Beziehungen erfolgt zur
                    Erfüllung unserer vertraglichen Pflichten oder zur Beantwortung von (vor)vertraglichen Anfragen und im Übrigen auf
                    Grundlage der berechtigten Interessen an der Beantwortung der Anfragen.</Text>
                <ul>
                    <li><Text><Strong>Verarbeitete Datenarten:</Strong> Bestandsdaten (z.B. Namen, Adressen), Kontaktdaten (z.B. E-Mail,
                        Telefonnummern), Inhaltsdaten (z.B. Eingaben in Onlineformularen).</Text></li>
                    <li><Text><Strong>Betroffene Personen:</Strong> Kommunikationspartner.</Text></li>
                    <li><Text><Strong>Zwecke der Verarbeitung:</Strong> Kontaktanfragen und Kommunikation.</Text></li>
                    <li><Text><Strong>Rechtsgrundlagen:</Strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b.
                        DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).</Text></li>
                </ul>
            </Section>
            <Section id="m328">
                <SecondaryTitle>Plugins und eingebettete Funktionen sowie Inhalte</SecondaryTitle>
                <Text>Wir binden in unser Onlineangebot Funktions- und Inhaltselemente ein, die von den Servern ihrer jeweiligen Anbieter
                    (nachfolgend bezeichnet als "Drittanbieter”) bezogen werden. Dabei kann es sich zum Beispiel um Grafiken, Videos
                    oder Stadtpläne handeln (nachfolgend einheitlich bezeichnet als "Inhalte”).</Text>
                <Text>Die Einbindung setzt immer voraus, dass die Drittanbieter dieser Inhalte die IP-Adresse der Nutzer verarbeiten, da
                    sie ohne die IP-Adresse die Inhalte nicht an deren Browser senden könnten. Die IP-Adresse ist damit für die
                    Darstellung dieser Inhalte oder Funktionen erforderlich. Wir bemühen uns, nur solche Inhalte zu verwenden, deren
                    jeweilige Anbieter die IP-Adresse lediglich zur Auslieferung der Inhalte verwenden. Drittanbieter können ferner
                    sogenannte Pixel-Tags (unsichtbare Grafiken, auch als "Web Beacons" bezeichnet) für statistische oder
                    Marketingzwecke verwenden. Durch die "Pixel-Tags" können Informationen, wie der Besucherverkehr auf den Seiten
                    dieser Webseite, ausgewertet werden. Die pseudonymen Informationen können ferner in Cookies auf dem Gerät der Nutzer
                    gespeichert werden und unter anderem technische Informationen zum Browser und zum Betriebssystem, zu verweisenden
                    Webseiten, zur Besuchszeit sowie weitere Angaben zur Nutzung unseres Onlineangebotes enthalten als auch mit solchen
                    Informationen aus anderen Quellen verbunden werden.</Text>
                <Text><Strong>Hinweise zu Rechtsgrundlagen:</Strong> Sofern wir die Nutzer um deren Einwilligung in den Einsatz der
                    Drittanbieter bitten, ist die Rechtsgrundlage der Verarbeitung von Daten die Einwilligung. Ansonsten werden die
                    Daten der Nutzer auf Grundlage unserer berechtigten Interessen (d.h. Interesse an effizienten, wirtschaftlichen und
                    empfängerfreundlichen Leistungen) verarbeitet. In diesem Zusammenhang möchten wir Sie auch auf die Informationen zur
                    Verwendung von Cookies in dieser Datenschutzerklärung hinweisen.</Text>
                <ul>
                    <li><Text><Strong>Verarbeitete Datenarten:</Strong> Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
                        Zugriffszeiten), Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).</Text></li>
                    <li><Text><Strong>Betroffene Personen:</Strong> Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</Text></li>
                    <li><Text><Strong>Zwecke der Verarbeitung:</Strong> Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit,
                        Erbringung vertraglicher Leistungen und Kundenservice.</Text></li>
                    <li><Text><Strong>Rechtsgrundlagen:</Strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).</Text></li>
                </ul>
                <Text><strong>Eingesetzte Dienste und Diensteanbieter: </strong></Text>
                <ul>
                    <li><Text><Strong>Font Awesome:</Strong> Darstellung von Schriftarten und Symbolen; Dienstanbieter: Fonticons, Inc.,6
                        Porter Road Apartment 3R, Cambridge, MA 02140, USA; Website: <Link href="https://fontawesome.com/" target="_blank">https://fontawesome.com/</Link>; Datenschutzerklärung: <Link href="https://fontawesome.com/privacy" target="_blank">https://fontawesome.com/privacy</Link>.</Text></li>
                    <li><Text><Strong>OpenStreetMap:</Strong> Wir binden die Landkarten des Dienstes "OpenStreetMap" ein, die auf Grundlage
                        der Open Data Commons Open Database Lizenz (ODbL) durch die OpenStreetMap Foundation (OSMF) angeboten werden.
                        Die Daten der Nutzer werden durch OpenStreetMap ausschließlich zu Zwecken der Darstellung der Kartenfunktionen
                        und zur Zwischenspeicherung der gewählten Einstellungen verwendet. Zu diesen Daten können insbesondere
                        IP-Adressen und Standortdaten der Nutzer gehören, die jedoch nicht ohne deren Einwilligung (im Regelfall im
                        Rahmen der Einstellungen ihrer Mobilgeräte vollzogen) erhoben werden. Dienstanbieter: OpenStreetMap Foundation
                        (OSMF); Website: <Link href="https://www.openstreetmap.de" target="_blank">https://www.openstreetmap.de</Link>;
                        Datenschutzerklärung: <Link href="https://wiki.openstreetmap.org/wiki/Privacy_Policy" target="_blank">https://wiki.openstreetmap.org/wiki/Privacy_Policy</Link>.</Text></li>
                    <li><Text><Strong>Cloudflare:</Strong> Unsere Seiten nutzen Funktionen von CloudFlare. Anbieter ist die CloudFlare, Inc.
                        665 3rd St. #200, San Francisco, CA 94107, USA. CloudFlare bietet ein weltweit verteiltes Content Delivery
                        Network mit DNS an. Technisch wird der Informationstransfer zwischen Ihrem Browser und unserer Website über das
                        Netzwerk von CloudFlare geleitet. CloudFlare ist damit in der Lage, den Datenverkehr zwischen Anwender und
                        unseren Webseiten zu analysieren, um beispielsweise Angriffe auf unsere Dienste zu erkennen und abzuwehren.
                        Zudem speichert CloudFlare zur Optimierung und Analyse unter Umständen Cookies auf Ihrem Rechner. Dies dient der
                        Wahrung unserer im Rahmen einer Interessensabwägung überwiegenden berechtigten Interessen an einer optimalen
                        Vermarktung unseres Angebots gemäß Art. 6 Abs. 1 S. 1 lit. b DSGVO. Wir haben mit Cloudflare auf Basis der DSGVO
                        eine entsprechende Vereinbarung zur Auftragsverarbeitung abgeschlossen. Cloudflare ist zertifizierter Teilnehmer
                        des EU-US Privacy Shield Frameworks. Cloudflare hat sich dazu verpflichtet, sämtliche von Mitgliedstaaten der
                        Europäischen Union (EU) enthaltenen personenbezogenen Daten gemäß dem Privacy Shield Framework entsprechend
                        dessen geltenden Prinzipien handzuhaben. Weitere Informationen über das Privacy Shield Framework finden Sie auf
                        der Privacy Shield Liste des US-Handelsministeriums unter https://www.privacyshield.gov. Cloudflare erhebt
                        statistische Daten über den Besuch dieser Website. Zu den Zugriffsdaten gehören: Name der abgerufenen Webseite,
                        Datei, Datum und Uhrzeit des Abrufs, übertragene Datenmenge, Meldung über erfolgreichen Abruf, Browsertyp nebst
                        Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite), IP-Adresse und der anfragende
                        Provider. Cloudflare verwendet die Protokolldaten für statistische Auswertungen zum Zweck des Betriebs, der
                        Sicherheit und der Optimierung des Angebots.
                        Hier finden Sie Informationen zu den dort gesammelten Daten und zu Sicherheit & Datenschutz bei CloudFlare.</Text></li>
                    <li><Text><Strong>Sentry:</Strong> Wir verwenden den Dienst Sentry (Sentry, 1501 Mariposa St #408, San Francisco, CA
                        94107, USA), um die technische Stabilität unseres Dienstes durch Überwachung der Systemstabilität und Ermittlung
                        von Codefehlern zu verbessern. Sentry dient alleine diesen Zielen und wertet keine Daten zu Werbezwecken aus.
                        Die Daten der Nutzer, wie z.B. Angaben zum Gerät oder Fehlerzeitpunkt werden anonym erhoben und nicht
                        personenbezogen genutzt sowie anschließend gelöscht. Weitere Informationen hierzu finden Sie in der
                        Datenschutzerklärung von Sentry: https://sentry.io/privacy/.</Text></li>
                </ul>
            </Section>
            <Section id="m15">
                <SecondaryTitle>Änderung und Aktualisierung der Datenschutzerklärung</SecondaryTitle>
                <Text>Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die
                    Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich
                    machen. Wir informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung)
                    oder eine sonstige individuelle Benachrichtigung erforderlich wird.</Text>
                <Text>Sofern wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen von Unternehmen und Organisationen
                    angeben, bitten wir zu beachten, dass die Adressen sich über die Zeit ändern können und bitten die Angaben vor
                    Kontaktaufnahme zu prüfen.</Text>
            </Section>
            <Section id="m10">
                <SecondaryTitle>Rechte der betroffenen Personen</SecondaryTitle>
                <Text>Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO
                    ergeben:</Text>
                <ul>
                    <li><Text><Strong>Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben,
                        jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs.
                        1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen
                        gestütztes Profiling. Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu
                        betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden
                        personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit
                        es mit solcher Direktwerbung in Verbindung steht.</Strong></Text></li>
                    <li><Text><Strong>Widerrufsrecht bei Einwilligungen:</Strong> Sie haben das Recht, erteilte Einwilligungen jederzeit zu
                        widerrufen.</Text></li>
                    <li><Text><Strong>Auskunftsrecht:</Strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende
                        Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten
                        entsprechend den gesetzlichen Vorgaben.</Text></li>
                    <li><Text><Strong>Recht auf Berichtigung:</Strong> Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die
                        Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu
                        verlangen.</Text></li>
                    <li><Text><Strong>Recht auf Löschung und Einschränkung der Verarbeitung:</Strong> Sie haben nach Maßgabe der gesetzlichen
                        Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach
                        Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung der Daten zu verlangen.</Text></li>
                    <li><Text><Strong>Recht auf Datenübertragbarkeit:</Strong> Sie haben das Recht, Sie betreffende Daten, die Sie uns
                        bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten, gängigen und
                        maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen anderen Verantwortlichen zu fordern.</Text></li>
                    <li><Text><Strong>Beschwerde bei Aufsichtsbehörde:</Strong> Sie haben unbeschadet eines anderweitigen
                        verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer Aufsichtsbehörde,
                        insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des
                        mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen
                        Daten gegen die Vorgaben der DSGVO verstößt.</Text></li>
                </ul>
            </Section>
            <Section id="m42">
                <SecondaryTitle>Begriffsdefinitionen</SecondaryTitle>
                <Text>In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser Datenschutzerklärung verwendeten
                    Begrifflichkeiten. Viele der Begriffe sind dem Gesetz entnommen und vor allem im Art. 4 DSGVO definiert. Die
                    gesetzlichen Definitionen sind verbindlich. Die nachfolgenden Erläuterungen sollen dagegen vor allem dem Verständnis
                    dienen. Die Begriffe sind alphabetisch sortiert.</Text>
                <ul>
                    <li><Text><Strong>Personenbezogene Daten:</Strong> "Personenbezogene Daten“ sind alle Informationen, die sich auf eine
                        identifizierte oder identifizierbare natürliche Person (im Folgenden "betroffene Person“) beziehen; als
                        identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung
                        zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung (z.B. Cookie)
                        oder zu einem oder mehreren besonderen Merkmalen identifiziert werden kann, die Ausdruck der physischen,
                        physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser
                        natürlichen Person sind.</Text></li>
                    <li><Text><Strong>Verantwortlicher:</Strong> Als "Verantwortlicher“ wird die natürliche oder juristische Person, Behörde,
                        Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der
                        Verarbeitung von personenbezogenen Daten entscheidet, bezeichnet.</Text></li>
                    <li><Text><Strong>Verarbeitung:</Strong> "Verarbeitung" ist jeder mit oder ohne Hilfe automatisierter Verfahren
                        ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten. Der Begriff
                        reicht weit und umfasst praktisch jeden Umgang mit Daten, sei es das Erheben, das Auswerten, das Speichern, das
                        Übermitteln oder das Löschen.</Text></li>
                </ul>
                <Section>
                    <Label id="notice-account"><strong style={{ color: '#EA5557' }}>*</strong> Es wird bei der Registrierung der ungefähre Standort der IP-Adresse gespeichert, sodass bei jeder erfolgreichen Anmeldung überprüft werden kann, ob die Anmeldung nicht weiter als 500km von dem ursprünglichen Registrierungsstandort entfernt getätigt wurde, falls dies nicht der Fall sein sollte, würde der Nutzer einen Bestätigungscode per E-Mail erhalten, welchen er beim Anmelden eingeben muss.</Label>
                </Section>
                <Section>
                    <Text><Link href="https://datenschutz-generator.de/?l=de" title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken." target="_blank" rel="noopener noreferrer nofollow">Erstellt mit kostenlosem Datenschutz-Generator.de von Dr.Thomas Schwenke</Link></Text>
                </Section>
            </Section>

        </Container>

    </Page>
);

export default PrivacyPage;