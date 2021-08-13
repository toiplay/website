import React from 'react';

import styled from 'styled-components';

import Head from 'next/head';

import Page from '@components/page';

import { CenteredTitle } from '@components/title';
import Container from '@components/container';

const ErrorPageContainer = styled(Container)`
/* position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%); */
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100vw;
min-height: calc(100vh - 100px - 200px);
`;

const ErrorPage: React.FunctionComponent = (props): React.ReactElement => (
    <Page>

        <Head>
            <title>Steven Krahforst » Seite nicht gefunden</title>
            <meta name="robots" content="none" />
            <meta name="googlebot" content="none" />
            <meta name="description" content="Diese Seite wurde nicht gefunden" />
        </Head>

        <ErrorPageContainer>
            <CenteredTitle>Seite existiert nicht</CenteredTitle>
        </ErrorPageContainer>

    </Page>
);

export default ErrorPage;