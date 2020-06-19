import styled from 'styled-components';

export const Container = styled.div`
    grid-area: UL;
    display: flex;
    flex-direction: column;
    background-color: var(--secondary);

    padding: 3px 6px 0 16px;

    max-height: calc(100vh - 46px);

    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--tertiary);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
        background-color: var(--secondary)
    }
`;

export const Role = styled.div`
    margin-top: 8px;

    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500px;
    color: var(--gray);
`;

export const User = styled.div`
    display: flex;
    align-items: center;

    cursor: pointer;

    margin-top: 5px;
    padding: 5px;

    border-radius: 4px;

    background: transparent;

    transition: background .2s;

    &:hover {
        background: rgba(255,255,255, 0.1)
    }

    > strong {
        margin-left: 12px;
        font-weight: 500;
        color: var(--white);
        opacity: 0.7;

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    > span {
        margin-left: 10px;
        padding: 5px;

        background-color: var(--discord);
        color: var(--white);
        font-size: 11px;
        font-weight: 500;
        text-transform: uppercase;

        border-radius: 4px;
    }
`;

export const Avatar = styled.div`
    flex-shrink: 0;

    width: 32px;
    height: 32px;
    border-radius: 50%;

    background-color: var(--primary);

    &.bot {
        background-color: var(--mention-detail)
    }
`;