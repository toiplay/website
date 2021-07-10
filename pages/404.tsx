import React from 'react';

import Head from 'next/head';

import Page from '@components/page';

import { CenteredContainer } from '@components/container';
import { CenteredTitle } from '@components/title';

const ErrorPage: React.FunctionComponent = (props): React.ReactElement => (
    <Page>

        <Head>
            <title>Steven Krahforst » Seite nicht gefunden</title>
            <meta name="robots" content="none" />
            <meta name="googlebot" content="none" />
            <meta name="description" content="Diese Seite wurde nicht gefunden" />
        </Head>

        <CenteredContainer>
            <CenteredTitle>Seite existiert nicht</CenteredTitle>
        </CenteredContainer>

    </Page>
);

export default ErrorPage;