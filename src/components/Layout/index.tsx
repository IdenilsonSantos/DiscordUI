import React from 'react';

import { Grid } from './styles';
import ServerListBar from '../ServerListBar'
import ServerName from '../ServerName';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';

const Layout: React.FC = () => {
    return (
        <Grid>
            <ServerListBar />
            <ServerName />
            <ChannelInfo />
            <ChannelList />
            <UserInfo />
        </Grid>
    );
}

export default Layout;