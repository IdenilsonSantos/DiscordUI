import React, { useRef, useEffect } from 'react';
import { AlternateEmail } from '@material-ui/icons';
import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage
                        key={n}
                        author="Idenilson Santos"
                        date="21/06/2020"
                        content="Hoje é o meu aniversário!"
                    />
                ))}

                <ChannelMessage
                    author="Diego Fernandes"
                    date="21/06/2020"
                    content={
                        <>
                            <Mention>@Guilherme Rodz</Mention>, me carrega no LoL e CS de novo
              por favor?
            </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversarem #chat-livre" />
                <InputIcon>
                    <AlternateEmail />
                </InputIcon>
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;