import React, { useEffect, useState } from 'react';
import {View, FlatList, Text, Image, StyleSheet, Button} from 'react-native';
import yelp from '../api/yelp'

const ResultsShowScreens = (props) => {
    const [imageLinks, setImageLinks] = useState([])
    const [name, setName] = useState('')

    const fetchData = async() => {
        const photos = await yelp.get(`/${props.navigation.state.params.id}`)
        const photoData = await photos.data;
        console.log()
        setImageLinks(photoData.photos)
        setName(photoData.name)
    }

    useEffect(
        () => { fetchData()},
        []
    )
    
    return <View>
        <Text style = {styles.titleStyle}>{name}</Text>
        <FlatList
            keyExtractor = {
                (item) => {
                    return item
                }
            }
            data = {imageLinks}
            renderItem = {
                ({item}) => {
                    return <Image 
                                source = {{uri:item}}
                                style = {styles.imageStyles}
                            />
                }
            }
        />
    </View>
}

const styles = StyleSheet.create(
    {   
        imageStyles: {
            height: 120, 
            width:250,
            marginTop:20,
            marginStart: 20,
            borderRadius:5
        },
        titleStyle: {
            fontWeight:'bold',
            fontSize: 20,
            marginStart: 20
        }
    }
)

export default ResultsShowScreens;