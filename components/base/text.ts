import { css } from 'styled-components';

const baseText = css`
font-family: 'Inter', var(--font-family);
text-rendering: optimizeLegibility;
font-kerning: normal;
font-feature-settings: 'kern', 'liga', 'clig', 'calt';
user-select: none;
-webkit-font-smoothing: antialiased;
`;

export default baseText;