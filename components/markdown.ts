import styled from 'styled-components';

import '@fontsource/fira-code/500.css';

import '@fontsource/inter/900.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/500.css';

import 'prism-themes/themes/prism-vsc-dark-plus.css';

const Markdown = styled.article`
font-family: var(--font-family);
font-size: 1.2rem;
text-rendering: optimizeLegibility;
font-kerning: normal;
font-feature-settings: 'kern', 'liga', 'clig', 'calt';
-webkit-font-smoothing: antialiased;
h1 {
    font-weight: 900;
    font-size: 2.5rem;
}
h2 {
    font-weight: 800;
    font-size: 1.75rem;
}
h3 {
    font-weight: 700;
    font-size: 1.5rem;
}
p {
    margin: 10px 0;
    font-weight: 400;
    color: #000000;
}
a {
    font-weight: 400;
    color: #1952BE;
}
strong {
    font-weight: 700;
    font-size: 1.25rem;
}
blockquote {
    display: flex;
    margin: 20px 0;
    min-height: 32px;
    border: none;
    border-left: 3px solid #757575;
    padding-left: 20px;
    align-items: center;
    > p {
        font-size: 1.25rem;
    }
}
code {
    font-family: 'Fira Code', var(--font-family);
    font-weight: 500;
    font-size: 1rem;
}
*:not(pre) > code {
    padding: .2em .4em;
    border: none;
    border-radius: 5px;
    background: #EEEEEE;
    line-height: 2;
}
pre {
    border: none;
    border-radius: 5px;
    padding: 16px;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
    th, td {
        border: 1px solid #CCCCCC;
        padding: 6px 13px;
    }
}
`;

export default Markdown;