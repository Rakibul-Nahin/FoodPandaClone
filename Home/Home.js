import { StyleSheet, TextView, TouchableOpacity, SafeAreaView,
TextInput, View, Text, Dimensions, Image, Button, ScrollView 
} from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import hamburgerIcon from "../assets/hamburger.png"
import shopIcon from "../assets/shop.png"
import searchIcon from "../assets/search.png"





export default function Home({navigation}) {
    
    const [headerVisible, setHeaderVisible] = useState("flex")


    return(
        <View style={styles.parentView}>
            
            {/* header */}
            <View style={styles.header}>

                <View style={{flexDirection: "row"}}>

                    <View style={{flexDirection: "row", width: "80%", marginLeft:10}}>
                        <TouchableOpacity>
                            <Image 
                                source={hamburgerIcon}
                                style={styles.hamburgerIcon}
                            />
                        </TouchableOpacity>
                        
                        <View>
                            <Text style={{color: "white", fontSize: 18, fontWeight:"800"}}>Food Delivery</Text>
                            <Text style={{color: "white", fontSize: 12, marginBottom:15}}>Selected Location</Text>

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
                            style={{flex: 1}}
                            placeholder="Search for restaurant & cuisines"
                        />
                    </View>

                </View>

            
            </View>  

            {/* Body */}
            <ScrollView style={styles.bodyScrollView}>

                {/* Multiple options card */}
                <View style={{flexDirection: "row"}}>

                    <View style={{flexDirection: "column"}}>

                        <View>
                            <Text>Food Delivery</Text>
                            <Text>Best deals on your favourites!</Text>
                            <Image 
                                source={item["itemImage"]}
                                style={styles.cardImage}
                            />
                        </View>

                        <View>
                            <Text>Food Delivery</Text>
                            <Text>Best deals on your favourites!</Text>
                            <Image 
                                source={item["itemImage"]}
                                style={styles.cardImage}
                            />
                        </View>

                    </View>

                    <View style={{flexDirection: "column"}}>
                        <View>
                            <Text>Food Delivery</Text>
                            <Text>Best deals on your favourites!</Text>
                            <Image 
                                source={item["itemImage"]}
                                style={styles.cardImage}
                            />
                        </View>

                        <View>
                            <Text>Food Delivery</Text>
                            <Text>Best deals on your favourites!</Text>
                            <Image 
                                source={item["itemImage"]}
                                style={styles.cardImage}
                            />
                        </View>
                        <View>
                            <Text>Food Delivery</Text>
                            <Text>Best deals on your favourites!</Text>
                            <Image 
                                source={item["itemImage"]}
                                style={styles.cardImage}
                            />
                        </View>
                        
                    </View>

                </View>

            </ScrollView>

        </View>
    )

}


const styles = StyleSheet.create({

    parentView: {
        backgroundColor: "#e81a88",
    },

    // header
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

    hamburgerIcon: {
        width: 20, 
        height: 20, 
        marginBottom: 10,
        marginRight: 20,
        color: "white",
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
        width:"95%",
        borderRadius: 20,
        // borderWidth: 1,
        // borderColor: "black",
        backgroundColor: "#faf7f9"
    },

    searchIcon: {
        width: 20, 
        height: 20, 
        margin: 10
    },

    // body

    bodyScrollView:{
        // margin: 10,
        flex:1,
        flexDirection: "column",
        padding: 5,
        // backgroundColor: "#faf7f9",
        backgroundColor: "black",
    },

    cardImage:{
        width: "100%",
        height: 130,
        borderRadius: 10,
        alignSelf: "center",
        resizeMode: "stretch"
    },


})