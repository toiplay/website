import styled from 'styled-components';

import '@fontsource/inter/500.css';

const Label = styled.label`
font-family: var(--font-family);
font-weight: 500;
font-size: 0.95rem;
text-rendering: optimizeLegibility;
font-kerning: normal;
font-feature-settings: 'kern', 'liga', 'clig', 'calt';
-webkit-font-smoothing: antialiased;
user-select: none;
`;

export default Label;