import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=ONAwnm3FMl8HSqYFSFH5CGxXNewvN9uN'

            
            
            
 export default class LatestMovieReviewsContainer extends Component {
     state = {
         reviews: []
     }     

    componentDidMount = () => {
        fetch(URL)
         .then(response => response.json())
         .then(data => {
             this.setState({
                 reviews: data.results
             })
         })
    }

    


    render() {
        if(this.state.reviews === []) {
            return(<div className="latest-movie-reviews">
            </div>)
        }else{
            return(
                <div className="latest-movie-reviews">
                <MovieReviews wasSearched={"false"} reviews={this.state.reviews} />
                </div>
            )
        }
    }
    

}           
    