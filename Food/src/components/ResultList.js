import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultDetails from './ResultsDetail';
import {withNavigation} from 'react-navigation';

const ResultList = (props) => {
    if (props.results.length == 0){
        return null;
    }
    return <View>
        <Text style = {styles.titleStyle}>{props.title}</Text>
        <FlatList
            horizontal = {true}
            data = {props.results}
            showsHorizontalScrollIndicator = {false}
            keyExtractor = {
                (result) => {
                    return result.id;
                }
            }
            renderItem = {
                ({item}) => {
                    return <TouchableOpacity
                                onPress = {
                                    () => {
                                        props.navigation.navigate('Results', {id: item.id});
                                    }
                                }
                            >
                            <ResultDetails result = {item}/>
                        </TouchableOpacity>
                }
            }
        />
        <View style = {styles.bottomLine}></View>
    </View>
}

const styles = StyleSheet.create(
    {
        titleStyle: {
            fontSize: 20,
            fontWeight:'bold',
            marginStart: 10,
            marginBottom: 5
        },
        bottomLine: {
            width: '100%',
            height:1,
            backgroundColor:'#999999',
            marginHorizontal:10
        }
    }
)

export default withNavigation(ResultList);