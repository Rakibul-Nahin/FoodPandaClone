import { useState } from 'react'
import { StyleSheet, TextView, TouchableOpacity, ScrollView,
    TextInput, View, Text, Dimensions, Image } 
    from 'react-native' 

import burgerImage from "../assets/menu/burger.png"
import deliveryImage from "../assets/menu/fastDelivery.png"
import offerImage from "../assets/menu/offers.png"
import diner from "../assets/menu/diner.png"


import offer1 from "../assets/dailydeals/offer1.png"
import offer2 from "../assets/dailydeals/offer2.jpg"
import offer3 from "../assets/dailydeals/offer3.png"
import offer4 from "../assets/dailydeals/offer4.png"



export default function Menu(){

    const [menuList, setMenuList] = useState([
        {text: "Food Delivery", subtext: "Always on time", image: deliveryImage},
        {text: "Shops", subtext: "Good pricing", image: burgerImage},
        {text: "Pickups", subtext: "You will be amazed", image: offerImage},
        {text: "Dine-In", subtext: "Save money with dine ins", image: diner}

    ])

    const [dailyOffers, setDailyOffers] = useState([
        {text: "Offer 1", subtext: "", image: offer1},
        {text: "Offer 2", subtext: "", image: offer2},
        {text: "Offer 3", subtext: "", image: offer3},
        {text: "Offer 4", subtext: "", image: offer4},

    ])

    

    const Card=(cardText, cardSubText, cardImage)=>(

        <TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 5, marginTop: 5}}>
                <View style={styles.cards} text>
                    
                    <Image 
                        source={item["image"]}
                        style={styles.cardImage}
                    />

                </View>
            </TouchableOpacity>
            
        </TouchableOpacity>

    )

    return(

        <ScrollView style={styles.parentView}>

            {/* Option menus */}
            <View style={styles.menuView}>
                {menuList.map((item)=>{
                    return Card(item["text"], item["subtext"], item["image"])
                })}
            </View>

            <Text style={{fontSize:20, fontWeight:"800", margin:5, marginLeft: 20}}>Todays Best Deal</Text>

            {/* Daily Deals */}
            <ScrollView style={styles.dailyDealsView} horizontal={true}>
                {dailyOffers.map((item)=>{
                    return Card(item["text"], item["subtext"], item["image"])
                })}
            </ScrollView>

        </ScrollView>

    )
}


const styles = StyleSheet.create({
    parentView: {
        // flex: 1,
        flexDirection: "column",
        flexWrap: "wrap",
        // overflow: "scroll",
        // justifyContent: "center",
        textAlign: "center",
        alignContent: "center",
        margin: 10
    },

    menuView:{
        flexDirection: "row",
        flexWrap: "wrap",
        // overflow: "scroll",
        justifyContent: "center",
        textAlign: "center",
        alignContent: "center",
        alignSelf: "center",
    },

    dailyDealsView:{
        marginLeft: 20
    },

    cards:{
        width: 160,
        height: 220,
        backgroundColor: "black",
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 1,
    },

    cardImage:{
        width: 130,
        height: 100,
        top: 45,
        left: 15,
        borderRadius: 10
    }
})