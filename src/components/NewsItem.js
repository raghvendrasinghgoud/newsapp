import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class NewsItem extends Component {

  static defaultProps={
      imgUrl:"set prop imgUrl='string'",
      title:"set prop title='string'",
      description:"set description='string'",
      url:"set prop url='string'",
      publishedAt:"set prop publishedAt='String'",
      author:"set prop author='string'",
      source:"set source='string'"
  }
  static propTypes={
    imgUrl:PropTypes.string,
    title:PropTypes.string,
    description:PropTypes.string,
    url:PropTypes.string,
    publishedAt:PropTypes.string,
    author:PropTypes.string,
    source:PropTypes.string
}

  render() {
    let {title,description,imgUrl,url,author,publishedAt,source} = this.props;
    return (
            <div className="card" >
                <img className="card-img-top" style={{maxHeight:"200px"}} src={!imgUrl?"logo.png":imgUrl} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{title?title:'no-title'}</h5>
                        <p className="card-text">{description?description.substring(0,80)+"...Read more":'no-description'}</p>
                        <p className="card-text">By:{author?author:'unknown'} at {publishedAt?new Date(publishedAt).toLocaleDateString():'unknown'}</p>
                        <a href={url} target="_blank" className="btn btn-primary">Read More</a>
                    </div>
            </div>
    )
  }
}
