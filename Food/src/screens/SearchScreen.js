import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ResultList from '../components/ResultList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = (props) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchAPI, results, errorMsg] = useResults();

    const filterResiultsByPrice = (price) => {
        return results.filter(
            (results) => {
                return results.price == price;
            }
        )
    }

    return <>
        <StatusBar style = "white"/>
        <SearchBar 
            searchTerm = {searchTerm}
            onSearchTermChange = {
                (newSearchTerm) => {
                    setSearchTerm(newSearchTerm);
                }
            }
            onSubmit = {
                () => {
                    searchAPI(searchTerm);
                }
            }
        />
        {
            errorMsg ? <Text>{errorMsg}</Text> : null
        }
        <ScrollView>
            <ResultList 
                title = "Cost Effective" 
                results = {filterResiultsByPrice('$')}
            />
            
            <ResultList 
                title = "Bit Pricier" 
                results = {filterResiultsByPrice('$$')}
            />
            <ResultList 
                title = "Big Spender" 
                results = {filterResiultsByPrice('$$$')}
            />
        </ScrollView>
    </>
}

const styles = StyleSheet.create(
    {

    }
)

export default SearchScreen;