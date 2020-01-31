import React from 'react';
import logo from '../../assets/Nubank_Logo.png';
import { Container, Top, Logo, Title } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header({open}) {

  return (
    <Container>
        <Top>
            <Logo source={logo}></Logo>
            <Title>Josias</Title>
            
        </Top>
        <Icon name="keyboard-arrow-down" size={20} color="#fff"></Icon>
    </Container>
  );
}
