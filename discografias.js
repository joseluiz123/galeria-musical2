import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';

const estilos = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  
    mainTitle: {
      backgroundColor: '#000',
      paddingTop: 15,
      paddingLeft: 18,
      paddingRight: 18,
      paddingBottom: 15,
      marginTop: 30,
      marginLeft: 0,
      alignItems: 'center',
      justifyContent: 'center'
    },
  
    titleText: {
      color: '#fff',
      fontFamily: 'Orbitron_400Regular'
    },
  
    content: {
      alignItems: 'center',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    discography: {
      marginTop: 5, 
      flex: 3, 
      flexDirection: 'row',
      alignItems: 'stretch',
      padding: 10

    },
  
    images: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
  
    infoArtists: {
      marginTop: 10,
      marginLeft: 10,
      flex: 2,
      justifyContent:'flex-start',
      alignItems: 'flex-start',

    },
    
    artistName: {
      textTransform: 'uppercase',
      color: 'green',
      fontWeight: 'bold',
      fontSize: 18
    },
  
    textInfos: {
      fontSize: 16
    },
  
    menu: {
      backgroundColor: '#000',
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      fontSize: 13,
      alignItems: 'center'
    },
  
    textButtons: {
      padding: 15,
      color: '#fff'
    },

    logo:{
      width: 300,
      height: 60,
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

    textoRodape: {
      color: 'white',
      fontSize: 14,
      fontWeight: 'bold',
      alignSelf: 'center',
      paddingTop: 8,
    },
  
  });

