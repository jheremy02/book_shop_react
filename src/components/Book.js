import { Link } from "react-router-dom"


function Book({item}) {
    
    return <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={item.cover} alt="Shoes"  /></figure>
    <div className="card-body">
      <Link to={`/view/${item.bookId}`}>
      <h2 className="card-title">
        {item.title}
        <div className="badge badge-secondary">NEW</div>
      </h2>
      </Link>
      <p>{item.review}</p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline">{item.author}</div> 
        
      </div>
    </div>
  </div>

}

export default Book