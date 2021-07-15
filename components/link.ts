import styled from 'styled-components';

import '@fontsource/inter/600.css';

const Link = styled.a`
font-family: var(--font-family);
font-weight: 600;
font-size: 1.15rem;
text-rendering: optimizeLegibility;
font-kerning: normal;
font-feature-settings: 'kern', 'liga', 'clig', 'calt';
-webkit-font-smoothing: antialiased;
user-select: none;
text-decoration: none;
color: #1952BE;
`;

export default Link;