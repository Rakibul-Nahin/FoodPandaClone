import {
    StyleSheet, TextView, TouchableOpacity, SafeAreaView,
    TextInput, View, Text, Dimensions, Image, FlatList,
    Button,ScrollView, Animated,
  } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import hamburgerIcon from '../assets/hamburger.png';
import shopIcon from '../assets/shop.png';
import searchIcon from '../assets/search.png';
import deliveryIcon from "../assets/Delivery/food_delivery.png"
import starIcon from "../assets/star.png"

import kachhiImage from '../assets/options/kacchi.png';
import dine_inImage from '../assets/options/dine_in.jpg';
import groceryImage from '../assets/options/grocery.png';
import shopImage from '../assets/options/shop.png';
import pickupImage from '../assets/options/pickup.png';

import offer1 from "../assets/dailydeals/offer1.png"
import offer2 from "../assets/dailydeals/offer2.jpg"
import offer3 from "../assets/dailydeals/offer3.png"
import offer4 from "../assets/dailydeals/offer4.png"

import coffeeImage from "../assets/cuisines/coffee.jpg"
import pizzaImage from "../assets/cuisines/pizza.png"
import beverageImage from "../assets/cuisines/beverage.png"
import burgerImage from "../assets/cuisines/burger.png"
import cakeImage from "../assets/cuisines/cake.png"
import healthyImage from "../assets/cuisines/healthy.png"
import kacchiImage from "../assets/cuisines/kacchi.png"
import mexicanImage from "../assets/cuisines/mexican.png"
import noodlesImage from "../assets/cuisines/noodles.png"
import soupImage from "../assets/cuisines/soup.png"
import shawarmaImage from "../assets/cuisines/shawarma.png"
import icecreamImage from "../assets/cuisines/icecream.png"


  
export default function Home({ navigation }) {

    const [headerVisible, setHeaderVisible] = useState("show");
    const height = useRef(new Animated.Value(40)).current
    const opacity = useRef(new Animated.Value(1)).current

    const [dailyOffers, setDailyOffers] = useState([
        {itemName: "Offer 1", itemType: "Family", itemTime: "40", itemSold: 100,
            itemImage: offer1, rating: "4.5", deliveryType: "Free delivery"
        },
        {itemName: "Offer 2", itemType: "Chinese",  itemTime: "30", itemSold: 100,
            itemImage: offer2, rating: "4.5", deliveryType: "Free delivery"
        },
        {itemName: "Offer 3", itemType: "Mixed",  itemTime: "45", itemSold: 100,
            itemImage: offer3, rating: "4.5", deliveryType: "Free delivery"
        },
        {itemName: "Offer 4", itemType: "Fast Food",  itemTime: "35", itemSold: 100,
            itemImage: offer4, rating: "4.5", deliveryType: "Free delivery"
        },

    ])

    const [cuisines, setCuisines] = useState([
        {cuisineName: "Coffee", cuisineImage: coffeeImage},
        {cuisineName: "Pizza", cuisineImage: pizzaImage},
        {cuisineName: "Beverage", cuisineImage: beverageImage},
        {cuisineName: "Burger", cuisineImage: burgerImage},
        {cuisineName: "Cake", cuisineImage: cakeImage},
        {cuisineName: "Healthy", cuisineImage: healthyImage},
        {cuisineName: "Kacchi", cuisineImage: kacchiImage},
        {cuisineName: "Mexican", cuisineImage: mexicanImage},
        {cuisineName: "Noodles", cuisineImage: noodlesImage},
        {cuisineName: "Soup", cuisineImage: soupImage},
        {cuisineName: "Shawarma", cuisineImage: shawarmaImage},
        {cuisineName: "Ice Cream", cuisineImage: icecreamImage},
    ])

    const Card=({item})=>{
        return(
            <View style={styles.cards} text>
                <Image 
                    source={item["itemImage"]}
                    style={styles.cardImage}
                />
                <View style={styles.timeView}>
                    <Text style={{fontSize:12, fontWeight:"600"}}>{item["itemTime"]} min</Text>
                </View>

                <Text style={{marginTop:8, fontSize: 15, fontWeight: "800"}}>{item["itemName"]}</Text>
                <Text style={{marginTop:8, fontSize: 10,}}>$$$ {item["itemType"]}</Text>

                <View style={{flexDirection: "row", marginLeft:8}}>
                    <Image 
                        source={deliveryIcon}
                        resizeMode="cover"
                        style={[styles.searchIcon, {marginLeft:0}]}
                    />
                    <Text style={{alignSelf: "center", fontSize: 12, fontWeight: "800", color:"#f7165e"}}>{item["deliveryType"]}</Text>
                </View>

                <View style={styles.ratingView}>
                    <Image 
                        source={starIcon}
                        style={[styles.searchIcon, {marginLeft:0}]}
                    />
                    <Text style={{alignSelf: "center", fontSize: 12, fontWeight: "800"}}>{item["rating"]}</Text>
                    <Text style={{alignSelf: "center", fontSize: 12, fontWeight: "400"}}> ({item["itemSold"]})</Text>

                </View>
                
                

            </View>
            // <View><Text>Hello</Text></View>
        )
    }

    const CuisineCard=({item})=>(

        <View style={{flexDirection:"column", margin: 10, alignItems: "center"}}>
            <Image 
                source={item["cuisineImage"]}
                style={{width:80, height:80, borderRadius: 10}}
            />

            <Text style={{marginTop: 5, fontWeight: "600"}}>{item["cuisineName"]}</Text>
        </View>

    )

    useEffect(()=>{
        console.log(headerVisible)
        if(headerVisible == "show"){
            Animated.timing(height, {
                toValue: 40,
                duration: 1000,
                useNativeDriver: false,
            }).start()
            Animated.timing(opacity, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false,
            }).start()
        }else{
            Animated.timing(height, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: false,
            }).start()
    
            Animated.timing(opacity, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: false,
            }).start()
        }
    }, [headerVisible])


    return (
        <View style={styles.parentView}>
            {/* header */}
            <View style={styles.header}>
                <View style={{ flexDirection: 'row',}}>
                    <View style={{ flexDirection: 'row', width: '80%', marginLeft: 10,}}>
                        <TouchableOpacity>
                            <Image source={hamburgerIcon} style={styles.hamburgerIcon} />
                        </TouchableOpacity>

                        <View style={{flexDirection: "column", width: "90%"}}>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: '800', }}>
                                Europa, Third Orbit, Jupiter, Sol, Milky Way 
                            </Text>
                            <Text style={{ color: 'white', fontSize: 12, marginBottom: 15 }}>
                                Selected Location
                            </Text>
                        </View>
                    </View>

                    <TouchableOpacity>
                        <Image source={shopIcon} style={styles.shopIcon} />
                    </TouchableOpacity>
                </View>

                {/* Search bar and filter */}
                <Animated.View
                style={[
                    {   display: "flex",
                        flexDirection: 'row',
                        justifyContent: 'center',
                        height: height, opacity: opacity,
                    },
                    // headerVisible
                ]}>
                    
                    <View style={styles.searchBar}>
                        <Image
                            source={searchIcon}
                            style={[styles.searchIcon, { marginRight: 30}]}
                        />

                        <TextInput
                        style={{ flex: 1 }}
                        placeholder="Search for restaurant & cuisines"
                        />
                    </View>
                </Animated.View>

            </View>


            {/* Body */}
            <ScrollView style={{height:540}}

                onScroll={(event)=>{
                    const scrolling = event.nativeEvent.contentOffset.y;
                    if(scrolling>300){
                        // hideSeachView()
                        setHeaderVisible("hide")
                    }else{
                        // showSeachView()
                        setHeaderVisible("show")
                    }
                }}

                scrollEventThrottle={16}
                useNativeDriver={true}
            >

                {/* Multiple options card */}
                <View style={styles.optionsView}>

                {/*Column 1*/}
                <View style={{ flexDirection: 'column' }}>
                
                    {/*Fast Delivery Option*/}

                    <TouchableOpacity onPress={()=>{navigation.navigate("Delivery")}}>
                        <View style={styles.fastDeliveryOption}>
                            <Text style={{ fontSize: 20, fontWeight: '600', marginLeft: 5, marginBottom: 5 }}>
                                Food Delivery
                            </Text>
                            <Text style={{ fontWeight: '300', marginLeft: 5, marginBottom: 5 }}>
                                Best deals on your favourites!
                            </Text>
                            <Image
                                source={kachhiImage}
                                style={{
                                width: 120, height: 80,
                                borderRadius: 10,
                                position: 'absolute', bottom: 5, right: 5,
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                    
                    {/*Dine In Option*/}
                    <View style={styles.dineInOption}>
                        <View style={{ flexDirection: 'column', width: '55%' }}>
                            <Text
                            style={{ fontSize: 20, fontWeight: '600', marginLeft: 5,}}>
                            Dine-in
                            </Text>
                            <Text style={{ fontWeight: '300', marginLeft: 5,}}>
                            Eat out and save 25%
                            </Text>
                        </View>

                        <Image
                            source={dine_inImage}
                            style={{
                            width: 50, height: 50,
                            borderRadius: 10,
                            position: 'absolute', bottom: 0, right: 0,
                            }}
                        />
                    </View>

                </View>

                {/*Column 2*/}
                <View style={{ flexDirection: 'column' }}>

                    {/*Pandamart Option*/}
                    <View style={[styles.fastDeliveryOption, {height:150, width: 170}]}>
                        <Text style={{ marginLeft:5, fontSize: 18, fontWeight: '600'}}>Pandamart</Text>
                        <Text style={{ marginLeft:5, fontWeight: '300', marginBottom: 5 }}>Grocery delivered in 30 mins!</Text>
                        <Image
                            source={groceryImage}
                            style={{
                            width: 120, height: 80,
                            borderRadius: 10,
                            position: 'absolute', bottom: 5, right: 5,
                            }}
                        />
                    </View>

                    {/*Shops Option*/}
                    <View style={[styles.dineInOption, {width: 170}]}>
                        <View style={{ flexDirection: 'column', width: '55%' }}>
                            <Text style={{ marginLeft:5, fontSize: 20, fontWeight: '600' }}>Shops</Text>
                            <Text style={{ marginLeft:5, fontWeight: '300', marginBottom: 5 }}>Groceries and more</Text>
                        </View>

                        <Image
                            source={shopImage}
                            style={{
                            width: 50, height: 50,
                            borderRadius: 10,
                            position: 'absolute', bottom: 0, right: 0,
                            }}
                        />
                    </View>

                    {/*Pickup Option*/}
                    <View style={[styles.dineInOption, {width: 170}]}>
                        <View style={{ flexDirection: 'column', width: '55%' }}>
                            <Text style={{ fontSize: 20, fontWeight: '600', marginLeft: 5, }}>Pick-up</Text>
                            <Text style={{ fontWeight: '400', marginLeft: 5, marginBottom: 5 }}>Take away in 15 mins</Text>
                        </View>

                        <Image
                            source={pickupImage}
                            style={{
                            width: 50, height: 50,
                            borderRadius: 10,
                            position: 'absolute', bottom: 0, right: 0,
                            }}
                        />
                        </View>
                    
                    </View>
                </View>

                {/* Daily Deals and Cuisines Horizontal Flatlist */}
                <View style={{backgroundColor: "white", padding: 10}}>
                    <Text style={{marginLeft:15, marginTop:5, fontSize: 20, fontWeight: "800"}}>Your daily deals</Text>
                    <FlatList 
                        horizontal = {true}
                        data={dailyOffers}
                        renderItem = {Card}
                        keyExtractor = {item => item.offername}
                    />

                    <Text style={{marginLeft:15, marginTop:5, fontSize: 18, fontWeight: "700"}}>Cuisines</Text>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginBottom: 5}}>
                    <FlatList
                        contentContainerStyle={{alignSelf: 'flex-start'}}
                        numColumns={Math.ceil(cuisines.length / 2)}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={cuisines}
                        renderItem={CuisineCard}
                    />
                    </ScrollView>

                </View>

            </ScrollView>
        </View>
    );
}
  
