import styled from 'styled-components';

const ListItem = styled.div`
padding: 15px 25px;
border: 1px solid #EBEBEB;
border-radius: 5px;
`;

export const ListItemFlex = styled(ListItem)`
display: flex;
align-items: center;
`;

export const ListItemIcon = styled.img`
height: 24px;
width: 32px;
margin-left: auto;
border-radius: 5px;
overflow: hidden;
svg {
    width: 100%;
}
`;

export default ListItem;