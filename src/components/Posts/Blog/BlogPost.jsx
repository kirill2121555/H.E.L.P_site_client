import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


const BlogPost = (props) => {

console.log(props)
  
  return (<div>
    <div className="card" >
      <h2 className="card-header">{props.post.title}</h2>
      <div className="card-body">
        <p className="clip">{props.post.text}</p>
        <p><small>Дата: {props.post.datacreate}</small></p>
        <NavLink to={'/blogpost/' + props.post._id}><button type="button" className="btn btn-primary">Подробнее</button></NavLink>
      </div>
    </div>
    <br></br>
  </div>
  )
}
export default BlogPost