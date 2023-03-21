import { useContext } from "react"
import { Link } from "react-router-dom"
import Book from "../components/Book"
import Layout from "../components/Layout"
import BookContext from "../store/context"

function Home(params) {

  const {items}=useContext(BookContext)

    return <Layout>
    <div className="hero min-h-screen bg-base-200">
      
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">BOOK SHOP</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <Link to="create">
          <button className="btn btn-primary">Create New</button>
        </Link>
        <div className="container">
            {items.map((item)=>{
              return <Book key={item.bookId} item={item}></Book>
            })}
        </div>
      </div>
    </div>
  </div>
  </Layout>
}

export default Home