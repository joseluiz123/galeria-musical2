import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
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
      flexDirection: 'row',
      marginTop: 10
    },
  
    images: {
      width: 100,
      height: 100,
      borderRadius: 50
    },
  
    infoArtists: {
      marginLeft: 10
    },
    
    artistName: {
      textTransform: 'uppercase',
      color: 'green',
      fontWeight: 'bold',
      fontSize: 20
    },
  
    textInfos: {
      fontSize: 20
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
  
  });

const Discografias = ({ navigation }) => { 

  return (
      <View style={styles.container}>
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


        <View style={styles.menu}>  
        <TouchableHighlight underlayColor="orange" >            
            <Text style={styles.textButtons}>Lançamentos</Text>                      
        </TouchableHighlight>

          <TouchableHighlight underlayColor="orange" >        
              <Text style={styles.textButtons}>Entrevistas</Text>          
          </TouchableHighlight>

          <TouchableHighlight underlayColor="orange" >          
              <Text style={styles.textButtons}>Resenhas</Text>          
          </TouchableHighlight>

          <TouchableHighlight underlayColor="orange" >          
              <Text style={styles.textButtons}>Contato</Text>          
          </TouchableHighlight>
        </View>   

        <ScrollView>

          <View style={styles.content}>
            
            <View style={styles.discography}>
              <Image style={styles.images} source={require('./imagens/antonio-marcos.jpg')} />
              <View style={styles.infoArtists}>
                <Text style={styles.artistName}>Antônio Marcos</Text>
                <Text style={styles.textInfos}>Ano: 1960</Text>
                <Text style={styles.textInfos}>Álbuns comentados: 15</Text>
              </View>
            </View>

            <View style={styles.discography}>
              <Image style={styles.images} source={require('./imagens/autoramas.jpg')} />
              <View style={styles.infoArtists}>
                <Text style={styles.artistName}>Autoramas</Text>
                <Text style={styles.textInfos}>Ano: 1997</Text>
                <Text style={styles.textInfos}>Álbuns comentados: 7</Text>
              </View>
            </View>

            <View style={styles.discography}>
              <Image style={styles.images} source={require('./imagens/baraov.jpg')} />
              <View style={styles.infoArtists}>
                <Text style={styles.artistName}>Barão Vermelho</Text>
                <Text style={styles.textInfos}>Ano: 1981</Text>
                <Text style={styles.textInfos}>Álbuns comentados: 19</Text>
              </View>
            </View>

            <View style={styles.discography}>
              <Image style={styles.images} source={require('./imagens/bluesetilicos.jpg')} />
              <View style={styles.infoArtists}>
                <Text style={styles.artistName}>Blues Etílicos</Text>
                <Text style={styles.textInfos}>Ano: 1985</Text>
                <Text style={styles.textInfos}>Álbuns Comentados: 14</Text>
              </View>
            </View>

            <View style={styles.discography}>
              <Image style={styles.images} source={require('./imagens/cachorrogrande.jpg')} />
              <View style={styles.infoArtists}>
                <Text style={styles.artistName}>Cachorro Grande</Text>
                <Text style={styles.textInfos}>Ano: 1999</Text>
                <Text style={styles.textInfos}>Albuns Comentados: 9</Text>
              </View>
            </View>

            <View style={styles.discography}>
              <Image style={styles.images} source={require('./imagens/cassiaeller.jpg')} />
              <View style={styles.infoArtists}>
                <Text style={styles.artistName}>Cássia Eller</Text>
                <Text style={styles.textInfos}>Ano: 1981</Text>
                <Text style={styles.textInfos}>Álbuns comentados: 17</Text>
              </View>
            </View>

            <View style={styles.discography}>
              <Image style={styles.images} source={require('./imagens/cerebro.jpg')} />
              <View style={styles.infoArtists}>
                <Text style={styles.artistName}>Cérebro Eletrônico</Text>
                <Text style={styles.textInfos}>Ano: 2002</Text>
                <Text style={styles.textInfos}>Álbuns comentados: 4</Text>
              </View>
            </View>

            <View style={styles.discography}>
              <Image style={styles.images} source={require('./imagens/chorao.jpg')} />
              <View style={styles.infoArtists}>
                <Text style={styles.artistName}>Charlie Brown JR.</Text>
                <Text style={styles.textInfos}>Ano: 1992</Text>
                <Text style={styles.textInfos}>Álbuns comentados: 14</Text>
              </View>
            </View>

            <View style={styles.discography}>
              <Image style={styles.images} source={require('./imagens/enghaw.jpg')} />
              <View style={styles.infoArtists}>
                <Text style={styles.artistName}>Engenheiros do Hawaii</Text>
                <Text style={styles.textInfos}>Ano: 1985</Text>
                <Text style={styles.textInfos}>Álbuns comentados: 19</Text>
              </View>
            </View>

            <View style={styles.discography}>
              <Image style={styles.images} source={require('./imagens/golpedeestado.jpg')} />
              <View style={styles.infoArtists}>
                <Text style={styles.artistName}>Golpe de Estado</Text>
                <Text style={styles.textInfos}>Ano: 1985</Text>
                <Text style={styles.textInfos}>Álbuns comentados: 8</Text>
              </View>
            </View>

            <View style={styles.discography}>
              <Image style={styles.images} source={require('./imagens/miniira.jpg')} />
              <View style={styles.infoArtists}>
                <Text style={styles.artistName}>Ira!</Text>
                <Text style={styles.textInfos}>Ano: 1981</Text>
                <Text style={styles.textInfos}>Álbuns comentados: 15</Text>
              </View>
            </View>

            <View style={styles.discography}>
              <Image style={styles.images} source={require('./imagens/legiao_urbana_mini.jpg')} />
              <View style={styles.infoArtists}>
                <Text style={styles.artistName}>Legião Hurbana</Text>
                <Text style={styles.textInfos}>Ano: 1982</Text>
                <Text style={styles.textInfos}>Álbuns comentados: 15</Text>
              </View>
            </View>

            <View style={styles.discography}>
              <Image style={styles.images} source={require('./imagens/loborges.jpg')} />
              <View style={styles.infoArtists}>
                <Text style={styles.artistName}>Lô Borges</Text>
                <Text style={styles.textInfos}>Ano: 1972</Text>
                <Text style={styles.textInfos}>Álbuns comentados: 14</Text>
              </View>
            </View>

            <View style={styles.discography}>
              <Image style={styles.images} source={require('./imagens/los-porongas.jpg')} />
              <View style={styles.infoArtists}>
                <Text style={styles.artistName}>Los Porongas</Text>
                <Text style={styles.textInfos}>Ano: 2003</Text>
                <Text style={styles.textInfos}>Álbuns comentados: 2</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        
      </View>
    );
  
}


export default Discografias;
