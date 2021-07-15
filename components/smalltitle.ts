import styled from 'styled-components';

import '@fontsource/inter/800.css';

const SmallTitle = styled.h3`
font-family: var(--font-family);
font-weight: 800;
font-size: 1.5em;
text-rendering: optimizeLegibility;
font-kerning: normal;
font-feature-settings: 'kern', 'liga', 'clig', 'calt';
-webkit-font-smoothing: antialiased;
user-select: none;
color: #000000;
`;

export default SmallTitle;