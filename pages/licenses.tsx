import React from 'react';

import styled from 'styled-components';

import Head from 'next/head';

import fs from 'fs';
import path from 'path';

import Page from '@components/page';

import Container from '@components/container';
import { PageTitle } from '@components/title';
import Section from '@components/section';
import Link from '@components/link';
import Text from '@components/text';

const Divider = styled.div`
border-bottom: 1px solid #DDDDDD;
`;

const LicensesPage: React.FunctionComponent<LicensesPageProps> = (props): React.ReactElement => (
    <Page>

        <Head>
            
            <title>Steven Krahforst » 📜 Lizenzen</title>
            
            <meta name="robots" content="none" />
            <meta name="googlebot" content="none" />
            
            <meta name="description" content="Lizenzen von Steven Krahforst's Webseite" />
            <meta name="image" content="/legal.png" />

            <meta property="og:title" content="Steven Krahforst Lizenzen" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://krahforst.dev/licenses" />
            <meta property="og:image" content="/legal.png" />
            <meta property="og:description" content="Lizenzen von Steven Krahforst's Webseite" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Steven Krahforst Lizenzen" />
            <meta name="twitter:description" content="Lizenzen von Steven Krahforst's Webseite" />
            <meta name="twitter:image" content="/legal.png" />

        </Head>

        <Container>
            <PageTitle>📜 Lizenzen</PageTitle>
            <Text>Diese Seite wurde mit Hilfe der Bibliothek "<Link href="https://www.npmjs.com/package/webpack-license-plugin" target="_blank" rel="noopener noreferrer nofollow">webpack-license-plugin</Link>" automatisch erstellt.</Text>
            { props.licenses.map((license: License, index: number): React.ReactElement => {
                
                const url: string = license.repository ? license.repository.includes('github.com') ? license.repository : `https://github.com/${license.repository}` : license.source;

                return (
                    <Section key={license.name}>
                        <Text>Die <Link href="https://de.wikipedia.org/wiki/Programmbibliothek" target="_blank" rel="noopener noreferrer nofollow">Bibliothek</Link> "{ license.name }" wird auf dieser Webseite verwendet. Eine Kopie dieser wurde heruntergeladen von <Link href={url} target="_blank" rel="noopener noreferrer nofollow">{ url }</Link>. Diese Bibliothek enthält folgende Lizenz:</Text>
                        <Text dangerouslySetInnerHTML={{ __html: license.licenseText.split('\n').join('<br />') }} />
                        <Divider />
                    </Section>
                );
                
            }) }
            <Section>
                <Text>Zusätzlich werden Icons von <Link href="https://icons8.com" target="_blank" rel="noopener noreferrer nofollow">Icons8</Link> genutzt. <Link href="https://icons8.com/vue-static/landings/pricing/icons8-license.pdf" target="_blank" rel="noopener noreferrer nofollow">Lizenz von Icons8</Link></Text>
            </Section>
        </Container>

    </Page>
);

interface License {

    name: string
    version: string
    repository: string
    source: string
    license: string
    licenseText: string

}

interface LicensesPageProps {

    licenses: Array<License>

}

export async function getStaticProps(): Promise<{ props: LicensesPageProps }> {
    return {
        props: {
            licenses: JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public', 'licenses.json')).toString()) as Array<License>
        }
    };
}

export default LicensesPage;