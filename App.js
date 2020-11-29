//import React, { Component } from 'react';
import * as React from 'react';
import { View, ScrollView, Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import './contato';
import Contato from './contato';
import './entrevista';
import Entrevista from './entrevista';
import './discografias';
import Discografias from './discografias';
import Resenha from './resenha';


const estilos = StyleSheet.create(
  {
   container: {
      flex: 1,
      //paddingTop: 30,
      justifyContent: 'flex-end',           
    },

    titulo_principal: {      
      backgroundColor: 'white',     
      alignItems: 'center',
      alignContent: 'center',
    },

    rodape: {
      height: 35,
      backgroundColor: 'black',     
      alignItems: 'center',
      alignContent: 'center',
    },

    textoLogo: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      alignSelf: 'center',
      //paddingTop: 8,
    },
   
    textoRodape: {
      color: 'white',
      fontSize: 14,
      fontWeight: 'bold',
      alignSelf: 'center',
      paddingTop: 8,
    },

     menu: {      
      backgroundColor: 'black',
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      fontSize: 13,  
      alignItems: 'center',           
    },

    conteudo: {
      flex: 1,
      backgroundColor: '#DCDCDC',
      justifyContent: 'flex-start',
    }, 

    titulo:{
      fontSize: 18,
      fontStyle: 'italic',
      fontWeight: 'bold',
      paddingTop: 8,
      paddingBottom: 6,
    },

    subtitulo:{
      fontSize: 14,
      paddingTop: 2,
      paddingBottom: 8,
      alignSelf: 'center', 
    }, 

    imagem:{
      width: 210,
      height: 150,
      alignSelf: 'center',      
    },

    logo:{
      width: 300,
      height: 60,     
    },

    textoBotao: {
      padding: 15,
      color: 'white'
    }, 

  }
);

function TelaInicial({ navigation }) {
    return(
      <View style={estilos.container}> 
        
        <View style={estilos.titulo_principal}>    
          <Image 
            style={estilos.logo}
            source={require('./imagens/Logo.png')}                    
            
          />
        </View>

        <View
            style={{
              borderBottomColor: 'white',
              borderBottomWidth: 0.8,
              paddingTop: 1,
            }}
          /> 

        <View style={estilos.menu}>
            
            <TouchableHighlight underlayColor="orange" onPress={() => navigation.navigate('Discografias')}>            
                <Text style={estilos.textoBotao}>Discografias</Text>                      
            </TouchableHighlight>

            <TouchableHighlight underlayColor="orange" onPress={() => navigation.navigate('Entrevista')}>        
                <Text style={estilos.textoBotao}>Entrevistas</Text>          
            </TouchableHighlight>

            <TouchableHighlight underlayColor="orange" onPress={() => navigation.navigate('Resenha')}>          
                <Text style={estilos.textoBotao}>Resenhas</Text>          
            </TouchableHighlight>

            <TouchableHighlight underlayColor="orange" onPress={() => navigation.navigate('Contato')}>          
                <Text style={estilos.textoBotao}>Contato</Text>          
            </TouchableHighlight>

          </View>

      
      <ScrollView>      
         
          <TouchableOpacity onPress={() => navigation.navigate('Entrevista')}>             
            <Text style={estilos.titulo}> Última entrevista  </Text>
         
            <Image 
                style={estilos.imagem}
                source={require('./imagens/cpm.jpg')}                    
                
              />
            <Text style={estilos.subtitulo}> Entrevista com CPM22 </Text>
          </TouchableOpacity>
         
          <View
              style={{
                borderBottomColor: 'gray',
                borderBottomWidth: 1,
                paddingTop: 6,
              }}
            />

          <TouchableOpacity onPress={() => navigation.navigate('Resenha')}>             
            <Text style={estilos.titulo}> Resenha em destaque  </Text>
         
            <Image 
                style={estilos.imagem}
                source={require('./imagens/acdc.jpg')}                    
                
              />
            <Text style={estilos.subtitulo}> Resenha sobre o ACDC </Text>
          </TouchableOpacity>
          
          <View
            style={{
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
              paddingTop: 6,
            }}
          />  

          <TouchableOpacity onPress={() => navigation.navigate('Contato')}>             
            <Text style={estilos.titulo}> Discografia em destaque  </Text>
         
              <Image 
                style={estilos.imagem}
                source={require('./imagens/legiao_urbana.jpg')}                    
                
              />
            <Text style={estilos.subtitulo}> Discografia do Legião Urbana </Text>
          </TouchableOpacity>
                    
                            
          <View style={estilos.rodape}>    
            <Text style={estilos.textoRodape}>&copy; 2020 Galeria Musical</Text>
          </View>
          

          </ScrollView>

        </View>   
     
      
     
    );
  }

  const Stack = createStackNavigator();

  function MeuApp() {
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tela Inicial">
          <Stack.Screen name="Tela Inicial" component={TelaInicial} />
         
          <Stack.Screen name="Contato" component={Contato} />

          <Stack.Screen name="Entrevista" component={Entrevista} />

          <Stack.Screen name="Discografias" component={Discografias} />
          
          <Stack.Screen name="Resenha" component={Resenha} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }


export default MeuApp;