import styled from 'styled-components';

const Container = styled.div`
width: 100%;
max-width: 1200px !important;
padding: 25px;
`;

export const CenteredContainer = styled(Container)`
max-width: 800px !important;
`;

export default Container;