import yelp from '../api/yelp';
import {useEffect, useState} from 'react';

export default () => {
    const [results, setResults] = useState([])
    const [errorMsg, setErrorMsg] = useState('');

    const searchAPI = async(termToSearch) => {
        try{
            const response = await yelp.get(
                '/search',{
                   params: {
                       limit: 50,
                       term : termToSearch,
                       location: 'san jose'
                   }
               }
            )
            // console.log(response.data)
            setResults(response.data.businesses);
        }
        catch(err){
            console.log(err);
            setErrorMsg('Something went wrong');
        }
    }

    useEffect(
        () => {
            searchAPI('noodles')
        },
        []
    )
    return [searchAPI, results, errorMsg];
}