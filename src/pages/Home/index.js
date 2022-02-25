import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Image, View, ButtonContainer } from './style.js';

import { Text } from 'react-native';
import banner from '../../assets/img/banner.png';
import Button from '../../components/Button';


export default function Home() {
  return (
    <>
      <StatusBar style='theme-dark' />
      <SafeAreaView>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Pedir comida nunca foi tão fácil</Text>
          <Image source={banner}/>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Permitir localização</Text> 
          <Text>Para descobrir restaurantes que entregam em sua região</Text> 
        </View>
        <ButtonContainer>
          <Button text="PULAR" onPress={() => {navigation.navigate('Main')}}/>
          <Button theme="primary" text="ENTRAR"/>
        </ButtonContainer>
      </SafeAreaView>
    
    </>
  );
}

