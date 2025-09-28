import React, { Component } from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, publishedAt, source } = props;

    return (

        <div className="card">
            <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                <span className=" badge rounded-pill bg-danger" >
                    {source}
                </span>
            </div>
            <img src={!imageUrl ? "https://platform.mmafighting.com/wp-content/uploads/sites/109/2025/09/gettyimages-1239345187.jpg?quality=90&strip=all&crop=0%2C0.0063783645873201%2C100%2C99.987243270825&w=1080" : imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className='card-text'><small className='text-muted'>{author && `By: ${author},`} On: {new Date(publishedAt).toGMTString()} </small></p>
                <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>

    )

}

export default NewsItem