import styled from 'styled-components';

import '@fontsource/inter/900.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/700.css';

const Title = styled.h1`
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

export const SecondaryTitle = styled(Title)`
font-weight: 800;
font-size: 2.5rem;
`;

export const CenteredSecondaryTitle = styled(SecondaryTitle)`
text-align: center;
`;

export const TertiaryTitle = styled(Title)`
font-weight: 800;
font-size: 1.75rem;
`;

export default Title;