import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader'
import PropTypes from 'prop-types'

export default class News extends Component {

  static defaultProps={
    head:"National News",
    category:"business",
    country:"in"
  }

  static propTypes={
    head:PropTypes.string,
    category:PropTypes.string,
    country:PropTypes.string
  }
    constructor(){
        super();
        this.state={
        articles:[],
        page:1,
        totalResults:0,
        pagesize:21,
        loading:false
        }
        
    }

    async update(){
      this.setState({loading:true});
      const apiUrl=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f84a72f8b8ae4967adb8e8977e01cb3b&page=${this.state.page}&pagesize=${this.state.pagesize}`;
      let data=await fetch(apiUrl);
      let jsondata=await data.json();
      this.setState({
                        articles:jsondata.articles,
                        totalResults:jsondata.totalResults,
                        loading:false
                      });
                      document.documentElement.scrollTop = 0;
    }

    async componentDidMount(){
        this.update();
    }

    goPrev=async ()=>{
      this.setState({page:this.state.page-1});
      this.update();
    }
     goNext= async ()=>{
      this.setState({page:this.state.page+1});
      this.update();
    }
  render() {
    return (     
      <div className='container my-5'>
          <h2 className='text-center' style={{width:'100%',marginBottom:'20px'}}>{this.props.head}</h2>
          {this.state.loading && <Loader/>}
          <div className='row' >
          {this.state.articles.map((element)=>{
              
              return <div key={element.url} className='col-md-4 my-3'>
                    <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} url={element.url} publishedAt={element.publishedAt} author={element.author} source={element.source} />
                </div>  
            })}
              
          </div>
          <div className='container d-flex justify-content-between'>
          <button type="button" disabled={this.state.page<=1}  onClick={this.goPrev} className="btn btn-light">&larr; Previous</button>
          <button type="button" disabled={this.state.page>=Math.ceil(this.state.totalResults/this.state.pagesize)} onClick={this.goNext} className="btn btn-light">&rarr; Next</button>
          </div>
      </div>
    )
  }
}
