import React, { useEffect, useState } from 'react';
import { Image, View, Text, StyleSheet, ScrollView, TextInput,ImageBackground, TouchableOpacity, Pressable } from 'react-native'; // Import TextInput
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library
import categoryData from '../assets/data/categories.json'
const BottomNavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.containerNavDown}>
      <Pressable style={styles.buttonNavDown} onPress={() => navigation.navigate("Home")}>
        <Image source={require('../assets/vector24.png')}/>
        <Text style={{fontSize:11, color:'white'}}>Home</Text>
      </Pressable>
      <Pressable style={styles.buttonNavDown}  onPress={() => navigation.navigate("Categories")}>
      <Image source={require('../assets/vector11.png')}/>
      <Text style={{fontSize:11, color:'white'}}>Categories</Text>
      </Pressable>
      <Pressable style={styles.buttonNavDown}  onPress={() => navigation.navigate("Saved")}>
      <Image source={require('../assets/vector10.png')}/>
      <Text style={{fontSize:11, color:'white'}}>Sekitar</Text>
      </Pressable>
      <Pressable style={styles.buttonNavDown}  onPress={() => navigation.navigate("Profile")}>
      <Image  source={require('../assets/icon1.png')}/>
      <Text style={{fontSize:11, color:'white'}}>Profile</Text>
      </Pressable>   
      </View>
  );
};

const CategoriesCard = ({text}) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('Saved',{text : text})}>
      <View style={styles.eventCardContainer}>
      <View>
        <ImageBackground
          source={require('../assets/background.png')}
          style={styles.boxEvent}
          imageStyle={{ borderRadius: 20 }}>
        </ImageBackground>
      </View>
      <View>
        <Text style={styles.eventTitle}>{text}</Text>
        <Text style={styles.eventDesc}>ini adalah deskripsi yang akan 
          panjang tapi saya bingung panjang tapi saya bingung panjang tapi saya bingung</Text>

        
      </View>
    </View>
    </Pressable>
  )
}
const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoryData);
  },[]);

  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
      <Text style={styles.categoriesTitle}>Kategori Event</Text>
      <ScrollView vertical showsVerticalScrollIndicator={false}>

      <View style={styles.eventContainer}>
      {categories.map((category,index) => (<CategoriesCard key={index} text={category.title}/>)
            
      )}

      {/* <CategoriesCard text='Olahraga'/>
      <CategoriesCard text='Wisuda'/>
      <CategoriesCard text='Karnaval'/>
      <CategoriesCard text='Kebudayaan'/>
      <CategoriesCard text='Makanan'/>
      <CategoriesCard text='Karya Seni'/>
      <CategoriesCard text='Teknologi'/> */}

      </View>
      </ScrollView>
    </View>
          <BottomNavBar/>
    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems:'center'
  },
  categoriesTitle : {
    fontSize : 21,
    fontWeight:'bold',
    paddingBottom : 10,
  borderBottomWidth:3,
  borderBottomColor:'#ac1484',
  },
  containerNavDown: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ac1484',
    padding: 6, // Padding horizontal untuk tombol
    position: 'absolute',
    bottom: 38,
    left: 0,
    right: 0,
    width: '100%',
    textAlign:'center',
    zIndex: 999, // Menentukan navbar berada di layer terdepan
  },
  buttonNavDown: {
    padding: 10,
    textAlign:'center',
    alignItems:'center'
  },
  
  eventContainer : {
    gap:10,
    paddingBottom:120,
    marginTop:25,
    
  },
  eventCardContainer : {
    flexDirection:'row',
    gap:15,
    paddingBottom : 10,
    borderBottomWidth:1,
    borderBottomColor:'lightgray'
  },
  eventTitle : {
    fontSize :15,
    marginBottom:5,
    fontWeight : 'bold'
  },
  eventCity : {
    color : 'gray',
    fontSize : 12,
    width:250
  },
  eventDesc : {
    color : 'gray',
    fontSize : 12,
    width:250,
    marginBottom:5,

  },
  dateDistance : {
    color : 'gray',
    fontSize : 12,
    width :  220
    ,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  eventDate : {
    color : 'gray',
    fontSize : 12,
    flexDirection:'row',
    
  },
  eventDistance : {
    color : 'gray',
    fontSize : 12
  },
  boxEvent: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: '#ffffff', // Ganti dengan gambar latar belakang
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Categories;
