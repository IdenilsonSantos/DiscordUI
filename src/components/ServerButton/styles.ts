import styled from 'styled-components';

import { Props } from '.'

export const Button = styled.button<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    width: 48px;
    height: 48px;
    border-radius: 50%;

    margin-bottom: 8px;

    background-color: ${(props) => props.isHome ? 'var(--rocketseat)' : 'var(--primary)'};

    position: relative;
    cursor: pointer;

    > img {
        width: 24px;
        height: 24px;
    }

    &::before {
        width: 7px;
        height: 8px;

        position: absolute;
        left: -15px;
        top: calc(50% - 4px);

        background-color: var(--white);
        border-radius: 50%;

        content: '';
        display: ${(props) => props.hasNotifications ? 'inline' : 'none'}
    }

    &::after {
        background-color: var(--notification);
        width: auto;
        height: 16px;

        padding: 0 4px;
        position: absolute;
        bottom: -4px;
        right: -4px;

        border-radius: 12px;
        border: 4px solid var(--quaternary);
        font-size: 14px;
        font-weight: bold;
        color: var(--white);

        content: '${(props) => props.mentions && props.mentions}';
        display: ${(props) => props.mentions && props.mentions > 0 ? 'inline' : 'none'}
    }


    transition: border-radius .2s, background-color .2s;

    &:active, &:hover {
        border-radius: 16px;
        background-color: ${(props) => props.isHome ? 'var(--rocketseat)' : 'var(--discord)'};
    }
`;
