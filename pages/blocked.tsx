import React from 'react';

import Head from 'next/head';

import fetch from 'node-fetch';

import Page from '@components/page';

import { CenteredContainer } from '@components/container';
import { PageTitle, SecondaryTitle } from '@components/title';
import Section from '@components/section';
import Text from '@components/text';

import countries from 'i18n-iso-countries';
import List from '@components/list';
import { ListItemFlex, ListItemIcon } from '@components/list/item';

countries.registerLocale(require('i18n-iso-countries/langs/de.json'));

// https://github.com/annexare/Countries/blob/master/data/continents.json
const continents: Record<string, string> = {
    AF: 'Afrika',
    AN: 'Antarktis',
    AS: 'Asien',
    EU: 'Europa',
    NA: 'Nord Amerika',
    OC: 'Ozeanien',
    SA: 'Süd Amerika'
};

const BlockedPage: React.FunctionComponent<BlockedPageProps> = (props): React.ReactElement => (
    <Page>

        <Head>
            
            <title>Steven Krahforst » Blockierte Dinge</title>
            
            <meta name="robots" content="none" />
            <meta name="googlebot" content="none" />
            
            <meta name="description" content="Dinge die geblockt wurden" />
            <meta name="image" content="/blocked.png" />

            <meta property="og:title" content="Steven Krahforst Blockierte Dinge" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://krahforst.dev/licenses" />
            <meta property="og:image" content="/blocked.png" />
            <meta property="og:description" content="Dinge die geblockt wurden" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Steven Krahforst Blockierte Dinge" />
            <meta name="twitter:description" content="Dinge die geblockt wurden" />
            <meta name="twitter:image" content="/blocked.png" />

        </Head>

        <CenteredContainer>
            <PageTitle>❌ Blockiert</PageTitle>
            <Section>
                <SecondaryTitle>Blockierte Kontinente</SecondaryTitle>
                <ul>
                    { props.continents.map((continent: string): React.ReactElement => (
                        <li key={continent}>{ continents[continent] }</li>
                    )) }
                </ul>
            </Section>
            <Section>
                <SecondaryTitle>Blockierte Länder</SecondaryTitle>
                <List>
                    { props.countries.map((country: string): React.ReactElement => (
                        <ListItemFlex key={country}>
                            <Text>{ countries.getName(country, 'de', { select: 'official' }) }</Text>
                            <ListItemIcon src={`https://static.krahforst.dev/flags/${country.toLowerCase()}.svg`} />
                        </ListItemFlex>
                    )) }
                </List>
            </Section>
            <Section>
                <SecondaryTitle>Blockierte ASN's</SecondaryTitle>
                <ul>
                    { props.asns.map((asn: number): React.ReactElement => (
                        <li key={asn}>{ asn }</li>
                    )) }
                </ul>
            </Section>
            <Section>
                <SecondaryTitle>Blockierte User-Agent's</SecondaryTitle>
                <ul>
                    { props.user_agents.map((userAgent: string): React.ReactElement => (
                        <li key={userAgent}>"{ userAgent }"</li>
                    )) }
                </ul>
            </Section>
            {/* <Section>
                <SubTitle>Warum?</SubTitle>
                <Text></Text>
            </Section> */}
        </CenteredContainer>
    </Page>
);

interface BlockedPageProps {

    continents: Array<string>
    countries: Array<string>
    asns: Array<number>
    user_agents: Array<string>

}

export async function getStaticProps(): Promise<{ props: BlockedPageProps }> {
    const blocked: BlockedPageProps = await (await fetch('https://api.krahforst.dev/api/bad')).json() as BlockedPageProps;
    return {
        props: blocked
    };
}

export default BlockedPage;