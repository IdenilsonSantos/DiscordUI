import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    padding: 0 16px;

    background-color: var(--primary);

    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
    z-index: 2;
`;

export const HashTagIcon = styled.h1`
    font-size: 24px;
    color: var(--symbol);
`;

export const Title = styled.h1`
    margin-left: 10px;
    font-size: 16px;
    font-weight: bold;
    color: var(--white)
`;

export const Separator = styled.div`
    width: 1px;
    height: 24px;

    background: var(--white);
    opacity: 0.2;

    margin: 0 13px;
`;

export const Description = styled.div`
    font-size: 14px;
    color: var(--gray)
`;
