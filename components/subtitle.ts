import styled from 'styled-components';

import '@fontsource/inter/700.css';

const SubTitle = styled.h2`
font-family: var(--font-family);
font-weight: 800;
font-size: 2.5rem;
text-rendering: optimizeLegibility;
font-kerning: normal;
font-feature-settings: 'kern', 'liga', 'clig', 'calt';
-webkit-font-smoothing: antialiased;
user-select: none;
word-break: break-word;
hyphens: auto;
color: #111111;
`;

export const CenteredSubTitle = styled(SubTitle)`
text-align: center;
`;

export default SubTitle;