import React from 'react';

import Head from 'next/head';

import Text from '../components/text';
import Label from '../components/label';
import SmallTitle from '../components/smalltitle';
import Title from '../components/title';
import Link from '../components/link';

import { FadeInSection } from '../components/section';

import social from '../../social.json';

import styled from 'styled-components';

import email from '../../util/mail';

const MainTitle = styled(Title)`
font-family: 'Inter', var(--font-family);
font-weight: 900;
font-size: 4.5rem;
text-rendering: optimizeLegibility;
font-kerning: normal;
font-feature-settings: 'kern', 'liga', 'clig', 'calt';
-webkit-font-smoothing: antialiased;
user-select: none;
color: #000000;
`;

const MainSection = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const MainTitleWrapper = styled.div`
text-align: center;
transition: transform 300ms ease 0s;
z-index: 1;
&:hover {
    transform: scale(0.95);
    transition: transform 300ms ease 0s;
}
`;

const MainSubTitle = styled.h2`
font-family: var(--font-family);
font-weight: 800;
font-size: 3.5rem;
text-rendering: optimizeLegibility;
font-kerning: normal;
font-feature-settings: 'kern', 'liga', 'clig', 'calt';
-webkit-font-smoothing: antialiased;
user-select: none;
color: #111111;
`;

const MainSocialContainer = styled.div`
margin: 75px 0;
`;

const SocialIcon = styled.a<{ color: string }>`
margin: 0px 7.5px;
svg {
    color: #757575;
    transition: color 300ms;
    width: 32px;
    height: 32px;
    &:hover {
        cursor: pointer;
        color: ${({ color }: { color: string }) => color};
        transition: color 300ms;
    }
}
`;

