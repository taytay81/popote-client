import React, { Component, useContext, useState } from "react";
import "./../styles/rating.css";
import { useAuth } from "../auth/useAuth";
import UserContext from "../auth/UserContext";

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
    useAuth();
    const { currentUser } = useContext(UserContext);
    return (
          <div className="right-side">
              <h2>Reviews</h2>
              <ul>
              {reviews.length ? (
                  reviews.map((r, i) => <li key={i}>
                      <div className="info-user-review">
                            <div className="user-comment">
                                <div className="user-name">
                                    {currentUser.firstname} {currentUser.lastname}
                                </div>
                                <div className="rating-area">
                                    {/* {r.rating} */}
                                    stars
                                </div>
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
