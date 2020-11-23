import React, { Component } from 'react';
import { View, ScrollView, Button, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, Image } from 'react-native';


const estilos = StyleSheet.create(
  {
   container: {
      flex: 1,      
      justifyContent: 'flex-end',           
    },

    titulo_principal: {      
      backgroundColor: 'white',     
      alignItems: 'center',
      alignContent: 'center',
    },

    textoLogo: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      alignSelf: 'center',
      paddingTop: 8,

    },

    rodape: {
      height: 35,
      backgroundColor: 'black',     
      alignItems: 'center',
      alignContent: 'center',
      marginTop: 20,
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

    logo:{
      width: 300,
      height: 60,
    },

    textoBotao: {
      padding: 15,
      color: 'white'
    }, 

    inputTexto: {
      height: 35,
      width: 250,
      backgroundColor: 'white',
      borderColor: 'black',
      borderWidth: 1,
      color: 'black',
      marginLeft: 10,
      margin: 10,
      padding: 6,
    },  

    inputTextArea: {
      width: 320,
      backgroundColor: 'white',
      borderColor: 'black',
      borderWidth: 1,
      color: 'black',
      marginLeft: 10,
      margin: 10,
      padding: 6,
    },

    label: {
      fontSize: 18,
      marginLeft: 10,
      fontWeight: 'bold',
    },

  }
);

const Entrevista = ({ navigation }) => { 
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
            
          <TouchableHighlight underlayColor="orange"  onPress={() => navigation.popToTop()}> 
                <Text style={estilos.textoBotao}>Início</Text>          
            </TouchableHighlight>

            <TouchableHighlight underlayColor="orange" onPress={() => navigation.navigate('Discografias')}>            
                <Text style={estilos.textoBotao}>Discografias</Text>                      
            </TouchableHighlight>

            <TouchableHighlight underlayColor="orange" onPress={() => navigation.popToTop()}>        
                <Text style={estilos.textoBotao}>Resenhas</Text>          
            </TouchableHighlight>

            <TouchableHighlight underlayColor="orange" onPress={() => navigation.navigate('Contato')}>          
                <Text style={estilos.textoBotao}>Contato</Text>          
            </TouchableHighlight>
           
          </View> 

        <ScrollView> 
          
          <Text style={{fontSize: 16,
            margin: 10,
            fontStyle: 'italic',
            }}>Para maiores informações sobre o site, anúncios, pautas diversas, envio de materiais, envio de resenhas, promoções, parcerias, divulgação de artistas independentes, colaboração, críticas e etc... Envie-nos um e-mail  </Text>

          <Text style={estilos.label}>Nome:</Text>
          <TextInput
           style={estilos.inputTexto}          
          />

          <Text style={estilos.label}>Email:</Text>
          <TextInput
           style={estilos.inputTexto}      
           keyboardType='email-address'    
          />

          <Text style={estilos.label}>Assunto:</Text>
          <TextInput
           style={estilos.inputTexto}          
          />

          <Text style={estilos.label}>Mensagem:</Text>
          <TextInput
            style={estilos.inputTextArea}          
            multiline={true}
            numberOfLines={5}        
          />
               
          <Button
            title="Enviar"
            onPress={() => alert('Email enviado')} 
          />

          <View style={estilos.rodape}>    
            <Text style={estilos.textoRodape}>&copy; 2020 Galeria Musical</Text>
          </View>          

          </ScrollView>

        </View>   
    );
  }


export default Entrevista;