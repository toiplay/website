import { css } from 'styled-components';

const baseText = css`
font-family: var(--font-family);
text-rendering: optimizeLegibility;
font-kerning: normal;
font-feature-settings: 'kern', 'liga', 'clig', 'calt';
-webkit-font-smoothing: antialiased;
user-select: none;
`;

export default baseText;