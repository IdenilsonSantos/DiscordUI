import React from 'react';
import { Add } from '@material-ui/icons'

import { Container, Category, AddCategoryIcon } from './styles';
import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon>
                    <Add />
                </AddCategoryIcon>
            </Category>

            <ChannelButton channelName="lol" />
            <ChannelButton channelName="gta" />
            <ChannelButton channelName="brawl stars" />
        </Container>
    );
}

export default ChannelList;