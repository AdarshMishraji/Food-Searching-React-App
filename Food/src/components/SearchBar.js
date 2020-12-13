import React ,{} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {  } from 'react-native-gesture-handler';

const SearchBar = (props) => {


    return <View style = {styles.backgroundStyle}>
        <Feather name = 'search' style = {styles.iconStyle}/>
        <TextInput
            autoCapitalize = 'none'
            autoCorrect = {false}
            style = {styles.inputStyle}
            placeholder = "Search"
            value = {props.searchTerm}
            onEndEditing = {
                () => {
                    props.onSubmit()
                }
            }
            onChangeText = {
                (newSearchTerm) => {
                    props.onSearchTermChange(newSearchTerm);
                }
            }
        />
    </View>
}

const styles = StyleSheet.create(
    {
        backgroundStyle : {
            marginTop: 10,
            height:50,
            backgroundColor: "#999999",
            borderRadius: 10,
            marginHorizontal:15,
            flexDirection:'row'
        },
        inputStyle : {
            fontSize:18,
            flex:1,
            marginRight:10
        },
        iconStyle : {
            fontSize: 35,
            alignSelf:'center',
            marginHorizontal: 10
        }
    }
)

export default SearchBar;