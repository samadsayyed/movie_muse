import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser';

const ShowDetails = () => {
  const params = useParams()
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const [summary, setSummary] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const { data } = await axios.get(`https://api.tvmaze.com/shows/${params.id}`);
        setData(data);
        setSummary(data.summary)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    };
    fetchData();
  }, [params.id]);



  if (loading) return <div>loading</div>
  return (
    <div className='details'>
      <div className="firsthalf">
        <img className='detail_img' src={data.image ? data.image.medium : "null"} alt="" />
        {/* <p>{data.rating?data.rating.average:"null"}</p> */}
        <div className="">
          <h3 className="bold">{data.name}</h3>
          <p>Pramered:{data.premiered}</p>
          <p>Language:{data.language}</p>
          <p>Runtime:{data.runtime}min</p>
        </div>
      </div>
      <div className="secondhalf">
        <h1>Summary</h1>
      <p>{parse(summary)}</p>
      </div>
      <div className="contact-us">
      <h1>Book Tickets</h1>
      <form>
      <input type="text" value={data.name} placeholder="Show Name" />
      <input type="text" value={data.premiered} placeholder="Enter date" />
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type='number' placeholder="Quantity" />
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default ShowDetails