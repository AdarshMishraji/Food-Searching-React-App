import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ResultList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';


const SearchScreen = () => {
    const [searchTerm, setSeachTerm] = useState(''); // variable to store search term that is entered at the search bar.
    const [searchAPI, results, errorMsg] = useResults(); // using the hook 

    // console.warn(results)

    const filterResultsByPrice = function (price) {
        // price : '$' || '$$' || '$$$'
        return results.filter( results => {
                return results.price == price
            }
        )
    }

    return <View>
        <SearchBar 
            searchTerm = {searchTerm}
            onSearchTermChange = {
                (newSearchTerm) => {
                    setSeachTerm(newSearchTerm)
                }
            }
            onSubmit = {
                () => {
                    searchAPI(searchTerm)
                }
            }
        />
        {errorMsg ? <Text>{errorMsg}</Text> : null}
        <Text>We have found: {results.length}</Text>
        <ResultList title = 'Cost Effective' results = {filterResultsByPrice('$')}/>
        <ResultList title = 'Bit Pricier' results = {filterResultsByPrice('$$')}/>
        <ResultList title = 'Big Spender' results = {filterResultsByPrice('$$$')}/>
    </View>
}

const styles = StyleSheet.create(
    {

    }
)

export default SearchScreen;
