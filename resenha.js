import React, { Component } from 'react';
import { View, ScrollView, Button, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


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

    imagens: {
      width: 110,
      height: 110,
      margin: 2
    },

    resenha: {
      flexDirection: 'row',
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
      backgroundColor: '#fff',
      borderBottomWidth: 1
    },

    info: {
      marginTop: 5
    },

    avaliacao: {
      flexDirection: 'row'
    }

  }
);

const Resenha = ({ navigation }) => { 
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

            <TouchableHighlight underlayColor="orange" onPress={() => navigation.navigate('Entrevista')}>        
                <Text style={estilos.textoBotao}>Entrevistas</Text>          
            </TouchableHighlight>

            <TouchableHighlight underlayColor="orange" onPress={() => navigation.navigate('Contato')}>          
                <Text style={estilos.textoBotao}>Contato</Text>          
            </TouchableHighlight>
           
          </View> 

        <ScrollView> 
          {/* Trabalhar aqui */}
          <View style={estilos.resenhas}>
            <View style={estilos.resenha}>
              <View style={{ borderWidth: 2, margin: 5 }}>
                <Image style={estilos.imagens} source={require('./imagens/acdc.jpg')} />
              </View>
              <View style={estilos.info}>
                <Text>2020</Text>
                <Text style={{ color: '#518969', textTransform: 'uppercase', fontWeight: 'bold' }}>Power Up</Text>
                <Text style={{ color: '#518969', textTransform: 'uppercase' }}>AC/DC</Text>
                <Text>Por <Text style={{ color: '#518969' }}>Thaís Sechetin</Text></Text>
                <View style={estilos.avaliacao}>
                  <FontAwesome name="star" size={20} color="#e67e22"/>
                  <FontAwesome name="star" size={20} color="#e67e22"/>
                  <FontAwesome name="star" size={20} color="#e67e22"/>
                  <FontAwesome name="star" size={20} color="#e67e22"/>
                  <FontAwesome name="star" size={20} color="#e67e22"/>
                </View>
                <Text>Publicação: 18/11/2020</Text>
              </View>
            </View>

            <View style={estilos.resenha}>
              <View style={{ borderWidth: 2, margin: 5 }}>
                <Image style={estilos.imagens} source={require('./imagens/labirinto-azul.jpg')} />
              </View>
              <View style={estilos.info}>
                <Text>2020</Text>
                <Text style={{ color: '#518969', textTransform: 'uppercase', fontWeight: 'bold' }}>Labirinto Azul</Text>
                <Text style={{ color: '#518969', textTransform: 'uppercase' }}>Ana Lee</Text>
                <Text>Por <Text style={{ color: '#518969' }}>Anderson Nascimento</Text></Text>
                <View style={estilos.avaliacao}>
                  <FontAwesome name="star" size={20} color="#e67e22"/>
                  <FontAwesome name="star" size={20} color="#e67e22"/>
                  <FontAwesome name="star" size={20} color="#e67e22"/>
                  <FontAwesome name="star" size={20} color="#e67e22"/>
                </View>
                <Text>Publicação: 26/11/2020</Text>
              </View>
            </View>

            <View style={estilos.resenha}>
              <View style={{ borderWidth: 2, margin: 5 }}>
                <Image style={estilos.imagens} source={require('./imagens/2020.jpg')} />
              </View>
              <View style={estilos.info}>
                <Text>2020</Text>
                <Text style={{ color: '#518969', textTransform: 'uppercase', fontWeight: 'bold' }}>2020</Text>
                <Text style={{ color: '#518969', textTransform: 'uppercase' }}>Bon Jovi</Text>
                <Text>Por <Text style={{ color: '#518969' }}>Anderson Nascimento</Text></Text>
                <View style={estilos.avaliacao}>
                  <FontAwesome name="star" size={20} color="#e67e22"/>
                  <FontAwesome name="star" size={20} color="#e67e22"/>
                </View>
                <Text>Publicação: 08/10/2020</Text>
              </View>
            </View>

            <View style={estilos.resenha}>
              <View style={{ borderWidth: 2, margin: 5 }}>
                <Image style={estilos.imagens} source={require('./imagens/eu-nao-existo.jpg')} />
              </View>
              <View style={estilos.info}>
                <Text>2020</Text>
                <Text style={{ color: '#518969', textTransform: 'uppercase', fontWeight: 'bold' }}>Eu não existo</Text>
                <Text style={{ color: '#518969', textTransform: 'uppercase' }}>Branca Lescher</Text>
                <Text>Por <Text style={{ color: '#518969' }}>Anderson Nascimento</Text></Text>
                <View style={estilos.avaliacao}>
                  <FontAwesome name="star" size={20} color="#e67e22"/>
                  <FontAwesome name="star" size={20} color="#e67e22"/>
                  <FontAwesome name="star" size={20} color="#e67e22"/>
                  <FontAwesome name="star" size={20} color="#e67e22"/>
                </View>
                <Text>Publicação: 26/03/2020</Text>
              </View>
            </View>

            <View style={estilos.resenha}>
              <View style={{ borderWidth: 2, margin: 5 }}>
                <Image style={estilos.imagens} source={require('./imagens/briziocd.jpg')} />
              </View>
              <View style={estilos.info}>
                <Text>2020</Text>
                <Text style={{ color: '#518969', textTransform: 'uppercase', fontWeight: 'bold' }}>Brizio</Text>
                <Text style={{ color: '#518969', textTransform: 'uppercase' }}>Brizio</Text>
                <Text>Por <Text style={{ color: '#518969' }}>Anderson Nascimento</Text></Text>
                <View style={estilos.avaliacao}>
                  <FontAwesome name="star" size={20} color="#e67e22"/>
                  <FontAwesome name="star" size={20} color="#e67e22"/>
                  <FontAwesome name="star" size={20} color="#e67e22"/>
                </View>
                <Text>Publicação: 29/07/2020</Text>
              </View>
            </View>

            <View style={estilos.resenha}>
              <View style={{ borderWidth: 2, margin: 5 }}>
                <Image style={estilos.imagens} source={require('./imagens/letter-to-you.jpg')} />
              </View>
              <View style={estilos.info}>
                <Text>2020</Text>
                <Text style={{ color: '#518969', textTransform: 'uppercase', fontWeight: 'bold' }}>Letter to you</Text>
                <Text style={{ color: '#518969', textTransform: 'uppercase' }}>Bruce Sprigsteen</Text>
                <Text>Por <Text style={{ color: '#518969' }}>Thaís Sechetin</Text></Text>
                <View style={estilos.avaliacao}>
                  <FontAwesome name="star" size={20} color="#e67e22"/>
                  <FontAwesome name="star" size={20} color="#e67e22"/>
                  <FontAwesome name="star" size={20} color="#e67e22"/>
                  <FontAwesome name="star" size={20} color="#e67e22"/>
                </View>
                <Text>Publicação: 20/11/2020</Text>
              </View>
            </View>

            <View style={estilos.resenha}>
              <View style={{ borderWidth: 2, margin: 5 }}>
                <Image style={estilos.imagens} source={require('./imagens/outra-razao.jpg')} />
              </View>
              <View style={estilos.info}>
                <Text>2020</Text>
                <Text style={{ color: '#518969', textTransform: 'uppercase', fontWeight: 'bold' }}>Outra Razao</Text>
                <Text style={{ color: '#518969', textTransform: 'uppercase' }}>Gabi Doti</Text>
                <Text>Por <Text style={{ color: '#518969' }}>Anderson Nascimento</Text></Text>
                <View style={estilos.avaliacao}>
                  <FontAwesome name="star" size={20} color="#e67e22"/>
                  <FontAwesome name="star" size={20} color="#e67e22"/>
                  <FontAwesome name="star" size={20} color="#e67e22"/>
                </View>
                <Text>Publicação: 14/07/2020</Text>
              </View>
            </View>

            <View style={estilos.resenha}>
              <View style={{ borderWidth: 2, margin: 5 }}>
                <Image style={estilos.imagens} source={require('./imagens/unplugged-mtv.jpg')} />
              </View>
              <View style={estilos.info}>
                <Text>2020</Text>
                <Text style={{ color: '#518969', textTransform: 'uppercase', fontWeight: 'bold' }}>Unplugged MTV</Text>
                <Text style={{ color: '#518969', textTransform: 'uppercase' }}>Liam Gallagher</Text>
                <Text>Por <Text style={{ color: '#518969' }}>Anderson Nascimento</Text></Text>
                <View style={estilos.avaliacao}>
                  <FontAwesome name="star" size={20} color="#e67e22"/>
                  <FontAwesome name="star" size={20} color="#e67e22"/>
                  <FontAwesome name="star" size={20} color="#e67e22"/>
                  <FontAwesome name="star" size={20} color="#e67e22"/>
                </View>
                <Text>Publicação: 01/10/2020</Text>
              </View>
            </View>
          </View>

          </ScrollView>

          <View style={estilos.rodape}>    
            <Text style={estilos.textoRodape}>&copy; 2020 Galeria Musical</Text>
          </View>          

        </View>   
    );
  }


export default Resenha;