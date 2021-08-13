import React, { useState } from 'react';

import styled, { css } from 'styled-components';

import Head from 'next/head';

import useSWR from 'swr';

import moment from 'moment';

import useInterval from '../hooks/useInterval';

import StatusResponse from '../interfaces/status/response';
import Service from '../interfaces/status/service';
import Incident from '../interfaces/status/incident';

import Status from '../enums/status/status';

import Page from '@components/page';
import { CenteredContainer } from '@components/container';
import { PageTitle, CenteredSecondaryTitle } from '@components/title';
import Text from '@components/text';

import List from '@components/list';
import ListItem, { ListItemFlex } from '@components/list/item';
import ListItemHeader from '@components/list/item/header';
import ListItemFooter from '@components/list/item/footer';

import Skeleton from '@components/skeleton';

// @ts-ignore
import iconOnline from '../assets/status/checkmark.svg';
// @ts-ignore
import iconUnknown from '../assets/status/warn.svg';
// @ts-ignore
import iconOffline from '../assets/status/cross.svg';
// @ts-ignore
import iconPaused from '../assets/status/pause.svg';

const IconOnline = styled(iconOnline)`
width: 24px;
height: 24px;
size: 24px;
`;

const IconUnknown = styled(iconUnknown)`
width: 24px;
height: 24px;
size: 24px;
`;

const IconOffline = styled(iconOffline)`
width: 24px;
height: 24px;
size: 24px;
`;

const IconPaused = styled(iconPaused)`
width: 24px;
height: 24px;
size: 24px;
`;

const StatusInfo = styled(Text)`
font-weight: 700;
font-size: 1.5rem;
text-align: center;
@media (max-width: 600px) {
    text-align: center;
}
`;

const StatusText = styled(Text)`
font-weight: 500;
padding-left: 18px;
max-width: 40%;
`;

const ResponseTimeText = styled(Text)<{ time: number }>`
font-weight: 400;
font-size: 1rem;
margin-left: auto;
margin-right: 20px;
color: ${({ time }: { time: number }) => time <= 50 ? '#2ECC71' : time <= 100 ? '#27AE60' : time <= 250 ? '#F1C40F' : '#E74C3C'};
${({ time }) => time <= 0 && css`
display: none;
`}
`;

const StatusTextRight = styled(Text)<{ time: number }>`
font-weight: 800;
${({ time }: { time: number }) => time <= 0 && css`
margin-left: auto;
`}
`;

const IncidentStatusText = styled(Text)`
margin-left: 16px;
font-weight: 800;
`;

const IncidentDateText = styled(Text)`
margin-left: auto;
font-weight: 700;
`;

const LastRefreshText = styled.label`
font-weight: 400;
font-size: 1rem;
color: #757575;
@media (max-width: 600px) {
    text-align: center;
}
`;

moment.locale('de');

