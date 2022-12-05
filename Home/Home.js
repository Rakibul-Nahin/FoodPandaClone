import { StyleSheet, TextView, 
TextInput, View, Text, Dimensions, Image } from 'react-native' 

import Header from './Header'
import Menu from './Menu'



export default function Home() {
    


    return(
        <View style={styles.parentView}>
            <Header />
            
            <Menu />

        </View>
    )

}

const styles = StyleSheet.create({
    parentView:{
        flexDirection: "column"
    },
})