import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {

  static defaultProps={
    head:"National News",
    category:"business",
    country:"in"
  }

  static propTypes={
    head:PropTypes.string,
    category:PropTypes.string,
    country:PropTypes.string,
    progress:PropTypes.func
  }
    constructor(props){
        super();
        this.state={
        articles:[],
        page:1,
        totalResults:0,
        pagesize:6,
        loading:false,
        }
        
    }

    async update(){
      this.props.setProgress(10);
      this.setState({loading:true});
      let apiUrl=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.state.pagesize}`;
      let data=await fetch(apiUrl);
      this.props.setProgress(50);
      let jsondata=await data.json();
      this.props.setProgress(80);
      this.setState({
                        articles:jsondata.articles,
                        totalResults:jsondata.totalResults,
                        loading:false
                      });

                      this.props.setProgress(100);
                      // document.documentElement.scrollTop = 0;
    }

    fetchData= async ()=>{
      this.props.setProgress(0);
      this.setState({page:this.state.page+1});
      this.setState({loading:true});
      let apiUrl=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.state.pagesize}`;
      let data=await fetch(apiUrl);
      this.props.setProgress(80);
      let jsondata=await data.json();
      this.props.setProgress(80);
      this.setState({
                        articles:this.state.articles.concat(jsondata.articles),
                        loading:false
                      });
                      this.props.setProgress(10);
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
          <InfiniteScroll
                  dataLength={this.state.articles.length} //This is important field to render the next data
                  next={this.fetchData}
                  hasMore={this.state.totalResults!=this.state.articles.length}
                  loader={<Loader />}
                  endMessage={
                    <p style={{ textAlign: 'center' }}>
                      <b>Yay! You have seen it all</b>
                    </p>}
                    >
                      {/* {this.state.loading && <Loader/>} */}
                      <div className='container my-5'>
                      <h2 className='text-center' style={{width:'100%',marginBottom:'20px'}}>{this.props.head}</h2>
          <div className='row' >
          {this.state.articles.map((element)=>{
              
              return <div key={element.url} className='col-md-4 my-3'>
                    <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} url={element.url} publishedAt={element.publishedAt} author={element.author} source={element.source} />
                </div>  
                
            })}
          </div>
          </div>
          
          {/* <div className='container d-flex justify-content-between'>
          <button type="button" disabled={this.state.page<=1}  onClick={this.goPrev} className="btn btn-light">&larr; Previous</button>
          <button type="button" disabled={this.state.page>=Math.ceil(this.state.totalResults/this.state.pagesize)} onClick={this.goNext} className="btn btn-light">&rarr; Next</button>
          </div> */}
          </InfiniteScroll>
    )
  }
}
