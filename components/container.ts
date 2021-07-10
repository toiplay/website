import styled from 'styled-components';

const Container = styled.div`
width: 100%;
max-width: 1200px !important;
padding: 25px;
`;

export const CenteredContainer = styled(Container)`
/* position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%); */
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100vw;
min-height: calc(100vh - 100px - 200px);
`;

export const FormContainer = styled(Container)`
max-width: 600px !important;
box-shadow: 0 22px 45px 0 rgba(0, 0, 0, 0.11);
`;

export default Container;