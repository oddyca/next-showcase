const API_ENDPOINT = 'https://app.ticketmaster.com/discovery/v2/events';
const APIKEY = 'GiqK7PFzFyQWRNPYS0W1D3d8x5X6ABxC'

export const getAllEvents = async (): Promise<any> => {
  const params = new URLSearchParams({
    segmentName: 'Music',
    countryCode: 'US',
    size: '10',
    apikey: APIKEY
  });
  const queryString = params.toString();
  
  try {
    const response = await fetch(`${API_ENDPOINT}?${queryString}`);
    const data = await response.json();
    return data;
  } catch(e) {
    console.log(e);
  }
}

export const searchArtists = async (): Promise<any> => {
  const params = new URLSearchParams({
    segmentName: 'Music',
    countryCode: 'US',
    size: '200',
    apikey: APIKEY
  });
  const queryString = params.toString();

  try {
    const response = await fetch(`${API_ENDPOINT}?${queryString}`);
    const data = await response.json();
    return data;
  } catch(e) {
    console.log('___//ERROR:')
    console.log(e);
  }
}
