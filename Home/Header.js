import { StyleSheet, TextView, 
    TextInput, View, Text, Dimensions, Image } from 'react-native' 

import hamburgerIcon from "../assets/hamburger.png"
import shopIcon from "../assets/shop.png"
import searchIcon from "../assets/search.png"


export default function Header(){
    return(
        <View style={styles.header}>

            <View style={{
                flexDirection: "row", 
                width: Dimensions.get("window").width-10,
                justifyContent: "center",
                alignSelf: "auto",
            }}>
                <Image 
                    source={hamburgerIcon}
                    style={styles.hamburgerIcon}
                />

                <Text style={{
                    marginLeft:20, marginRight: 20,
                    fontSize: 20
                }}>Welcome Rakibul Alam Nahin</Text>

                <Image 
                    source={shopIcon}
                    style={styles.shopIcon}
                />

            </View>

            <View style={{flexDirection: 'row'}}>

                <Image 
                    source={searchIcon}
                    style={styles.searchIcon}
                />

                <TextInput 
                    style={{
                        width: Dimensions.get("window").width-60,
                        height: 30,
                        borderRadius: 15,
                        borderWidth: 1,
                        borderColor: "black",
                        textAlign: "center"
                    }}

                    placeholder="Search your food"
                />

            </View>

            
        </View>   
    )
}


const styles = StyleSheet.create({

    header: {
        width: Dimensions.get("window").width,
        height: 100,
        backgroundColor: "#07f2e6",
        marginTop: 30,
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
        marginRight: 10
    },

    shopIcon:{
        width: 20, 
        height: 20, 
        marginBottom: 10,
        marginRight: 10,
        flexDirection: "row-reverse",
    },

    searchIcon: {
        width: 20, 
        height: 20, 
        marginTop: 5,
        marginRight: 10,
        marginLeft: 10,
    },
})