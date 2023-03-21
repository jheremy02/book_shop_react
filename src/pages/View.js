import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import Layout from "../components/Layout"
import BookContext from "../store/context"

function View() 
{
    const [bookItem,setBookItem]=useState({})    
    const params=useParams()
    const {getItem}=useContext(BookContext)

    useEffect(()=>{
        const book = getItem(params.bookId)
        console.log(book)
        setBookItem(book)
    },[])

    return <Layout>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={bookItem.cover} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{bookItem.title}</h1>
      <p className="py-6"> {bookItem.review}</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </Layout>
}

export default View