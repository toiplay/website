import styled from 'styled-components';

import { motion } from 'framer-motion';

import '@fontsource/inter/900.css';

const Title = styled(motion.h1)`
font-family: 'Inter', var(--font-family);
font-weight: 900;
font-size: 3.5rem;
text-rendering: optimizeLegibility;
font-kerning: normal;
font-feature-settings: "kern", "liga", "clig", "calt";
-webkit-font-smoothing: antialiased;
user-select: none;
`;

export const CenteredTitle = styled(Title)`
text-align: center;
`;

export const PageTitle = styled(CenteredTitle)`
margin-bottom: 100px;
`;

export default Title;