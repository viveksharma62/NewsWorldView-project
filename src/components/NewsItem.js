import React, { Component } from 'react'

export class NewsItem extends Component {
   
  render() {
   let {title , description , imageUrl ,newsUrl,author,date, source} = this.props;
    return (
      <div className='my-3'>
            <div className="card">
              <div style={{display:'flex' , justifyContent:'flex-end' ,position:'absolute' , right:'0'}}>             
            <span className="badge rounded-pill bg-danger">{source}</span> 
            </div>
            <img src={!imageUrl?"https://s.yimg.com/ny/api/res/1.2/OQPNdsKb9GUd1A9awTr6UQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-03/7951ec60-dde7-11ee-bfb7-b5fc0845192d":imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title} </h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem;

