import React from 'react';
import images from '../assets/images.jpg';

const NewsItem = ({url,src,description,title}) => {
    return (
        
            <div className="card bg-dark text-light mb-3  my-3 mx-3 px-2" style={{width:"330px"}}>
                <img src={src ||images} style={{height:"200px", width:"320px" ,padding:"5px"}} className="card-img-top" alt="..." onError={(e) => {
        // If the API link breaks, replace it with the static image
        e.target.onerror = null; // Prevents infinite loops if defaultImage also fails
        e.target.src = images;
      }} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description?description:"News not found properly in this description"}</p>
                        <a href={url} target="_blank"className="btn btn-primary">Read More</a>
                    </div>
            </div> 
            
    )
}

export default NewsItem