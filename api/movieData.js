async function fetchData() {
  const moviedb = {
    method: 'GET',
    url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
    params: { q: 'game' },
    headers: {
      'X-RapidAPI-Key': 'edad74d662msh063b941126df1a5p1b3c52jsn0ba45527db17',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(moviedb);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();