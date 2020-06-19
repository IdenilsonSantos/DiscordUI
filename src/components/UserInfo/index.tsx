import React from 'react';
import { Mic, Headset, Settings } from '@material-ui/icons';

import { Container, Profile, Avatar, UserData, Icons, MicrophoneIcon, HeadPhoneIcon, SettingsIcon } from './styles';

const UserInfo: React.FC = () => {
    return (
        <Container>
            <Profile>
                <Avatar />
                <UserData>
                    <strong>Idenilson Santos</strong>
                    <span>#9483</span>
                </UserData>
            </Profile>
            <Icons>
                <MicrophoneIcon>
                    <Mic />
                </MicrophoneIcon>
                <HeadPhoneIcon>
                    <Headset />
                </HeadPhoneIcon>
                <SettingsIcon>
                    <Settings />
                </SettingsIcon>
            </Icons>
        </Container>
    );
}

export default UserInfo;