const StatusPage: React.FunctionComponent<StatusResponse> = (): React.ReactElement => {

    const [ lastRefresh, setLastRefresh ] = useState<number>(-1);
    const [ lastRefreshText, setLastRefreshText ] = useState<string>();
    
    const fetcher = (url: string): Promise<StatusResponse> => fetch(url).then((res): Promise<StatusResponse> => {
        setLastRefresh(Math.floor(Date.now() / 1000));
        return res.json();
    });

    const { data, error } = useSWR<StatusResponse>(`https://api.krahforst.dev/status/public`, fetcher);

    useInterval(() => setLastRefreshText(`Zuletzt aktualisiert: ${moment.unix(lastRefresh).fromNow()}`), 1000, lastRefresh > 0);

    const getStatusInfo = (services: Array<Service>): string => {
        const offline: number = services.filter((service: Service): boolean => service.status === Status.DOWN).length;
        if(offline === 1) {
            return 'Es gibt ein Problem 🤨';
        } else if(offline >= 1 && offline <= services.length / 2) {
            return 'Es gibt ein paar Probleme 😒';
        } else if(offline >= services.length / 2) {
            return 'Es sieht Schlecht aus 🤮';
        }
        return 'Es sieht sehr gut aus 👌';
    }

    const getStatusIcon = (status: Status): React.ReactElement => {
        if(status === Status.UP) {
            return <IconOnline />;
        } else if(status === Status.PROBABLY_DOWN || status === Status.CHECKING) {
            return <IconUnknown />;
        } else if(status === Status.DOWN) {
            return <IconOffline />;
        } else if(status === Status.MAINTENANCE) {
            return <IconPaused />
        }
        return null;
    }

    const getStatusText = (status: Status): string => {
        if(status === Status.UP) {
            return 'Online';
        } else if(status === Status.PROBABLY_DOWN || status === Status.CHECKING) {
            return 'Unbekannt';
        } else if(status === Status.DOWN) {
            return 'Offline';
        } else if(status === Status.MAINTENANCE) {
            return 'Wartung';
        }
    }

    const getIncidentReason = (incident: Incident): string => {
        const past: boolean = (incident.timestamp + incident.duration + 300) < Math.floor(Date.now() / 1000);
        if(incident.reason.code === '521') {
            return 'aufgrund einer Offline-Phase des Webservers';
        } else if(incident.reason.code === '502') {
            return 'wegen einer falschen Einstellung des Dienstes bzw. Webservers';
        } else if(incident.reason.code === '404') {
            return `weil der Dienst offline ${past ? 'war' : 'ist'}`;
        } else if(incident.reason.code === '403') {
            return 'aufgrund fehlender Berechtigung zum Abfragen';
        } else {
            return 'aufgrund unbekannter Probleme';
        }
    }

    return (
        <Page>
            
            <Head>

                <title>Steven Krahforst » 🔌 Status</title>

                <meta name="robots" content="none" />
                <meta name="googlebot" content="index,noarchive,noimageindex" />

                <meta name="description" content="Status von Steven Krahforst's Diensten" />
                <meta name="image" content="/status.png" />

                <meta property="og:title" content="Steven Krahforst Status" />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://krahforst.dev/privacy" />
                <meta property="og:image" content="/status.png" />
                <meta property="og:description" content="Status von Steven Krahforst's Diensten" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Steven Krahforst Status" />
                <meta name="twitter:description" content="Status von Steven Krahforst's Diensten" />
                <meta name="twitter:image" content="/status.png" />

            </Head>

            <CenteredContainer>

                <PageTitle>🔌 Status</PageTitle>

                { data ? !! data.success ? (
                    <React.Fragment>

                        <StatusInfo>{ getStatusInfo(data.data) }</StatusInfo>

                        <List>
                            { data.data.map((service: Service): React.ReactElement => (
                                <ListItemFlex key={service.id}>
                                    { getStatusIcon(service.status) }
                                    <StatusText>{ service.name }</StatusText>
                                    <ResponseTimeText time={service.response_time}>{ service.response_time || 0 }ms</ResponseTimeText>
                                    <StatusTextRight time={service.response_time}>{ getStatusText(service.status) }</StatusTextRight>
                                </ListItemFlex>
                            )) }
                        </List>

                        { data.data.length > 0 && ((): boolean => {
                            return data.data.filter((service: Service) => service.incidents.length > 0).length > 0;
                        })() && (
                            <React.Fragment>

                                <CenteredSecondaryTitle>Vorfälle</CenteredSecondaryTitle>

                                <List>
                                    { data.data.map((service: Service) => service.incidents.map((incident: Incident): React.ReactElement => (
                                        <ListItem key={incident.id}>
                                            <ListItemHeader>
                                                <IconOffline />
                                                <IncidentStatusText>{ service.name }</IncidentStatusText>
                                                <IncidentDateText>{ moment.unix(incident.timestamp).fromNow() }</IncidentDateText>
                                            </ListItemHeader>
                                            <ListItemFooter>
                                                <Text>Nicht erreichbar für { moment.unix((Date.now() / 1000) - incident.duration).fromNow(true) } { getIncidentReason(incident) }</Text>
                                            </ListItemFooter>
                                        </ListItem>
                                    ))) }
                                </List>
                                
                            </React.Fragment>
                        ) }

                        <LastRefreshText>{ lastRefreshText }</LastRefreshText>

                    </React.Fragment>
                ) : (
                    <p>Es ist ein unbekannter Fehler aufgetreten</p>
                ) : (
                    <List>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </List>
                ) }

            </CenteredContainer>

        </Page>
    );

}

export default StatusPage;