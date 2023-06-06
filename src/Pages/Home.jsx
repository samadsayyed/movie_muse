import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);
useEffect(() => {
  const fetchData = async () => {
    try {
      const { data } = await axios.get("https://api.tvmaze.com/search/shows?q=the");
      setData(data);
    } catch (error) {
      console.log(error)
    }
  };
  fetchData();
}, []);

  return (<>
     
    <div className='home'>
      {
        data.map((i)=>(
          <Card name={i.show.name} key={i.show.id} id={i.show.id} rating={i.show.rating.average} image={i.show.image.medium} generes={i.show.genres}/>
        ))
      }
    </div>
    </>
  )
}

const Card=({name,rating,image,generes,id})=>{
  return(
    <Link to={`/shows/${id}`}>
<div className='card'>
<img className='card-image' src={image} alt={name} />
<h2>{name}</h2>
<p>{generes}</p>
</div>
</Link>
  )
}

export default Home