import React from 'react';

import Head from 'next/head';

import Page from '@components/page';

import Container from '@components/container';
import { PageTitle } from '@components/title';
import Section from '@components/section';
import SubTitle from '@components/title/sub';
import Link from '@components/link';
import Text from '@components/text';
import BoldText from '@components/text/bold';
import Label from '@components/label';

import email from 'util/mail';

const ImprintPage: React.FunctionComponent = (props): React.ReactElement => (
    <Page>

        <Head>
            
            <title>Steven Krahforst » Impressum</title>
            
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
            <PageTitle>Impressum</PageTitle>
            { typeof window !== 'undefined' && (
                <Section>
                    <SubTitle>Kontakt</SubTitle>
                    <Text>E-Mail: <Link href={typeof window !== undefined ? `mailto:${email}` : null}>{ email }</Link></Text>
                </Section>
            ) }
            <Section>
                <SubTitle>Haftung für Inhalte</SubTitle>
                <Text>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</Text>
                <Text>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.</Text>
                <Text>Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</Text>
                <Text>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.</Text>
                <Text>Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.</Text>
                <Text>Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</Text>
            </Section>
            <Section>
                <SubTitle>Haftung für Links</SubTitle>
                <Text>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.</Text>
                <Text>Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</Text>
                <Text>Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</Text>
                <Text>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.</Text>
                <Text>Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</Text>
            </Section>
            <Section>
                <SubTitle>Urheberrecht</SubTitle>
                <Text>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.</Text>
                <Text>Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.</Text>
                <Text>Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</Text>
                <Text>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.</Text>
                <Text>Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.</Text>
                <Text>Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</Text>
            </Section>
            <Section>
                <SubTitle>Datenschutz</SubTitle>
                <Text>Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich.</Text>
                <Text>Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis.</Text>
                <Text>Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.</Text>
                <Text>Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.</Text>
                <Text>Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</Text>
                <Text>Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen.</Text>
                <Text>Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.</Text>
                <Text>Weitere Informationen zum Datenschutz gibt es in der <Link href="/privacy">Datenschutzerklärung</Link>.</Text>
            </Section>
            <Label>* Das Impressum sollte eigentlich nicht nötig sein da ich <em>(für mich eindeutig)</em> kein Geld mit meinen Seiten und Diensten verdiene und deshalb sind keine Telefonnummer und keine Adresse angegeben</Label>
            <Section>
                <SubTitle>Inhalte</SubTitle>
                <Text>Icons von <Link href="https://icons8.com/">Icons8</Link> und <Link href="https://feathericons.com/">FeatherIcons</Link></Text>
            </Section>
            <Section>
                <BoldText>Quelle: <Link href="https://www.impressum-generator.de" target="_blank">impressum-generator.de</Link></BoldText>
            </Section>
        </Container>

    </Page>
);

export default ImprintPage;