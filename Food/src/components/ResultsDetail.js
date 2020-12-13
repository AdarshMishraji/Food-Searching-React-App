import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ResultDetails = (props) => {
    return <View style = {styles.viewStyle}>
            <Image 
                source = {{uri:props.result.image_url}}
                style = {styles.imageStyle}
            />
            <Text style = {styles.nameStyle}>{props.result.name}</Text>
            <Text>{props.result.rating} Stars, {props.result.review_count} Reviews</Text>
        </View>
}

const styles = StyleSheet.create(
    {
        imageStyle: { 
            height: 120,
            width: 250,
            borderRadius: 5,
            marginBottom:5
        },
        viewStyle: {
            marginLeft:10,
        },
        nameStyle: {
            fontWeight:'bold',
            fontSize: 16
        }
    }
)

export default ResultDetails;