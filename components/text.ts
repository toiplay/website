import styled from 'styled-components';

import '@fontsource/inter/500.css';

const Text = styled.p`
font-family: var(--font-family);
font-weight: 500;
font-size: 1.15rem;
text-rendering: optimizeLegibility;
font-kerning: normal;
font-feature-settings: 'kern', 'liga', 'clig', 'calt';
-webkit-font-smoothing: antialiased;
user-select: none;
`;

export const BoldText = styled(Text)`
font-weight: 600;
`;

export default Text;