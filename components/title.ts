import styled from 'styled-components';

import { motion } from 'framer-motion';

import '@fontsource/inter/900.css';

const Title = styled(motion.h1)`
font-family: var(--font-family);
font-weight: 900;
font-size: 3.5rem;
text-rendering: optimizeLegibility;
font-kerning: normal;
font-feature-settings: "kern", "liga", "clig", "calt";
-webkit-font-smoothing: antialiased;
user-select: none;
@media screen and (max-width: 800px) {
    font-size: 3rem;
}
`;

export const CenteredTitle = styled(Title)`
text-align: center;
`;

export const PageTitle = styled(CenteredTitle)`
margin-bottom: 100px;
word-break: break-word;
hyphens: auto;
`;

export default Title;