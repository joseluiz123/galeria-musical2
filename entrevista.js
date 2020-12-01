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

    entrevistas: {
      marginTop: 10,
      alignItems: 'center'
    },

    entrevista: {
      width: 300,
      borderWidth: 2,
      borderColor: '#000',
      backgroundColor: '#fff',
      marginBottom: 20,
    },

    imagens: {
      width: 297,
      height: 300,
    },

    nomeArtista: {
      marginTop: 10,
      marginLeft: 10,
      fontWeight: 'bold',
      fontSize: 20,
      color: '#518969',
      textTransform: 'uppercase'
    },

    descricao: {
      marginLeft: 10,
      marginTop: 10,
      marginBottom: 40
    }

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

            <TouchableHighlight underlayColor="orange" onPress={() => navigation.navigate('Resenha')}>        
                <Text style={estilos.textoBotao}>Resenhas</Text>          
            </TouchableHighlight>

            <TouchableHighlight underlayColor="orange" onPress={() => navigation.navigate('Contato')}>          
                <Text style={estilos.textoBotao}>Contato</Text>          
            </TouchableHighlight>
           
          </View> 

        <ScrollView> 
          {/* Trabalhar aqui */}
          <View style={estilos.entrevistas}>
            <View style={estilos.entrevista}>
              <Image style={estilos.imagens} source={require('./imagens/cpm-entrevista3.jpg')}/>
              <Text style={estilos.nomeArtista}>CPM 22</Text>
              <View style={{ width: 40, height: 10, backgroundColor: '#75d13b', marginLeft: 10 }} />
              <Text style={estilos.descricao}>Por Anderson Nascimento Com mais de 20 anos de estrada a banda paulista CPM22 vive um grande momento artístico....</Text>
            </View>
            
            <View style={estilos.entrevista}>
              <Image style={estilos.imagens} source={require('./imagens/olivia.jpg')}/>
              <Text style={estilos.nomeArtista}>Olivia Genesi</Text>
              <View style={{ width: 40, height: 10, backgroundColor: '#75d13b', marginLeft: 10 }} />
              <Text style={estilos.descricao}>Por Valdir Junior Em meados de 2017, a cantora Olivia Gênesi lançou seu mais novo trabalho, “Amor e Liberdade”,...</Text>
            </View>

            <View style={estilos.entrevista}>
              <Image style={estilos.imagens} source={require('./imagens/marcela-zanette.jpg')}/>
              <Text style={estilos.nomeArtista}>MARCELA ZANETTE</Text>
              <View style={{ width: 40, height: 10, backgroundColor: '#75d13b', marginLeft: 10 }} />
              <Text style={estilos.descricao}>Da Redação: “Esse projeto visa oportunizar o acesso à cultura para pessoas que não costumam frequentar teatros,...</Text>
            </View>

            <View style={estilos.entrevista}>
              <Image style={estilos.imagens} source={require('./imagens/tao-do-trio.jpg')}/>
              <Text style={estilos.nomeArtista}>TAO DO TRIO</Text>
              <View style={{ width: 40, height: 10, backgroundColor: '#75d13b', marginLeft: 10 }} />
              <Text style={estilos.descricao}>Da Redação Elas se lançaram por nada mais nada menos que um CD cantando Caetano Veloso e hoje já somam...</Text>
            </View>

          </View>             

          </ScrollView>

          <View style={estilos.rodape}>    
            <Text style={estilos.textoRodape}>&copy; 2020 Galeria Musical</Text>
          </View>        

        </View>   
    );
  }


export default Entrevista;