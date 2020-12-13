import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultList = (props) => {
    return <View>
        <Text style = {styles.titleStyle}>{props.title}</Text>
        <FlatList
            horizontal = {true}
            keyExtractor = {result => result.id}
            data = {props.results}
            renderItem = {
                ({item}) => {
                    return <ResultsDetail result = {item}/>
                }
            }
        />
    </View>
}

const styles = StyleSheet.create(
    {
        titleStyle : {
            fontSize: 18,
            fontWeight: 'bold'
        }
    }
)

export default ResultList;