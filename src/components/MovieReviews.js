import React from 'react'
const MovieReviews = (props) => {

    return(
        <ul className="review-list">
        
              {props.reviews.map(review => {
                return <li key={review.display_title + props.wasSearched + review.byline}>
                            <h6 className="review">
                                {review.summary_short}
                            </h6>
                        </li>  
              })}
          
        </ul>
    )
}

export default MovieReviews