const Discografias = ({ navigation }) => { 

  return (
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
              <Text style={estilos.textButtons}>Início</Text>          
            </TouchableHighlight>         

            <TouchableHighlight underlayColor="orange" onPress={() => navigation.navigate('Entrevista')}>        
                <Text style={estilos.textButtons}>Entrevistas</Text>          
            </TouchableHighlight>

            <TouchableHighlight underlayColor="orange" onPress={() => navigation.navigate('Resenha')}>          
                <Text style={estilos.textButtons}>Resenhas</Text>          
            </TouchableHighlight>

            <TouchableHighlight underlayColor="orange" onPress={() => navigation.navigate('Contato')}>            
                <Text style={estilos.textButtons}>Contato</Text>                      
            </TouchableHighlight>
        </View>   

        <ScrollView>

          <View style={estilos.content}>
            
            <View style={estilos.discography}>
              <Image style={estilos.images} source={require('./imagens/antonio-marcos.jpg')} />
              <View style={estilos.infoArtists}>
                <Text style={estilos.artistName}>Antônio Marcos</Text>
                <Text style={estilos.textInfos}>Ano: 1960</Text>
                <Text style={estilos.textInfos}>Álbuns comentados: 15</Text>
              </View>
            </View>

            <View style={estilos.discography}>
              <Image style={estilos.images} source={require('./imagens/autoramas.jpg')} />
              <View style={estilos.infoArtists}>
                <Text style={estilos.artistName}>Autoramas</Text>
                <Text style={estilos.textInfos}>Ano: 1997</Text>
                <Text style={estilos.textInfos}>Álbuns comentados: 7</Text>
              </View>
            </View>

            <View style={estilos.discography}>
              <Image style={estilos.images} source={require('./imagens/baraov.jpg')} />
              <View style={estilos.infoArtists}>
                <Text style={estilos.artistName}>Barão Vermelho</Text>
                <Text style={estilos.textInfos}>Ano: 1981</Text>
                <Text style={estilos.textInfos}>Álbuns comentados: 19</Text>
              </View>
            </View>

            <View style={estilos.discography}>
              <Image style={estilos.images} source={require('./imagens/bluesetilicos.jpg')} />
              <View style={estilos.infoArtists}>
                <Text style={estilos.artistName}>Blues Etílicos</Text>
                <Text style={estilos.textInfos}>Ano: 1985</Text>
                <Text style={estilos.textInfos}>Álbuns Comentados: 14</Text>
              </View>
            </View>

            <View style={estilos.discography}>
              <Image style={estilos.images} source={require('./imagens/cachorrogrande.jpg')} />
              <View style={estilos.infoArtists}>
                <Text style={estilos.artistName}>Cachorro Grande</Text>
                <Text style={estilos.textInfos}>Ano: 1999</Text>
                <Text style={estilos.textInfos}>Albuns Comentados: 9</Text>
              </View>
            </View>

            <View style={estilos.discography}>
              <Image style={estilos.images} source={require('./imagens/cassiaeller.jpg')} />
              <View style={estilos.infoArtists}>
                <Text style={estilos.artistName}>Cássia Eller</Text>
                <Text style={estilos.textInfos}>Ano: 1981</Text>
                <Text style={estilos.textInfos}>Álbuns comentados: 17</Text>
              </View>
            </View>

            <View style={estilos.discography}>
              <Image style={estilos.images} source={require('./imagens/cerebro.jpg')} />
              <View style={estilos.infoArtists}>
                <Text style={estilos.artistName}>Cérebro Eletrônico</Text>
                <Text style={estilos.textInfos}>Ano: 2002</Text>
                <Text style={estilos.textInfos}>Álbuns comentados: 4</Text>
              </View>
            </View>

            <View style={{flex: 3, flexDirection: 'row', alignItems: 'stretch', padding: 10}}>
              <View style={{flex: 1, justifyContent:'flex-start', alignItems: 'flex-start'}}>
                <Image style={estilos.images} source={require('./imagens/chorao.jpg')} />
              </View>
              <View style={{flex: 2, justifyContent:'flex-start', alignItems: 'flex-start'}}>
                <Text style={estilos.artistName}>Charlie Brown JR.</Text>
                <Text style={estilos.textInfos}>Ano: 1992</Text>
                <Text style={estilos.textInfos}>Álbuns comentados: 14</Text>
              </View>
            </View>

            <View style={{flex: 3, flexDirection: 'row', alignItems: 'stretch', padding: 10}}>
              <View style={{flex: 1, justifyContent:'flex-start', alignItems: 'flex-start'}}>
                <Image style={estilos.images} source={require('./imagens/enghaw.jpg')} />

              </View>
              
              <View style={{flex: 2, justifyContent:'flex-start', alignItems: 'flex-start'}}>
                <Text style={estilos.artistName}>Engenheiros do Hawaii</Text>
                <Text style={estilos.textInfos}>Ano: 1985</Text>
                <Text style={estilos.textInfos}>Álbuns comentados: 19</Text>
              </View>
            </View>

            <View style={estilos.discography}>
              <Image style={estilos.images} source={require('./imagens/golpedeestado.jpg')} />
              <View style={estilos.infoArtists}>
                <Text style={estilos.artistName}>Golpe de Estado</Text>
                <Text style={estilos.textInfos}>Ano: 1985</Text>
                <Text style={estilos.textInfos}>Álbuns comentados: 8</Text>
              </View>
            </View>

            <View style={estilos.discography}>
              <Image style={estilos.images} source={require('./imagens/miniira.jpg')} />
              <View style={estilos.infoArtists}>
                <Text style={estilos.artistName}>Ira!</Text>
                <Text style={estilos.textInfos}>Ano: 1981</Text>
                <Text style={estilos.textInfos}>Álbuns comentados: 15</Text>
              </View>
            </View>

            <View style={estilos.discography}>
              <Image style={estilos.images} source={require('./imagens/legiao_urbana_mini.jpg')} />
              <View style={estilos.infoArtists}>
                <Text style={estilos.artistName}>Legião Hurbana</Text>
                <Text style={estilos.textInfos}>Ano: 1982</Text>
                <Text style={estilos.textInfos}>Álbuns comentados: 15</Text>
              </View>
            </View>

            <View style={estilos.discography}>
              <Image style={estilos.images} source={require('./imagens/loborges.jpg')} />
              <View style={estilos.infoArtists}>
                <Text style={estilos.artistName}>Lô Borges</Text>
                <Text style={estilos.textInfos}>Ano: 1972</Text>
                <Text style={estilos.textInfos}>Álbuns comentados: 14</Text>
              </View>
            </View>

            <View style={estilos.discography}>
              <Image style={estilos.images} source={require('./imagens/los-porongas.jpg')} />
              <View style={estilos.infoArtists}>
                <Text style={estilos.artistName}>Los Porongas</Text>
                <Text style={estilos.textInfos}>Ano: 2003</Text>
                <Text style={estilos.textInfos}>Álbuns comentados: 2</Text>
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


export default Discografias;
