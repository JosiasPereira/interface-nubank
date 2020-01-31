import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import { PanGestureHandler, State} from 'react-native-gesture-handler';

import {Container, Content, Card, CardHeader, CardContent,CardFooter, Annotation, Title, Description,   } from './styles';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

export default function Main(){
  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent:{
          translationY: translateY
        }
      }

    ],
    {
      useNativeDriver: true
    }
  )

  function onHandlerStateChanged(event){
    if(event.nativeEvent.oldState == State.ACTIVE){
      const { translationY } = event.nativeEvent;
      let opened = false;
      offset += translationY;

      if (translationY >= 120){
        opened = true;
      }else{        
        translateY.setValue(offset);
        translateY.setOffset(0);        
        offset = 0;
        
      }

      Animated.timing(translateY, {
        toValue: opened ? 350: 0,
        duration: 200,
        useNativeDriver: true
      }).start(() =>{
        offset = opened ? 350: 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });

      

      
    }
  }
  return (
      <Container >
        <Header />
        <Content>
          <Menu translateY={translateY}/>
          <PanGestureHandler
            onGestureEvent={animatedEvent} 
            onHandlerStateChange={onHandlerStateChanged}
          >

            
            <Card style={{
              transform:[{
                translateY : translateY.interpolate({
                  inputRange:[-350,0,350],
                  outputRange:[-50,0,350],
                  extrapolate: 'clamp'
                })
              }]
            }}>
              <CardHeader>              
                <Icon name="attach-money" size={28} color="#666"/>
                <Icon name="visibility-off" size={28} color="#666"/>
              </CardHeader>
              <CardContent>
                  <Title>Saldo disponível</Title>
                  <Description>R$ 14.487,48</Description>
              </CardContent>
              <CardFooter>
                <Annotation>
                  Transferência de R$ 159,00 recebida de Marcos Araujo hoje as 14:00h
                </Annotation>
              </CardFooter>
            </Card>
          </PanGestureHandler>
        </Content>
        <Tabs translateY={translateY}/>
      </Container>
    
  ) 
}
