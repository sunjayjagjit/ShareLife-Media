import React,{useState,useEffect} from 'react'

import MasonryLayout from './MasonryLayout'
import { client } from '../client'
import { feedQuery,searchQuery } from '../utils/data'
import Spinner from './Spinner'

const Search = ({seacrhTerm}) => {

  const [pins, setPins] = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    if(seacrhTerm){
      setLoading(true)
      const query = searchQuery(seacrhTerm.toLowerCase())
      client.fetch(query)
        .then((data) => {
          setPins(data);
          setLoading(false)
        })
    } else {
      client.fetch(feedQuery)
        .then((data) => {
          setPins(data);
          setLoading(false)
        })
    }
  }, [seacrhTerm]);

  return (
    <div>
      {loading && <Spinner message="Searching for daily pins or feed...." />}
      {pins?.length !== 0 && <MasonryLayout pins={pins} />}
      {pins?.length === 0 && seacrhTerm !== '' && !loading && (
        <div className='mt-10 text-center text-xl'>
          No Pins/Feed Found
        </div>
      )}
    </div>
  )
}

export default Search