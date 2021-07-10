import styled from 'styled-components';

import '@fontsource/inter/600.css';

import baseText from './base/text';

const Link = styled.a`
${baseText}
font-weight: 600;
font-size: 1.15rem;
text-decoration: none;
color: #1952BE;
`;

export default Link;