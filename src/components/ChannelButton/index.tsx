import React from 'react';
import { PersonAdd, Settings } from '@material-ui/icons';

import { Container, HashTagIcon, AddInviteIcon, SettingsIcon } from './styles';

export interface Props {
    channelName?: string;
    selected?: boolean
}

const ChannelButton: React.FC<Props> = ({
    channelName, selected
}) => {
    return (
        <Container className={selected ? 'active' : ''}>
            <div>
                <HashTagIcon>#</HashTagIcon>
                <span>{channelName}</span>
            </div>
            <div>
                <AddInviteIcon>
                    <PersonAdd />
                </AddInviteIcon>
                <SettingsIcon>
                    <Settings />
                </SettingsIcon>
            </div>
        </Container>
    );
}

export default ChannelButton;