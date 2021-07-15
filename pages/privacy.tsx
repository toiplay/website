import React from 'react';

import Head from 'next/head';

import Page from '@components/page';

import Container from '@components/container';
import { PageTitle } from '@components/title';
import Section from '@components/section';
import Link from '@components/link';
import Text, { BoldText } from '@components/text';
import SubTitle from '@components/subtitle';

const PrivacyPage: React.FunctionComponent = (): React.ReactElement => (
    <Page>

        <Head>

            <title>Steven Krahforst » Datenschutzerklärung</title>

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
            <PageTitle>Datenschutzerklärung</PageTitle>
            <Section>
                <Text>Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten (nachfolgend kurz „Daten“) innerhalb unseres Onlineangebotes und der mit ihm verbundenen Webseiten, Funktionen und Inhalte sowie externen Onlinepräsenzen, wie z.B. unser Social Media Profile auf (nachfolgend gemeinsam bezeichnet als „Onlineangebot“).</Text>
                <Text>Im Hinblick auf die verwendeten Begrifflichkeiten, wie z.B. „Verarbeitung“ oder „Verantwortlicher“ verweisen wir auf die Definitionen im Art. 4 der Datenschutzgrundverordnung (DSGVO).</Text>
            </Section>
            <Section id="types-of-data-processed">
                <SubTitle>Arten der verarbeiteten Daten</SubTitle>
                <div>
                    <Text>- Inhaltsdaten (z.B., Texteingaben)</Text>
                    <Text>- Nutzungsdaten (z.B., Zugriffszeiten)</Text>
                    <Text>- Meta-/Kommunikationsdaten (z.B., Geräte-Informationen, IP-Adressen)</Text>
                </div>
                <Section id="categories-of-persons-concerned">
                    <SubTitle>Kategorien betroffener Personen</SubTitle>
                    <Text>Besucher und Nutzer des Onlineangebotes (Nachfolgend bezeichnen wir die betroffenen Personen zusammenfassend auch als „Nutzer“)</Text>
                </Section>
                <Section id="purpose-of-processing">
                    <SubTitle>Zweck der Verarbeitung</SubTitle>
                    <Text>- Zurverfügungstellung des Onlineangebotes, seiner Funktionen und Inhalte</Text>
                    <Text>- Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern</Text>
                    <Text>- Sicherheitsmaßnahmen</Text>
                    <Text>- Reichweitenmessung</Text>
                </Section>
                <Section id="used-terms">
                    <SubTitle>Verwendete Begrifflichkeiten</SubTitle>
                    <Text>„Personenbezogene Daten“ sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person“) beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung (z.B. Cookie) oder zu einem oder mehreren besonderen Merkmalen identifiziert werden kann, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind.</Text>
                    <Text>„Verarbeitung“ ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten</Text>
                    <Text>Der Begriff reicht weit und umfasst praktisch jeden Umgang mit Daten.</Text>
                    <Text>„Pseudonymisierung“ die Verarbeitung personenbezogener Daten in einer Weise, dass die personenbezogenen Daten ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet werden können, sofern diese zusätzlichen Informationen gesondert aufbewahrt werden und technischen und organisatorischen Maßnahmen unterliegen, die gewährleisten, dass die personenbezogenen Daten nicht einer identifizierten oder identifizierbaren natürlichen Person zugewiesen werden.</Text>
                    <Text>„Profiling“ jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche Person beziehen, zu bewerten, insbesondere um Aspekte bezüglich Arbeitsleistung, wirtschaftliche Lage, Gesundheit, persönliche Vorlieben, Interessen, Zuverlässigkeit, Verhalten, Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu analysieren oder vorherzusagen.</Text>
                    <Text>Als „Verantwortlicher“ wird die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet, bezeichnet.</Text>
                    <Text>„Auftragsverarbeiter“ eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.</Text>
                    <Text>„Content Delivery Network (CDN)“ ist ein Dienst, mit dessen Hilfe Inhalte eines Onlineangebotes, insbesondere große Mediendateien, wie Grafiken oder Programm-Skripte mit Hilfe regional verteilter und über das Internet verbundener Server, schneller und sicherer ausgeliefert werden können.</Text>
                </Section>
                <Section id="relevant-legal-bases">
                    <SubTitle>Maßgebliche Rechtsgrundlagen</SubTitle>
                    <Text>Nach Maßgabe des Art. 13 DSGVO teilen wir Ihnen die Rechtsgrundlagen unserer Datenverarbeitungen mit.</Text>
                    <Text>Sofern die Rechtsgrundlage in der Datenschutzerklärung nicht genannt wird, gilt Folgendes: Die Rechtsgrundlage für die Einholung von Einwilligungen ist Art. 6 Abs. 1 lit. a und Art. 7 DSGVO, die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer Leistungen und Durchführung vertraglicher Maßnahmen sowie Beantwortung von Anfragen ist Art. 6 Abs. 1 lit. b DSGVO, die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer rechtlichen Verpflichtungen ist Art. 6 Abs. 1 lit. c DSGVO, und die Rechtsgrundlage für die Verarbeitung zur Wahrung unserer berechtigten Interessen ist Art. 6 Abs. 1 lit. f DSGVO. Für den Fall, dass lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person eine Verarbeitung personenbezogener Daten erforderlich machen, dient Art. 6 Abs. 1 lit. d DSGVO als Rechtsgrundlage.</Text>
                </Section>
                <Section id="security-measures">
                    <SubTitle>Sicherheitsmaßnahmen</SubTitle>
                    <Text>Wir treffen nach Maßgabe des Art. 32 DSGVO unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeit und Schwere des Risikos für die Rechte und Freiheiten natürlicher Personen, geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.</Text>
                    <Text>Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen Zugangs zu den Daten, als auch des sie betreffenden Zugriffs, der Eingabe, Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung.</Text>
                    <Text>Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, Löschung von Daten und Reaktion auf Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung, bzw. Auswahl von Hardware, Software sowie Verfahren, entsprechend dem Prinzip des Datenschutzes durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen (Art. 25 DSGVO).</Text>
                </Section>
                <Section id="cooperation-with-processors-and-third-parties">
                    <SubTitle>Zusammenarbeit mit Auftragsverarbeitern und Dritten</SubTitle>
                    <Text>Sofern wir im Rahmen unserer Verarbeitung Daten gegenüber anderen Personen und Unternehmen (Auftragsverarbeitern oder Dritten) offenbaren, sie an diese übermitteln oder ihnen sonst Zugriff auf die Daten gewähren, erfolgt dies nur auf Grundlage einer gesetzlichen Erlaubnis (z.B. wenn eine Übermittlung der Daten an Dritte, wie an Zahlungsdienstleister, gem. Art. 6 Abs. 1 lit. b DSGVO zur Vertragserfüllung erforderlich ist), Sie eingewilligt haben, eine rechtliche Verpflichtung dies vorsieht oder auf Grundlage unserer berechtigten Interessen (z.B. beim Einsatz von Beauftragten, Webhostern, etc.).</Text>
                    <Text>Sofern wir Dritte mit der Verarbeitung von Daten auf Grundlage eines sog. „Auftragsverarbeitungsvertrages“ beauftragen, geschieht dies auf Grundlage des Art. 28 DSGVO.</Text>
                </Section>
                <Section id="transfers-to-third-countries">
                    <SubTitle>Übermittlungen in Drittländer</SubTitle>
                    <Text>Sofern wir Daten in einem Drittland (d.h. außerhalb der Europäischen Union (EU) oder des Europäischen Wirtschaftsraums (EWR)) verarbeiten oder dies im Rahmen der Inanspruchnahme von Diensten Dritter oder Offenlegung, bzw. Übermittlung von Daten an Dritte geschieht, erfolgt dies nur, wenn es zur Erfüllung unserer (vor)vertraglichen Pflichten, auf Grundlage Ihrer Einwilligung, aufgrund einer rechtlichen Verpflichtung oder auf Grundlage unserer berechtigten Interessen geschieht.</Text>
                    <Text>Vorbehaltlich gesetzlicher oder vertraglicher Erlaubnisse, verarbeiten oder lassen wir die Daten in einem Drittland nur beim Vorliegen der besonderen Voraussetzungen der Art. 44 ff. DSGVO verarbeiten. D.h. die Verarbeitung erfolgt z.B. auf Grundlage besonderer Garantien, wie der offiziell anerkannten Feststellung eines der EU entsprechenden Datenschutzniveaus (z.B. für die USA durch das „Privacy Shield“) oder Beachtung offiziell anerkannter spezieller vertraglicher Verpflichtungen (so genannte „Standardvertragsklauseln“).</Text>
                </Section>
                <Section id="rights-of-the-data-subjects">
                    <SubTitle>Rechte der betroffenen Personen</SubTitle>
                    <Text>Sie haben entsprechend. Art. 16 DSGVO das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.</Text>
                    <Text>Sie haben nach Maßgabe des Art. 17 DSGVO das Recht zu verlangen, dass betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe des Art. 18 DSGVO eine Einschränkung der Verarbeitung der Daten zu verlangen.</Text>
                    <Text>Sie haben das Recht zu verlangen, dass die Sie betreffenden Daten, die Sie uns bereitgestellt haben nach Maßgabe des Art. 20 DSGVO zu erhalten und deren Übermittlung an andere Verantwortliche zu fordern.</Text>
                    <Text>Sie haben ferner gem. Art. 77 DSGVO das Recht, eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen.</Text>
                </Section>
                <Section id="right-of-withdrawal">
                    <SubTitle>Widerrufsrecht</SubTitle>
                    <Text>Sie haben das Recht, erteilte Einwilligungen gem. Art. 7 Abs. 3 DSGVO mit Wirkung für die Zukunft zu widerrufen</Text>
                </Section>
                <Section id="right-of-objection">
                    <SubTitle>Widerspruchsrecht</SubTitle>
                    <Text>Sie können der künftigen Verarbeitung der Sie betreffenden Daten nach Maßgabe des Art. 21 DSGVO jederzeit widersprechen.</Text>
                    <Text>Der Widerspruch kann insbesondere gegen die Verarbeitung für Zwecke der Direktwerbung erfolgen.</Text>
                </Section>
                <Section id="cookies-and-right-to-object-to-direct-advertising">
                    <SubTitle>Cookies und Widerspruchsrecht bei Direktwerbung</SubTitle>
                    <Section>
                        <Text>Als „Cookies“ werden kleine Dateien bezeichnet, die auf Rechnern der Nutzer gespeichert werden.</Text>
                        <Text>Innerhalb der Cookies können unterschiedliche Angaben gespeichert werden.</Text>
                        <Text>Ein Cookie dient primär dazu, die Angaben zu einem Nutzer (bzw. dem Gerät auf dem das Cookie gespeichert ist) während oder auch nach seinem Besuch innerhalb eines Onlineangebotes zu speichern.</Text>
                        <Text>Als temporäre Cookies, bzw. „Session-Cookies“ oder „transiente Cookies“, werden Cookies bezeichnet, die gelöscht werden, nachdem ein Nutzer ein Onlineangebot verlässt und seinen Browser schließt.</Text>
                        <Text>In einem solchen Cookie kann z.B. der Inhalt eines Warenkorbs in einem Onlineshop oder ein Login-Status gespeichert werden.</Text>
                        <Text>Als „permanent“ oder „persistent“ werden Cookies bezeichnet, die auch nach dem Schließen des Browsers gespeichert bleiben.</Text>
                        <Text>So kann z.B. der Login-Status gespeichert werden, wenn die Nutzer diese nach mehreren Tagen aufsuchen.</Text>
                        <Text>Ebenso können in einem solchen Cookie die Interessen der Nutzer gespeichert werden, die für Reichweitenmessung oder Marketingzwecke verwendet werden.</Text>
                        <Text>Als „Third-Party-Cookie“ werden Cookies bezeichnet, die von anderen Anbietern als dem Verantwortlichen, der das Onlineangebot betreibt, angeboten werden (andernfalls, wenn es nur dessen Cookies sind spricht man von „First-Party Cookies“).</Text>
                    </Section>
                    <Section>
                        <Text>Wir können temporäre und permanente Cookies einsetzen und klären hierüber im Rahmen unserer Datenschutzerklärung auf.</Text>
                    </Section>
                    <Section>
                        <Text>Falls die Nutzer nicht möchten, dass Cookies auf ihrem Rechner gespeichert werden, werden sie gebeten die entsprechende Option in den Systemeinstellungen ihres Browsers zu deaktivieren.</Text>
                        <Text>Gespeicherte Cookies können in den Systemeinstellungen des Browsers gelöscht werden.</Text>
                        <Text>Der Ausschluss von Cookies kann zu Funktionseinschränkungen dieses Onlineangebotes führen.</Text>
                    </Section>
                    <Section>
                        <Text>Ein genereller Widerspruch gegen den Einsatz der zu Zwecken des Onlinemarketing eingesetzten Cookies kann bei einer Vielzahl der Dienste, vor allem im Fall des Trackings, über die US-amerikanische Seite <Link href="http://www.aboutads.info/choices/" target="_blank">http://www.aboutads.info/choices/</Link> oder die EU-Seite <Link href="http://www.youronlinechoices.com/" target="_blank">http://www.youronlinechoices.com/</Link> erklärt werden.</Text>
                        <Text>Des Weiteren kann die Speicherung von Cookies mittels deren Abschaltung in den Einstellungen des Browsers erreicht werden.</Text>
                        <Text>Bitte beachten Sie, dass dann gegebenenfalls nicht alle Funktionen dieses Onlineangebotes genutzt werden können.</Text>
                    </Section>
                </Section>
                <Section id="data-deletion">
                    <SubTitle>Löschung von Daten</SubTitle>
                    <Section>
                        <Text>Die von uns verarbeiteten Daten werden nach Maßgabe der Art. 17 und 18 DSGVO gelöscht oder in ihrer Verarbeitung eingeschränkt.</Text>
                        <Text>Sofern nicht im Rahmen dieser Datenschutzerklärung ausdrücklich angegeben, werden die bei uns gespeicherten Daten gelöscht, sobald sie für ihre Zweckbestimmung nicht mehr erforderlich sind und der Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</Text>
                        <Text>Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung eingeschränkt.</Text>
                        <Text>D.h. die Daten werden gesperrt und nicht für andere Zwecke verarbeitet.</Text>
                        <Text>Das gilt z.B. für Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen.</Text>
                    </Section>
                    <Section>
                        <Text>Nach gesetzlichen Vorgaben in Deutschland, erfolgt die Aufbewahrung insbesondere für 10 Jahre gemäß §§ 147 Abs. 1 AO, 257 Abs. 1 Nr. 1 und 4, Abs. 4 HGB (Bücher, Aufzeichnungen, Lageberichte, Buchungsbelege, Handelsbücher, für Besteuerung relevanter Unterlagen, etc.) und 6 Jahre gemäß § 257 Abs. 1 Nr. 2 und 3, Abs. 4 HGB (Handelsbriefe).</Text>
                    </Section>
                    <Section>
                        <Text>Nach gesetzlichen Vorgaben in Österreich erfolgt die Aufbewahrung insbesondere für 7 J gemäß § 132 Abs. 1 BAO (Buchhaltungsunterlagen, Belege/Rechnungen, Konten, Belege, Geschäftspapiere, Aufstellung der Einnahmen und Ausgaben, etc.), für 22 Jahre im Zusammenhang mit Grundstücken und für 10 Jahre bei Unterlagen im Zusammenhang mit elektronisch erbrachten Leistungen, Telekommunikations-, Rundfunk- und Fernsehleistungen, die an Nichtunternehmer in EU-Mitgliedstaaten erbracht werden und für die der Mini-One-Stop-Shop (MOSS) in Anspruch genommen wird.</Text>
                    </Section>
                </Section>
                <Section id="contact">
                    <SubTitle>Kontaktaufnahme</SubTitle>
                    <Section>
                        <Text>Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon oder via sozialer Medien) werden die Angaben des Nutzers zur Bearbeitung der Kontaktanfrage und deren Abwicklung gem. Art. 6 Abs. 1 lit. b. (im Rahmen vertraglicher-/vorvertraglicher Beziehungen),  Art. 6 Abs. 1 lit. f. (andere Anfragen) DSGVO verarbeitet.</Text>
                        <Text>Die Angaben der Nutzer können in einem Customer-Relationship-Management System ("CRM System") oder vergleichbarer Anfragenorganisation gespeichert werden.</Text>
                    </Section>
                    <Section>
                        <Text>Wir löschen die Anfragen, sofern diese nicht mehr erforderlich sind.</Text>
                        <Text>Wir überprüfen die Erforderlichkeit alle zwei Jahre; Ferner gelten die gesetzlichen Archivierungspflichten.</Text>
                    </Section>
                </Section>
                <Section id="hosting-and-emailing">
                    <SubTitle>Hosting und E-Mail-Versand</SubTitle>
                    <Text>Die von uns in Anspruch genommenen Hosting-Leistungen dienen der Zurverfügungstellung der folgenden Leistungen: Infrastruktur- und Plattformdienstleistungen, Rechenkapazität, Speicherplatz und Datenbankdienste, E-Mail-Versand, Sicherheitsleistungen sowie technische Wartungsleistungen, die wir zum Zwecke des Betriebs dieses Onlineangebotes einsetzen.</Text>
                    <Text>Hierbei verarbeiten wir, bzw. unser Hostinganbieter Bestandsdaten, Kontaktdaten, Inhaltsdaten, Vertragsdaten, Nutzungsdaten, Meta- und Kommunikationsdaten von Kunden, Interessenten und Besuchern dieses Onlineangebotes auf Grundlage unserer berechtigten Interessen an einer effizienten und sicheren Zurverfügungstellung dieses Onlineangebotes gem. Art. 6 Abs. 1 lit. f DSGVO i.V.m. Art. 28 DSGVO (Abschluss Auftragsverarbeitungsvertrag).</Text>
                    <Text>Wir setzen ein "Content-Delivery-Network" (CDN) ein. Ein CDN ist ein Dienst, mit dessen Hilfe Inhalte eines Onlineangebotes, insbesondere große Mediendateien, wie Grafiken oder Programm-Skripte, mit Hilfe regional verteilter und über das Internet verbundener Server schneller und sicherer ausgeliefert werden können.</Text>
                </Section>
                <Section id="collection-of-access-data-and-log-files">
                    <SubTitle>Erhebung von Zugriffsdaten und Logfiles</SubTitle>
                    <Section>
                        <Text>Wir, bzw. unser Hostinganbieter, erhebt auf Grundlage unserer berechtigten Interessen im Sinne des Art. 6 Abs. 1 lit. f. DSGVO Daten über jeden Zugriff auf den Server, auf dem sich dieser Dienst befindet (sogenannte Serverlogfiles).</Text>
                        <Text>Zu den Zugriffsdaten gehören Name der abgerufenen Webseite, Datei, Datum und Uhrzeit des Abrufs, übertragene Datenmenge, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite), IP-Adresse und der anfragende Provider.</Text>
                    </Section>
                    <Section>
                        <Text>Logfile-Informationen werden aus Sicherheitsgründen (z.B. zur Aufklärung von Missbrauchs- oder Betrugshandlungen) für die Dauer von maximal 7 Tagen gespeichert und danach gelöscht.</Text>
                        <Text>Daten, deren weitere Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen Vorfalls von der Löschung ausgenommen.</Text>
                        <Text>Dies setzt immer voraus, dass die Drittanbieter dieser Inhalte, die IP-Adresse der Nutzer wahrnehmen, da sie ohne die IP-Adresse die Inhalte nicht an deren Browser senden könnten</Text>
                        <Text>Die IP-Adresse ist damit für die Darstellung dieser Inhalte erforderlich.</Text>
                        <Text>Wir bemühen uns nur solche Inhalte zu verwenden, deren jeweilige Anbieter die IP-Adresse lediglich zur Auslieferung der Inhalte verwenden.</Text>
                        <Text>Drittanbieter können ferner so genannte Pixel-Tags (unsichtbare Grafiken, auch als "Web Beacons" bezeichnet) für statistische oder Marketingzwecke verwenden.</Text>
                        <Text>Durch die "Pixel-Tags" können Informationen, wie der Besucherverkehr auf den Seiten dieser Website ausgewertet werden. Die pseudonymen Informationen können ferner in Cookies auf dem Gerät der Nutzer gespeichert werden und unter anderem technische Informationen zum Browser und Betriebssystem, verweisende Webseiten, Besuchszeit sowie weitere Angaben zur Nutzung unseres Onlineangebotes enthalten, als auch mit solchen Informationen aus anderen Quellen verbunden werden.</Text>
                    </Section>
                </Section>
                <Section id="cdn">
                    <SubTitle>Content-Delivery-Network</SubTitle>
                    <Text>Anbieter ist die CloudFlare, Inc. 665 3rd St. #200, San Francisco, CA 94107, USA. CloudFlare bietet ein weltweit verteiltes Content Delivery Network mit DNS an.</Text>
                    <Text>Technisch wird der Informationstransfer zwischen Ihrem Browser und unserer Website über das Netzwerk von CloudFlare geleitet.</Text>
                    <Text>CloudFlare ist damit in der Lage, den Datenverkehr zwischen Anwender und unseren Webseiten zu analysieren, um beispielsweise Angriffe auf unsere Dienste zu erkennen und abzuwehren.</Text>
                    <Text>Zudem speichert CloudFlare zur Optimierung und Analyse unter Umständen Cookies auf Ihrem Rechner.</Text>
                    <Text>Dies dient der Wahrung unserer im Rahmen einer Interessensabwägung überwiegenden berechtigten Interessen an einer optimalen Vermarktung unseres Angebots gemäß Art. 6 Abs. 1 S. 1 lit. b DSGVO. Wir haben mit Cloudflare auf Basis der DSGVO eine entsprechende Vereinbarung zur Auftragsverarbeitung abgeschlossen.</Text>
                    <Text>Cloudflare ist zertifizierter Teilnehmer des EU-US Privacy Shield Frameworks. Cloudflare hat sich dazu verpflichtet, sämtliche von Mitgliedstaaten der Europäischen Union (EU) enthaltenen personenbezogenen Daten gemäß dem Privacy Shield Framework entsprechend dessen geltenden Prinzipien handzuhaben.</Text>
                    <Text>Weitere Informationen über das Privacy Shield Framework finden Sie auf der Privacy Shield Liste des US-Handelsministeriums unter https://www.privacyshield.gov.</Text>
                    <Text>Cloudflare erhebt statistische Daten über den Besuch dieser Website. Zu den Zugriffsdaten gehören: Name der abgerufenen Webseite, Datei, Datum und Uhrzeit des Abrufs, übertragene Datenmenge, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite), IP-Adresse und der anfragende Provider.</Text>
                    <Text>Cloudflare verwendet die Protokolldaten für statistische Auswertungen zum Zweck des Betriebs, der Sicherheit und der Optimierung des Angebots.</Text>
                    <Text>Hier finden Sie Informationen zu den dort gesammelten Daten und zu Sicherheit & Datenschutz bei CloudFlare.</Text>
                </Section>
            </Section>
            <Section>
                <BoldText>Quelle: <Link href="https://datenschutz-generator.de" target="_blank">Datenschutz-Generator.de von RA Dr. Thomas Schwenke</Link></BoldText>
            </Section>
        </Container>

    </Page>
);

export default PrivacyPage;