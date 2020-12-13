import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = (props) => {
    return <View style = {styles.backgroundStyle}>
        <Feather name = 'search' style = {styles.iconStyle}/>
        <TextInput 
            autoCapitalize = 'none'
            autoCorrect = {false}
            style = {styles.inputStyle}
            placeholder = 'Search'
            value = {props.searchTerm}
            onEndEditing = {
                () => {
                    props.onSubmit();
                }
            }
            onChangeText = {
                (newSeachTerm) => {
                    props.onSearchTermChange(newSeachTerm);
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
            flexDirection:'row',
            marginBottom: 10
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