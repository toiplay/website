import styled from 'styled-components';

const Button = styled.button`
font-family: var(--font-family);
font-weight: 500;
font-size: 1rem;
text-rendering: optimizeLegibility;
font-kerning: normal;
font-feature-settings: 'kern', 'liga', 'clig', 'calt';
-webkit-font-smoothing: antialiased;
user-select: none;
border: none;
border-radius: 3px;
background: #1952BE;
color: #FFFFFF;
padding: 15px 60px;
transition: 300ms background, 300ms box-shadow;
margin: 25px 0;
max-width: 200px;
align-self: center;
&:hover {
    cursor: pointer;
    background: #1649AB;
    box-shadow: 0 22px 45px 0 rgba(0, 0, 0, 0.11);
    transition: 300ms background, 300ms box-shadow;
}
`;

export default Button;