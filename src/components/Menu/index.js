import React from 'react';
import { View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Code , Nav, NavItem, NavText,
SignOutButton, SignOutButtonText} from './styles';

export default function Menu({translateY}) {
  return (
    <Container style={{
        opacity: translateY.interpolate({
          inputRange: [0,150],
          outputRange: [0,1]
        })
      }}>
      <Code>
          <QRCode
            value="https://josiaspereira.com.br"
            size={60}
            //backgroundColor= "#fff"
            //logoBackgroundColor= "#333"
            color="#8b10ae"
          />
      </Code>

      <Nav>
          <NavItem>
              <Icon name="help-outline" size={20} color="#fff"/>
              <NavText>Me ajuda</NavText>
          </NavItem>
          <NavItem>
              <Icon name="person-outline" size={20} color="#fff"/>
              <NavText>Perfil</NavText>
          </NavItem>
          <NavItem>
              <Icon name="credit-card" size={20} color="#fff"/>
              <NavText>Configurar cartão</NavText>
          </NavItem>
          <NavItem>
              <Icon name="smartphone" size={20} color="#fff"/>
              <NavText>Configuração do app</NavText>
          </NavItem>
      </Nav>
      <SignOutButton onPress={()=>{}}>
        <SignOutButtonText>
            Sair do app
        </SignOutButtonText>     
      </SignOutButton>
    </Container>
  ); 
}
