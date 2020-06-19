import React from 'react';
import { ExpandMore } from '@material-ui/icons';

import { Container, Title, ExpandIcon } from './styles';

const ServerName: React.FC = () => {
    return (
        <Container>
            <Title>Servidor do Dev95</Title>
            <ExpandIcon>
                <ExpandMore />
            </ExpandIcon>
        </Container>
    );
}

export default ServerName;