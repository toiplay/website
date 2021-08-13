import styled from 'styled-components';

import '@fontsource/inter/600.css';

const Strong = styled.strong`
display: inline;
font-family: var(--font-family);
/* font-weight: 600; */
/* font-size: 1.15rem; */
text-rendering: optimizeLegibility;
font-kerning: normal;
font-feature-settings: 'kern', 'liga', 'clig', 'calt';
-webkit-font-smoothing: antialiased;
user-select: none;
`;

export default Strong;