import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID QrfWHG_prI6_ancblWFMCeMFZtMzChaBR1TwLueokx0' //Unsplash API key
      }
});

// export default unsplash