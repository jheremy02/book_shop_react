import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

import  BookContext  from "../store/context";



function Create(params) {

    const {createItem,items}=useContext(BookContext )


    const [bookProps,setBookProps]=useState({title:'',author:'',cover:'',intro:'',completed:false,review:''})
    

    function handleChange(event) {
        const isCheckbox = event.target.type === 'checkbox';

        const isFile=event.target.type === 'file';

        if (isFile) {
            handleOnChangeFile(event)
        }

        setBookProps((bookProps)=>({...bookProps,[event.target.name]:isCheckbox ? event.target.checked : event.target.value}))

        
    }

    function handleOnChangeFile(event) {
        const element=event.target

        console.log("hello world")
        console.log(element.files[0])
        const file=element.files[0]?element.files[0]:null

        const reader=new FileReader()

        if (file) {
            reader.readAsDataURL(file)

        reader.onloadend=()=>{
            setBookProps((bookProps)=>({...bookProps,[event.target.name]: reader.result.toString()}))
        }
        } else {
            setBookProps((bookProps)=>({...bookProps,[event.target.name]: null}))
        }

    }

    function handleSubmit(event) {
      event.preventDefault()
        const newBook={ bookId:crypto.randomUUID(), ...bookProps}
        
        createItem(newBook)
        

    }



    return <Layout>
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
    <Link to="/">Home</Link>
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Create now!</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>
      <form  onChange={handleChange} onSubmit={handleSubmit}>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input type="text" name="title" value={bookProps.title} placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Author</span>
            </label>
            <input type="text" name="author" value={bookProps.author} placeholder="author" className="input input-bordered" />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Cover</span>
            </label>
            <input type="file" name="cover"  className="file-input file-input-bordered file-input-xs w-full max-w-xs" />
            {!!bookProps.cover?<div className="avatar my-2">
                <div className="w-20 rounded">
                <img src={bookProps.cover} alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div>:''}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Intro</span>
            </label>
            <input type="text" name="intro" value={bookProps.intro} placeholder="intro" className="input input-bordered" />
          </div>
          <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Completed</span> 
                    <input type="checkbox" value={bookProps.completed} name="completed" checked={bookProps.completed} className="checkbox checkbox-primary" />
                </label>
            </div>

            <div className="form-control">
                <label className="label">
                <span className="label-text">Review</span>
                
                </label> 
                <textarea className="textarea  textarea-bordered h-24"  name="review" value={bookProps.review} placeholder="Bio"></textarea>
                
            </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Create</button>
          </div>

          <button className="btn btn-info" onClick={(event)=>{console.log(items)}}>Info</button>
        </div>
      </div>
      </form>
    </div>
  </div>
  </Layout> 
}

export default Create