const FeaturesSection = styled(FadeInSection)`
width: 100%;
min-height: 600px;
margin: 0 0 150px 0;
background: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const FeaturesContainer = styled.div`
width: 100%;
max-width: 1200px;
@media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:nth-child(odd) {
        margin-left: unset;
    }
}
`;

const Feature = styled.div`
width: clamp(0px, 500px, 95%);
margin: 25px;
padding: 20px 40px;
border: none;
border-radius: 12px;
min-height: 150px;
background: #FFFFFF;
box-shadow: 0 22px 45px 0 rgba(0, 0, 0, 0.11);
@media only screen and (min-width: 800px) {
    margin: 50px;
    &:nth-child(even) {
        margin-left: auto;
    }
}
`;

const IndexPage: React.FunctionComponent = (): React.ReactElement => (
    <div>

        <Head>
            
            <title>Steven Krahforst</title>

            <meta name="robots" content="none" />
            <meta name="googlebot" content="index,noarchive,noimageindex" />

            <meta name="description" content="Webseite von Steven Krahforst" />
            <meta name="image" content="/icon.svg" />

            <meta property="og:title" content="Steven Krahforst Webseite" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://krahforst.dev/privacy" />
            <meta property="og:image" content="/icon.svg" />
            <meta property="og:description" content="Webseite von Steven Krahforst" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Steven Krahforst Webseite" />
            <meta name="twitter:description" content="Webseite von Steven Krahforst" />
            <meta name="twitter:image" content="/icon.svg" />

            <link rel="alternate" href="https://krahforst.dev/" hrefLang="de" title="Deutsch" />

        </Head>

        <MainSection>
            <MainTitleWrapper>
                <MainTitle
                    // initial={{ scale: 0.8, opacity: 0 }}
                    // animate={{ scale: 1, opacity: 1 }}
                    // layoutId="title"
                >Hello 👋</MainTitle>
                <MainSubTitle>I'm Steven</MainSubTitle>
            </MainTitleWrapper>
            <MainSocialContainer>
                <SocialIcon href={social.discord} aria-label="Discord" target="_blank" rel="noreferrer" color="#7289DA">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M32.363,36.118L35.188,40c1.938-0.062,9.25-1.5,11.812-6c0-9.59-4.167-20.76-6-22.453C37.211,8.502,31,8,31,8s-0.495,1.103-0.626,2.476" />
                        <path d="M31.5 22A3.5 4 0 1 0 31.5 30 3.5 4 0 1 0 31.5 22zM19.626 10.476C19.495 9.103 19 8 19 8s-6.211.502-10 3.547C7.167 13.24 3 24.41 3 34c2.562 4.5 9.875 5.938 11.812 6l2.825-3.882" />
                        <path d="M10.513 32.759c0 0 4.8 4.241 14.487 4.241s14.487-4.241 14.487-4.241M38.051 13.428C33.14 10.382 27.122 10 25 10s-8.14.382-13.051 3.428M18.5 22A3.5 4 0 1 0 18.5 30 3.5 4 0 1 0 18.5 22z" />
                    </svg>
                </SocialIcon>
                <SocialIcon href={social.steam} aria-label="Steam" target="_blank" rel="noreferrer" color="#13386C">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 128 128" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M55 97c-.8 0-1.6-.2-2.4-.5L8.7 77.2c-3-1.3-4.4-4.9-3.1-7.9 1.3-3 4.9-4.4 7.9-3.1l43.9 19.2c3 1.3 4.4 4.9 3.1 7.9-1 2.4-3.2 3.7-5.5 3.7z" />
                        <path d="M73 91c0-9.9-8.1-18-18-18l-1.1.1L72 50v-1c0-13.8 11.2-25 25-25s25 11.2 25 25-11.2 25-25 25h-1c-7.2 5.7-16.2 12.8-23.1 18.2-.5 9.3-8.3 16.8-17.9 16.8-5.6 0-10.6-2.5-13.9-6.5" />
                        <path d="M55 97c-.8 0-1.6-.2-2.4-.5L8.7 77.2c-3-1.3-4.4-4.9-3.1-7.9 1.3-3 4.9-4.4 7.9-3.1l43.9 19.2c3 1.3 4.4 4.9 3.1 7.9-1 2.4-3.2 3.7-5.5 3.7z" />
                        <circle cx="97" cy="49" fill="none" r="14" />
                    </svg>
                </SocialIcon>
                <SocialIcon href={social.github} aria-label="GitHub" target="_blank" rel="noreferrer" color="#000000">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                </SocialIcon>
                <SocialIcon href={social.twitter} aria-label="Twitter" target="_blank" rel="noreferrer" color="#1DA1F2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                </SocialIcon>
                <SocialIcon href={social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer" color="#C13584">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                </SocialIcon>
                <SocialIcon href={social.twitch} aria-label="Twitch" target="_blank" rel="noreferrer" color="#6441A4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
                    </svg>
                </SocialIcon>
                { typeof window !== 'undefined' && (<SocialIcon href={typeof window !== undefined ? `mailto:${email}` : null} aria-label="E-Mail" target="_blank" rel="noreferrer" color="#D44638">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                    </svg>
                </SocialIcon>) }
            </MainSocialContainer>
        </MainSection>

        <FeaturesSection observerInit={{
            rootMargin: '0px 0px 500px 0px'
        }}>
            <FeaturesContainer>
                <Feature>
                    <SmallTitle>🔒 Privacy-focused</SmallTitle>
                    <Text>I do not collect personal data unless under voluntary input of the data and the consent of the user of the <Link href="/privacy">privacy policy</Link> (Only in German).</Text>
                </Feature>
                <Feature>
                    <SmallTitle>💰 Completely free, without advertising</SmallTitle>
                    <Text>I don't earn a single cent from my services, as I don't display ads or charge money.</Text>
                </Feature>
                <Feature>
                    <SmallTitle>🎨 Modern as possible</SmallTitle>
                    <Text>I use the latest technologies and try to design as simple as possible.</Text>
                </Feature>
                <Feature>
                    <SmallTitle>🔐 Best possible safety</SmallTitle>
                    <Text>I ensure that all data and connections are fully encrypted.</Text>
                    <Label>* In the database, not all information such as ID's cannot be encrypted, otherwise functionality cannot be guaranteed.</Label>
                </Feature>
                <Feature>
                    <SmallTitle>💻 With passion</SmallTitle>
                    <Text>I program almost every day and try out the newest and most different things.</Text>
                </Feature>
                <Feature>
                    <SmallTitle>🧒 Young target group</SmallTitle>
                    <Text>I reach a relatively young target group, as I am still young myself.</Text>
                </Feature>
            </FeaturesContainer>
        </FeaturesSection>

    </div>
);

export default IndexPage;