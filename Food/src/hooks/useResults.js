import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]); // empty array is used because the result which iprovided by the yelp api is in array format.
    const [errorMsg, setErrorMsg] = useState(''); // error message to if there is a error.

    const searchAPI = async (termToSearch) => {
        try{

            // const response = await yelp.get('/search', {
            //     params: {
            //         limit: 50,
            //         term: termToSearch,
            //         location: 'san jose'
            //     }
            // })
            // setResults(response.data.businesses);

            yelp.get('/search', {
                params: {
                    limit: 50,
                    term: termToSearch,
                    location: 'san jose'
                }
            })
            .then((response) => {
                console.log(response.data.bussiness)
                setResults(response.data.businesses);
            })
            .catch((err) => {
                console.log(err)
            });
        }
        catch(err){
            setErrorMsg("Something went wrong");
        }
    }

    useEffect(() => {searchAPI('pasta')}, []) // for running the search for pasta for te first time our app renders.
    return [searchAPI, results, errorMsg]
}