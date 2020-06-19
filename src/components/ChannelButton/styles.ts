import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 5px 7px;
    border-radius: 4px;

    background-color: transparent;

    cursor: pointer;
    transition: background-color .2s;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    > div span {
        margin-left: 10px;
        font-size: 14px;
        color: var(--senary)
    }


    &:active, &:hover {
        background-color: var(--quinary);

        > div span {
            color: var(--white);
        }
    }
`;

export const HashTagIcon = styled.h1`
    font-size: 16px;
    color: var(--gray);
`;

export const AddInviteIcon = styled.button`
    font-size: 12px;
    background: transparent;

    color: var(--symbol);
    cursor: pointer;

    transition: color .2s;

    &:hover {
        color: var(--white)
    }
    
`;

export const SettingsIcon = styled.h1`
    font-size: 12px;
    background: transparent;
    margin-left: 4px;

    color: var(--symbol);
    cursor: pointer;

    transition: color .2s;

    &:hover {
        color: var(--white)
    }
`;