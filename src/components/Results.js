import React from 'react'
import { useSelector } from 'react-redux';
import ResultVideoCard from './ResultVideoCard';
import { Link } from 'react-router-dom';

const Results = () => {
    const resultsArray = useSelector(store => store.app.searchResults)
    if(!resultsArray || resultsArray.length === 0) return null ;
    const results = resultsArray[0]
  return (
    <div>
    {results.map(result =><Link key={result.id.videoId} to={"/watch?v="+ result.id.videoId} > <ResultVideoCard key={result.id} info={result} /> </Link>)}
    </div>
  )
}

export default Results;
