import React from 'react';

import Head from 'next/head';

import Page from '../components/page';

import Container from '../components/container';
import { PageTitle, SecondaryTitle } from '../components/title';
import Section from '../components/section';
import Link from '../components/link';
import Text, { BoldText } from '../components/text';
import Label from '../components/label';

import email from 'util/mail';

const ImprintPage: React.FunctionComponent = (): React.ReactElement => (
    <Page>

        <Head>
            
            <title>Steven Krahforst ยป ๐ Impressum</title>
            
            <meta name="robots" content="none" />
            <meta name="googlebot" content="none" />
            
            <meta name="description" content="Impressum von Steven Krahforst" />
            <meta name="image" content="/legal.png" />

            <meta property="og:title" content="Steven Krahforst Impressum" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://krahforst.dev/imprint" />
            <meta property="og:image" content="/legal.png" />
            <meta property="og:description" content="Impressum von Steven Krahforst" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Steven Krahforst Impressum" />
            <meta name="twitter:description" content="Impressum von Steven Krahforst" />
            <meta name="twitter:image" content="/legal.png" />

        </Head>

        <Container>
            <PageTitle>๐ Impressum</PageTitle>
            { typeof window !== 'undefined' && (
                <React.Fragment>
                    <Section>
                        <SecondaryTitle>Verantwortlicher</SecondaryTitle>
                        <Text>Steven Krahforst</Text>
                    </Section>
                    <Section>
                        <SecondaryTitle>Kontakt</SecondaryTitle>
                        <Text>E-Mail: <Link href={typeof window !== undefined ? `mailto:${email}` : null}>{ email }</Link></Text>
                        <Text>Kontakt-Formular: Aufgrund von Ausnutzung entfernt<Link href="#notice">*</Link></Text>
                    </Section>
                </React.Fragment>
            ) }
            <Section>
                <SecondaryTitle>Haftung fรผr Inhalte</SecondaryTitle>
                <Text>Die Inhalte unserer Seiten wurden mit grรถรter Sorgfalt erstellt. Fรผr die Richtigkeit, Vollstรคndigkeit und Aktualitรคt der Inhalte kรถnnen wir jedoch keine Gewรคhr รผbernehmen.</Text>
                <Text>Als Diensteanbieter sind wir gemรคร ยง 7 Abs.1 TMG fรผr eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.</Text>
                <Text>Nach ยงยง 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, รผbermittelte oder gespeicherte fremde Informationen zu รผberwachen oder nach Umstรคnden zu forschen, die auf eine rechtswidrige Tรคtigkeit hinweisen.</Text>
                <Text>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberรผhrt.</Text>
                <Text>Eine diesbezรผgliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung mรถglich.</Text>
                <Text>Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</Text>
            </Section>
            <Section>
                <SecondaryTitle>Haftung fรผr Links</SecondaryTitle>
                <Text>Unser Angebot enthรคlt Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb kรถnnen wir fรผr diese fremden Inhalte auch keine Gewรคhr รผbernehmen.</Text>
                <Text>Fรผr die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</Text>
                <Text>Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mรถgliche Rechtsverstรถรe รผberprรผft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</Text>
                <Text>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.</Text>
                <Text>Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</Text>
            </Section>
            <Section>
                <SecondaryTitle>Urheberrecht</SecondaryTitle>
                <Text>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.</Text>
                <Text>Die Vervielfรคltigung, Bearbeitung, Verbreitung und jede Art der Verwertung auรerhalb der Grenzen des Urheberrechtes bedรผrfen der schriftlichen Zustimmung des jeweiligen Autors bzw.</Text>
                <Text>Erstellers. Downloads und Kopien dieser Seite sind nur fรผr den privaten, nicht kommerziellen Gebrauch gestattet.</Text>
                <Text>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.</Text>
                <Text>Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.</Text>
                <Text>Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</Text>
            </Section>
            <Section>
                <SecondaryTitle>Datenschutz</SecondaryTitle>
                <Text>Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten mรถglich.</Text>
                <Text>Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit mรถglich, stets auf freiwilliger Basis.</Text>
                <Text>Diese Daten werden ohne Ihre ausdrรผckliche Zustimmung nicht an Dritte weitergegeben.</Text>
                <Text>Wir weisen darauf hin, dass die Datenรผbertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslรผcken aufweisen kann.</Text>
                <Text>Ein lรผckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht mรถglich.</Text>
                <Text>Der Nutzung von im Rahmen der Impressumspflicht verรถffentlichten Kontaktdaten durch Dritte zur รbersendung von nicht ausdrรผcklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrรผcklich widersprochen.</Text>
                <Text>Die Betreiber der Seiten behalten sich ausdrรผcklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.</Text>
                <Text>Weitere Informationen zum Datenschutz gibt es in der <Link href="/privacy">Datenschutzerklรคrung</Link>.</Text>
            </Section>
            <Section>
                <Label id="notice"><strong style={{ color: '#EA5557' }}>*</strong> Das Impressum sollte eigentlich nicht nรถtig sein, da ich <em>(fรผr mich eindeutig)</em> kein Geld mit meinen Seiten und Diensten verdiene und deshalb sind keine Telefonnummer und keine Adresse angegeben. Ich mรถchte mich, meine Familie und meine Freunde damit schรผtzen, falls irgendwelche <Link href="https://de.wikipedia.org/wiki/Troll_(Netzkultur)" target="_blank">"Trolle"</Link> mir z.B. eine Pizza zu meiner Adresse schicken oder sogar etwas schlimmeres tun wรผrden. Bitte respektieren Sie das.</Label>
            </Section>
            <Section>
                <BoldText><Link href="https://www.impressum-generator.de" target="_blank">impressum-generator.de</Link></BoldText>
            </Section>
        </Container>

    </Page>
);

export default ImprintPage;