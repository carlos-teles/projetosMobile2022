import React from 'react'
import { Picker, View, StyleSheet, Platform } from 'react-native'

export default function SelectPicker({ valorCafe, setvalorCafe }) {
    return (
        <View style={styles.valorCafe}>
            <Picker
                selectedValue={valorCafe}
                onValueChange={(item) => setvalorCafe(item)}
                mode="dropdown"
                itemStyle={{ fontSize: 12 }}
            >
                <Picker.Item label="Selecione o café" value="" />
                <Picker.Item label="Frio" value="iced" />
                <Picker.Item label="Quente" value="hot" />
            </Picker>
        </View>
    )
}
const styles = StyleSheet.create({
    valorCafe: {
        position: 'relative',
        ...Platform.select({
            ios: {
                top: -30,
            },
            android: {
                top: 30,
            },
        }),

        
        height: 50,
        width: 100,
    },
})
