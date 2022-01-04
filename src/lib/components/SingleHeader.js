import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'

const SingleHeader = (props) => {
    const {title, colorBgStatusBar, barStyle, colorBgHeader, colorTitle}= props
    return (
        <><StatusBar backgroundColor={colorBgStatusBar} barStyle={barStyle} /><View style={{ padding: 15, backgroundColor: colorBgHeader }}>
            <Text style={{ fontSize: 20, color: colorTitle, fontWeight: 'bold' }}>{title}</Text>
        </View></>
    )
}

export default SingleHeader

const styles = StyleSheet.create({})
