import React, { Component, useContext, useState } from "react";
import "./../styles/rating.css";

// export default function Reviews({ reviews }) {
//   return (
//         <div className="right-side">
//             <ul>
//             {reviews.length ? (
//                 reviews.map((r, i) => <li key={i}>
//                     {r.body}
//                     </li>)
//             ) : (
//                 <p id="no-reviews-message">You are the first to review!!</p>
//             )}
//             </ul>
//         </div>
//   );
// }

export default function Reviews({ reviews }) {
    return (
          <div className="right-side">
              <ul>
              {reviews.length ? (
                  reviews.map((r, i) => <li key={i}>
                      <div className="info-user-review">
                            <div className="rating-area">
                                {/* {r.rating} */}
                                stars
                            </div>
                            <div className="comment">
                                {r.body}
                            </div>
                      </div>
                      
                      </li>)
              ) : (
                  <p id="no-reviews-message">You are the first to review!!</p>
              )}
              </ul>
          </div>
    );
  }
