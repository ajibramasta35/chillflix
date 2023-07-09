import React, { useState, useRef, useEffect } from 'react';



const [featuredMovieData, setFeaturedMovieData] = useState([]);


const fetchFeaturedMovieData  = async () => {
    const featuredMovieOptions  = {
      method: 'GET',
      url: 'https://moviesdatabase.p.rapidapi.com/titles/random',
      params: {
        limit: '5',
        startYear: '2011',
        list: 'most_pop_movies'
      },
      headers: {
        'X-RapidAPI-Key': 'edad74d662msh063b941126df1a5p1b3c52jsn0ba45527db17',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      },
    };

    try {
      const response = await axios.request(featuredMovieOptions );
      setFeaturedMovieData(response.data.results);
      setIsLoading(false);
      // console.log(response.data.results);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };