import * as React from "react";
import { Image, View, Text, StyleSheet, ScrollView, TextInput,ImageBackground, TouchableOpacity, Pressable } from 'react-native'; // Import TextInput
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const NotifBox = () => {
  return (
    <View style={styles.boxContainer}>
      <Text style={styles.timeNotif}>4 Jam Yang Lalu</Text>
      <View style={styles.notifBoxContainer}>
      <Image source={require('../assets/ellipse-10.png')}/>
      <Text style={{color:'gray',fontSize:13, width:'90%'}}>Pengajuan berkas UMKM anda berhasil dikirim silahkan menunggu notifikasi lebih lanjut
        terkait informasi keputusan dari admin.
      </Text>
    </View>
    </View>
  )
}

const Notification1 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView vertical showsVerticalScrollIndicator={false}>

    <View style={styles.container}>
      <View style={styles.titleContainer}>
      <Pressable onPress={() => navigation.navigate('Home')}>
      <Image source={require('../assets/vector-7.png')}/>

          </Pressable>
      <Text style={styles.notifTitle}>Notifikasi</Text>

      </View>
      <View style={styles.notifBoxs}>
        <NotifBox/>
        <NotifBox/>
        <NotifBox/>
        <NotifBox/>
        <NotifBox/>
        <NotifBox/>
        <NotifBox/>
        <NotifBox/>
        <NotifBox/>
        <NotifBox/>
      </View>

    </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems:'center',
  },
  timeNotif : {
    color : '#ac1484',
    paddingBottom :5,
    fontSize:10,
    // fontStyle:'italic',
    textAlign:'left',
    
  },
  notifTitle : {
  fontSize : 21,
  fontWeight:'bold',
 
  },
  titleContainer : {
    flexDirection : 'row',
    alignItems:'center',
    width:'100%',
    paddingBottom :20,
    borderBottomWidth:3,
    borderBottomColor:'#ac1484',
    justifyContent:'space-between'
  },
  notifBoxContainer : {
    flexDirection : 'row',
    justifyContent:'space-between',
    alignItems:'center',
    gap : 15,
   
  },
  boxContainer : {
    marginHorizontal:15,
    paddingVertical:15,
    borderBottomWidth:1,
    borderBottomColor:'gray',
  },
  notifBoxs : {
    marginVertical : 15,
    alignItems:'center',
    flexDirection:'col',
    justifyContent:'center'
  },
 
});

export default Notification1;
