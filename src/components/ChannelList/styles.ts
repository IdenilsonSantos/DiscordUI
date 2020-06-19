import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CL;

    display: flex;
    flex-direction: column;

    padding: 24px 9.5px 0 16px;

    background-color: var(--secondary);
`;

export const Category = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    > span {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 500;
        color: var(--gray)
    }
`;

export const AddCategoryIcon = styled.button`
    color: var(--gray);
    cursor: pointer;
    background: transparent;

    transition: color 0.2s;

    &:hover {
        color: var(--white)
    }
`;