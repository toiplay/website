import styled from 'styled-components';

import '@fontsource/inter/700.css';

import baseText from '../base/text';

const SubTitle = styled.h2`
${baseText}
font-weight: 800;
font-size: 2.5rem;
color: #111111;
`;

export const CenteredSubTitle = styled(SubTitle)`
text-align: center;
`;

export default SubTitle;