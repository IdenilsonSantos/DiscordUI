import styled from 'styled-components';

export const Container = styled.div`
    grid-area: UI;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 12px 0 16px;

    background-color: var(--secondary);

    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
    z-index: 2;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
`;

export const Avatar = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;

    background-color: var(--gray);
`;


export const UserData = styled.div`
    margin-left: 8px;
    display: flex;
    flex-direction: column;

    > strong {
        font-size: 14px;
        display: block;
        color: var(--white)
    }

    > span {
        font-size: 14px;
        color: var(--gray)
    }
`;

export const Icons = styled.div`
    display: flex;
    align-items: center;
    
    > div:not(:first-child){
        margin-left: 10px;
    }
`;

export const MicrophoneIcon = styled.div`
    width: 15px;
    height: 15px;
    color: var(--white);

    opacity: 0.5;
    cursor: pointer;

    transition: opacity 0.2s;

    &:hover {
        opacity: 1
    }
`;

export const HeadPhoneIcon = styled.div`
    width: 15px;
    height: 15px;
    color: var(--white);

    opacity: 0.5;
    cursor: pointer;

    transition: opacity 0.2s;

    &:hover {
        opacity: 1
    }
`;

export const SettingsIcon = styled.div`
    width: 15px;
    height: 15px;
    color: var(--white);

    opacity: 0.5;
    cursor: pointer;

    transition: opacity 0.2s;

    &:hover {
        opacity: 1
    }
`;