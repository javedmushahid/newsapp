import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=> {
   const [articles, setArticles] = useState([])
   const [page, setPage] = useState(1)
   const [loading, setLoading] = useState(true)
   const [totalResults, setTotalResults] = useState(0)
//    document.title = `${this.cap(props.category)}-NewsMonkey`


    const cap = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
   
     const updateNews=async()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e8897667a153427a88a369312c73212f&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url)
        props.setProgress(30);

        let parsedData = await data.json();
        props.setProgress(70);

        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);


    }
    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e8897667a153427a88a369312c73212f&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)

        setLoading(true);
        let data = await fetch(url)
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    }
    useEffect(() => {
     updateNews();
    }, [])
    
          return (
            <div className='container my-3'>

                <h2 className='text-center' style={{ margin: '40px 0px' ,marginTop:'80px' }}>NewsMonkey-Top Headlines on {props.category}</h2>
                {/* {this.state.loading && <Spinner />} */}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >   <div className="container">
                        <div className="row">
                            {articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 63) : "Open to read"} description={element.description ? element.description.slice(0, 90) : " Click to read"} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        )
    
}

export default News

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}