const styles = StyleSheet.create({
    parentView: {
      backgroundColor: '#e81a88',
    },
  
    // header
    header: {
      width: Dimensions.get('window').width,
      paddingTop: 10,
      paddingBottom: 10,
      marginTop: 15,
      marginLeft: 20,
      flexDirection: 'column',
      textAlign: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      alignContent: 'center',
    },
  
    hamburgerIcon: {
      width: 20,
      height: 20,
      marginBottom: 10,
      marginRight: 20,
      color: 'white',
    },
  
    shopIcon: {
      width: 20,
      height: 20,
      marginBottom: 10,
      marginRight: 10,
      flexDirection: 'row-reverse',
    },
  
    searchBar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '95%',
      borderRadius: 20,
      // borderWidth: 1,
      // borderColor: "black",
      backgroundColor: '#faf7f9',
    },
  
    searchIcon: {
      width: 20,
      height: 20,
      margin: 10,
    },
  
    // body
  
    bodyScrollView: {
      // margin: 10,
      flex: 1,
      flexDirection: 'column',
      padding: 5,
      // backgroundColor: "#faf7f9",
      alignItems: "center",
    },
  
    optionsView: {
      flexDirection: 'row', 
      justifyContent:"center", 
      backgroundColor:"#f0eded",
      padding:10
    },
  
    fastDeliveryOption: {
      width: 160,
      height: 240,
      borderRadius: 10,
      backgroundColor: 'white',
      margin: 5,
      padding: 5,
      flexDirection: 'column',
      alignContent: 'center',
    },
  
    dineInOption: {
      width: 160,
      height: 80,
      borderRadius: 10,
      backgroundColor: 'white',
      margin: 5,
      padding: 5,
      flexDirection: 'row',
      alignContent: 'center',
    },

    cards:{
        width: 250,
        height: 220,
        // backgroundColor: "black",
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 1,
        marginTop: 5,
        marginLeft: 5,
    },
  
    cardImage: {
      width: '100%',
      height: 120,
      borderRadius: 15,
      alignSelf: 'center',
      resizeMode: 'stretch',
    },

    timeView: {
        position: "absolute", top: 5, left: 10,
        width:50, height:20, 
        borderRadius: 10, borderWidth: 1, borderColor: "white",
        backgroundColor: "white", 
        alignItems:"center", 
        justifyContent: "center"
    },

    ratingView:{
        flexDirection: "row",
        position: "absolute",
        bottom: 52,
        right: 10
    },
});

  