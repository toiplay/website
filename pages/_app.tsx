import React, { useEffect, useState } from 'react';

import '../styles/globals.scss';

import styled, { css } from 'styled-components';

import Link from '@components/link';

const Navbar = styled.nav<{ top: boolean }>`
position: fixed;
left: 0;
top: 0;
right: 0;
bottom: calc(100vh - 80px);
width: 100%;
height: 80px;
background: #FFFFFF;
display: flex;
flex-direction: row;
align-items: center;
transition: 300ms box-shadow;
z-index: 100 !important;
padding: 0 25px;
${({ top }: { top: boolean }) => !top && css`
box-shadow: 0 22px 45px 0 rgba(0, 0, 0, 0.11);
transition: 300ms box-shadow;
`}
@media only screen and (max-width: 800px) {
    justify-content: center;
}
`;

const NavbarLogo = styled.h1`
font-family: var(--font-family);
font-weight: 800;
font-size: 1.2rem;
text-rendering: optimizeLegibility;
font-kerning: normal;
font-feature-settings: 'kern', 'liga', 'clig', 'calt';
-webkit-font-smoothing: antialiased;
user-select: none;
display: flex;
align-items: center;
margin-left: 20px;
color: #363B8C;
@media only screen and (max-width: 800px) {
    display: none;
}
`;

const NavbarLogoImage = styled.img`
width: 32px;
height: 32px;
margin-right: 15px;
`;

const NavbarLinkList = styled.ul`
padding: 0;
list-style-type: none;
@media only screen and (min-width: 800px) {
    margin-left: auto;
}
`;

const NavbarLinkListItem = styled.li`
display: inline;
`;

const NavbarLink = styled(Link)`
font-size: 1rem;
margin: 0 20px;
`;

const Footer = styled.footer`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 100%;
height: 200px;
gap: 15px;
`;

const Application: React.FunctionComponent<any> = ({ Component, pageProps }): React.ReactElement => {
    
    const [ scroll, setScroll ] = useState<number>(0);

    useEffect((): (() => void) => {

        const scrollListener = (): void => setScroll(window.scrollY);

        window.addEventListener('scroll', scrollListener)

        return (): void => window.removeEventListener('scroll', scrollListener);

    }, []);

    useEffect((): void => {
        setScroll(window.scrollY);

    }, []);

    return (
        <React.Fragment>
            <div>
                Sobald du diese Seite betrittst
                </div>
            <Navbar top={scroll === 0}>
                <NavbarLogo>
                    <NavbarLogoImage alt="Logo" src="/icon.svg" />
                    Krahforst
                </NavbarLogo>
                <NavbarLinkList>
                    <NavbarLinkListItem><NavbarLink href="/">Start</NavbarLink></NavbarLinkListItem>
                    <NavbarLinkListItem><NavbarLink href="/status">Status</NavbarLink></NavbarLinkListItem>
                </NavbarLinkList>
            </Navbar>
            <Component {...pageProps} />
            <Footer>
                <Link href="/imprint">Impressum</Link>
                <Link href="/privacy">Datenschutz</Link>
                <Link href="/licenses">Lizenzen</Link>
            </Footer>
        </React.Fragment>
    );
}

export default Application