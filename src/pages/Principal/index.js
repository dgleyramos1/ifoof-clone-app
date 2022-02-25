import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, Alert, ActivityIndicater } from 'react-native';

import { SafeAreaView, Image, View, ButtonContainer } from './style.js';

import { Text } from 'react-native';
import banner from '../../assets/img/banner.png';
import Button from '../../components/Button';


export default function Principal() {

  const [banners, setBanners] = useState([])
  const [categorias, setCategorias] = useState([])
  const [restaurantes, setRestaurantes] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [tipo, setTipo] = useState('Entrega');

  useEffect(() => {


    async function buscaDados() {

      try {

        const response = await fetch('http://my-json-server.typicode.com/pablohdev/app-ifood-clone/db');

        const data = await response.json();


        setLoaded(true)


        setBanners(data.banner_principal);
        setCategorias(data.categorias);
        setRestaurantes(data.restaurantes);


      } catch (e) {

        Alert.alert('Erro consultada' + e);

      }

    }

    buscaDados()


  }, [])
  return (
    <>
      <StatusBar style='theme-dark' />
      <SafeAreaView>
      </SafeAreaView>
    
    </>
  );
}

