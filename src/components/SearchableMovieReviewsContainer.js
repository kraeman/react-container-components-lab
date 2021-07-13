import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=ONAwnm3FMl8HSqYFSFH5CGxXNewvN9uN'

            
            
            
 export default class SearchableMovieReviewsContainer extends Component {
     state = {
         reviews: [],
         searchTerm: ''
     }     

    searchQuery = (e) => {
        e.preventDefault()
        fetch(URL + `&query=${this.state.searchTerm}`)
         .then(response => response.json())
         .then(data => {
             this.setState({
                 reviews: data.results
             })
             
             
         })
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }


     render() {
         return(
             <div className="searchable-movie-reviews">
                {/* <input value={this.state.searchTerm} onChange={this.handleChange}>
                    
                </input>
                <button onClick={this.searchQuery}>Search</button> */}

                <form onSubmit={this.searchQuery}>
                <label>
                    Search:
                    <input type="text" name="search" value={this.state.searchTerm} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit" />
                </form>


                <div className="latest-movie-reviews">
                    <MovieReviews wasSearched={"true"} reviews={this.state.reviews} />
                </div>
             </div>
         )
     }
}           
    