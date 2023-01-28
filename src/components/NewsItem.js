import React from 'react'

const NewsItem =(props)=> {
  
    let {title,description,imageUrl,newsUrl,author,date}=props
    return (
      <div>
        <div className="card" style={{width:"18rem"}}>
  <img src={!imageUrl?"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg":imageUrl}  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">Author:{!author?"Unknown":author} Date: {new Date(date).toGMTString()}</small></p>

    <a href={newsUrl} target="_blank" className="btn  btn-sm btn-dark">Read More...</a>
  </div> 
</div>
      </div>
    )
  
}

export default NewsItem