import { StyleSheet, TextView, TouchableOpacity, FlatList,
    TextInput, View, Text, Dimensions, Image, ScrollView,  
} from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';


import hamburgerIcon from "../assets/hamburger.png"
import shopIcon from "../assets/shop.png"
import searchIcon from "../assets/search.png"
import filterIcon from "../assets/Delivery/filter.png"
import deliveryIcon from "../assets/Delivery/food_delivery.png"
import breakfastIcon from "../assets/Delivery/breakfast.png"
import lunchIcon from "../assets/Delivery/breakfast.png"
import beverageIcon from "../assets/Delivery/breakfast.png"
import exclusiveIcon from "../assets/Delivery/breakfast.png"
import starIcon from "../assets/star.png"
import backIcon from "../assets/back.png"



import offer1 from "../assets/dailydeals/offer1.png"
import offer2 from "../assets/dailydeals/offer2.jpg"
import offer3 from "../assets/dailydeals/offer3.png"
import offer4 from "../assets/dailydeals/offer4.png"

import breakfast1 from "../assets/Delivery/breakfast/breakfast1.png"
import breakfast2 from "../assets/Delivery/breakfast/breakfast2.png"
import breakfast3 from "../assets/Delivery/breakfast/breakfast3.png"
import breakfast4 from "../assets/Delivery/breakfast/breakfast4.png"

import lunch1 from "../assets/Delivery/lunch/lunch1.png"
import lunch2 from "../assets/Delivery/lunch/lunch2.png"
import lunch3 from "../assets/Delivery/lunch/lunch3.png"
import lunch4 from "../assets/Delivery/lunch/lunch4.png"

import beverage1 from "../assets/Delivery/beverage/beverage1.jpg"
import beverage2 from "../assets/Delivery/beverage/beverage2.png"
import beverage3 from "../assets/Delivery/beverage/beverage3.png"
import beverage4 from "../assets/Delivery/beverage/beverage4.png"


