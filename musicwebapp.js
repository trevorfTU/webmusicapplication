// Pulled from ChatGTP 3.5

const clientID = 'YOUR_CLIENT_ID';
const redirectURI = 'YOUR_REDIRECT_URI';
const scopes = 'user-read-private user-read-email'; // Example scopes, customize based on your needs

const authorizeURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&redirect_uri=${encodeURIComponent(redirectURI)}&scope=${encodeURIComponent(scopes)}&response_type=token`;

// Redirect users to the Spotify authorization page
window.location.href = authorizeURL;

// Function to extract access token from URL hash fragment
function getAccessToken() {
  const hashParams = window.location.hash.substring(1).split('&');
  const params = {};

  for (let i = 0; i < hashParams.length; i++) {
    const [key, value] = hashParams[i].split('=');
    params[key] = value;
  }

  return params.access_token;
}

// Function to fetch track information using access token
function fetchTrackInfo(accessToken) {
  fetch('https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Track:', data);
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });
}

// Call functions
const accessToken = getAccessToken();
if (accessToken) {
  fetchTrackInfo(accessToken);
} else {
  console.error('Access token not found in URL hash fragment');
}



