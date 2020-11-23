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
        <View style={styles.mainTitle}>
          <Text style={styles.titleText}>Discografias</Text>
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
              <Image style={styles.images} source={require('./imagens/antonio-marcos.jpg')} />
              <View style={styles.infoArtists}>
                <Text style={styles.artistName}>Antônio Marcos</Text>
                <Text style={styles.textInfos}>Ano</Text>
                <Text style={styles.textInfos}>Site</Text>
                <Text style={styles.textInfos}>Album</Text>
              </View>
            </View>

            <View style={styles.discography}>
              <Image style={styles.images} source={require('./imagens/antonio-marcos.jpg')} />
              <View style={styles.infoArtists}>
                <Text style={styles.artistName}>Antônio Marcos</Text>
                <Text style={styles.textInfos}>Ano</Text>
                <Text style={styles.textInfos}>Site</Text>
                <Text style={styles.textInfos}>Album</Text>
              </View>
            </View>

            <View style={styles.discography}>
              <Image style={styles.images} source={require('./imagens/antonio-marcos.jpg')} />
              <View style={styles.infoArtists}>
                <Text style={styles.artistName}>Antônio Marcos</Text>
                <Text style={styles.textInfos}>Ano</Text>
                <Text style={styles.textInfos}>Site</Text>
                <Text style={styles.textInfos}>Album</Text>
              </View>
            </View>

            <View style={styles.discography}>
              <Image style={styles.images} source={require('./imagens/antonio-marcos.jpg')} />
              <View style={styles.infoArtists}>
                <Text style={styles.artistName}>Antônio Marcos</Text>
                <Text style={styles.textInfos}>Ano</Text>
                <Text style={styles.textInfos}>Site</Text>
                <Text style={styles.textInfos}>Album</Text>
              </View>
            </View>

            <View style={styles.discography}>
              <Image style={styles.images} source={require('./imagens/antonio-marcos.jpg')} />
              <View style={styles.infoArtists}>
                <Text style={styles.artistName}>Antônio Marcos</Text>
                <Text style={styles.textInfos}>Ano</Text>
                <Text style={styles.textInfos}>Site</Text>
                <Text style={styles.textInfos}>Album</Text>
              </View>
            </View>
          </View>
        </ScrollView>
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
      </View>
    );
  
}


export default Discografias;