export default function Delivery({navigation}){

    const [headerVisible, setHeaderVisible] = useState("flex")

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

    const [breakfast, setBreakFast] = useState([
        {itemName: "Breakfast 1", itemType: "Ameraican", itemTime: "40", itemSold: 100,
            itemImage: breakfast1, rating: "4.5", deliveryType: "Free delivery"
        },
        {itemName: "Breakfast 2", itemType: "Bangladeshi",  itemTime: "30", itemSold: 100,
            itemImage: breakfast2, rating: "4.5", deliveryType: "Free delivery"
        },
        {itemName: "Breakfast 3", itemType: "Asian",  itemTime: "45", itemSold: 100,
            itemImage: breakfast3, rating: "4.5", deliveryType: "Free delivery"
        },
        {itemName: "Breakfast 4", itemType: "Italian",  itemTime: "35", itemSold: 100,
            itemImage: breakfast4, rating: "4.5", deliveryType: "Free delivery"
        },
    ])

    const [lunch, setLunch] = useState([
        {itemName: "Lunch 1", itemType: "Ameraican", itemTime: "40", itemSold: 100,
            itemImage: lunch1, rating: "4.5", deliveryType: "Free delivery"
        },
        {itemName: "Lunch 2", itemType: "Bangladeshi",  itemTime: "30", itemSold: 100,
            itemImage: lunch2, rating: "4.5", deliveryType: "Free delivery"
        },
        {itemName: "Lunch 3", itemType: "Asian",  itemTime: "45", itemSold: 100,
            itemImage: lunch3, rating: "4.5", deliveryType: "Free delivery"
        },
        {itemName: "Lunch 4", itemType: "Italian",  itemTime: "35", itemSold: 100,
            itemImage: lunch4, rating: "4.5", deliveryType: "Free delivery"
        },
    ])

    const [beverage, setBeverage] = useState([
        {itemName: "Beverage 1", itemType: "Ameraican", itemTime: "40", itemSold: 100,
            itemImage: beverage1, rating: "4.5", deliveryType: "Free delivery"
        },
        {itemName: "Beverage 2", itemType: "Bangladeshi",  itemTime: "30", itemSold: 100,
            itemImage: beverage2, rating: "4.5", deliveryType: "Free delivery"
        },
        {itemName: "Beverage 3", itemType: "Asian",  itemTime: "45", itemSold: 100,
            itemImage: beverage3, rating: "4.5", deliveryType: "Free delivery"
        },
        {itemName: "Beverage 4", itemType: "Italian",  itemTime: "35", itemSold: 100,
            itemImage: beverage4, rating: "4.5", deliveryType: "Free delivery"
        },
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


    return(

        <View>

            {/* header */}
            <View style={styles.header}>

                <View style={{flexDirection: "row"}}>

                    <View style={{flexDirection: "row", width: "80%", marginLeft:10}}>
                        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                            <Image 
                                source={backIcon}
                                style={styles.backIcon}
                            />
                        </TouchableOpacity>
                        
                        <View>
                            <Text style={{ fontSize: 18, fontWeight:"800"}}>Food Delivery</Text>
                            <Text style={{ fontSize: 12, marginBottom:15}}>Selected Location</Text>

                        </View>
                    </View>                    

                    <TouchableOpacity>
                        <Image 
                            source={shopIcon}
                            style={styles.shopIcon}
                        />
                    </TouchableOpacity>

                    
                </View>

                {/* Search bar and filter */}
                <View style={ {flexDirection: "row", justifyContent: "center", display: headerVisible}}>

                    <View style={styles.searchBar}>
                        <Image 
                            source={searchIcon}
                            style={[styles.searchIcon, {marginRight: 30}]}
                        />

                        <TextInput 
                            style={{flex: 1, height:"100%"}}
                            placeholder="Search for restaurant & cuisines"
                        />
                    </View>

                    <TouchableOpacity>
                        <Image 
                            source={filterIcon}
                            style={styles.searchIcon}
                        />
                    </TouchableOpacity>

                </View>

            
            </View>  

            {/* Body */}
            <ScrollView onScroll={(event)=>{
                const scrolling = event.nativeEvent.contentOffset.y;
                if(scrolling>10){
                    setHeaderVisible("none")
                }else{
                    setHeaderVisible("flex")
                }
            }}
            style={{marginLeft:10}}
            >

                <Text style={{marginLeft:15, marginTop:5, fontSize: 20, fontWeight: "700"}}>Bundle Items</Text>
                <FlatList 
                    horizontal = {true}
                    data={dailyOffers}
                    renderItem = {Card}
                    keyExtractor = {item => item.offername}
                />

                <Text style={{marginLeft:15, marginTop:5, fontSize: 20, fontWeight: "800"}}>Breakfast Items</Text>
                <FlatList 
                    horizontal = {true}
                    data={breakfast}
                    renderItem = {Card}
                    keyExtractor = {item => item.offername}
                />

                <Text style={{marginLeft:15, marginTop:5, fontSize: 20, fontWeight: "800"}}>Lunch Items</Text>
                <FlatList 
                    horizontal = {true}
                    data={lunch}
                    renderItem = {Card}
                    keyExtractor = {item => item.offername}
                />

                <Text style={{marginLeft:15, marginTop:5, fontSize: 20, fontWeight: "800"}}>Beverage Items</Text>
                <FlatList 
                    horizontal = {true}
                    data={beverage}
                    renderItem = {Card}
                    keyExtractor = {item => item.offername}
                />

            </ScrollView>

        </View>

         
    )
}




const styles = StyleSheet.create({

    header: {
        width: Dimensions.get("window").width,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 15,
        marginLeft: 20,
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        alignSelf: "center",
        alignContent: "center",
    },

    backIcon: {
        width: 20, 
        height: 20, 
        marginBottom: 10,
        marginRight: 20
    },

    shopIcon:{
        width: 20, 
        height: 20, 
        marginBottom: 10,
        marginRight: 10,
        flexDirection: "row-reverse",
    },

    searchBar: {
        flexDirection: "row", 
        alignItems:"center", 
        justifyContent: 'center', 
        width:"80%",
        borderRadius: 20,
        // borderWidth: 1,
        // borderColor: "black",
        backgroundColor: "rgba(222, 224, 227, 0.2)"
    },

    searchIcon: {
        width: 20, 
        height: 20, 
        margin: 10
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

    cardImage:{
        width: "100%",
        height: 130,
        borderRadius: 10,
        alignSelf: "center",
        resizeMode: "stretch"
    },

    timeView: {
        top: "46%",
        left: 9,
        position: "absolute",
        width:50, height:20, 
        borderRadius:10, 
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


})