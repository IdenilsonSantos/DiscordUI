import React from 'react';

import { Container, Separator } from './styles';
import ServerButton from '../ServerButton';

const ServerListBar: React.FC = () => {
    return (
        <Container>
            <ServerButton isHome />

            <Separator />

            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton mentions={30} />
            <ServerButton />
            <ServerButton />
            <ServerButton />

        </Container>
    );
}

export default ServerListBar;