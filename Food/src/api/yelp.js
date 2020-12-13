import axios from 'axios';

export default axios.create(
    {
        baseURL: 'https://api.yelp.com/v3/businesses',
        headers: {
            Authorization: 'Bearer Zb3gtfLhx8FHK5hn-7YVRVEG1GJ-I7jvut06hJW0i4L_ukP9_oVZUSh1chwfSfp1vFHVBOi5ffEVj7KtbOZR-pMavvD5W3Wlk9rl5MTAPKJeO9wf_NqJh4iYppvTX3Yx'
        }
    }
)