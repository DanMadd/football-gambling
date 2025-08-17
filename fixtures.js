//todo hide the API key, do that after getting this to work

const API_KEY = '7618cd42b11c470bb5e5984e39c5fd9c'
const URL = 'https://api.football-data.org/v4/competitions/PL/matches'


fetch(URL, {
    method: 'GET',
    headers: {
        'X-Auth-Token': API_KEY
    }
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log(response.json);
    })
