import React from "react";
import Star from "./RatingStars";
import StarClickable from "./RatingStarsClickable";

export default function StarWrapper(props) {
  const { rating, clickable, ...rest } = props;

  const stars = [];

  const populateShowStars = () => {
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) stars.push(<Star shape={"full"} />);
      if (i > rating) stars.push(<Star shape={"empty"} />);
    }
  };

  //   right now this is not used - callback need to be fixed
  const populateClickableStars = () => {
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <StarClickable
            className="clickable-stars"
            clbk={props.handleRate}
            key={i}
            index={i}
            shape={"full"}
          />
        );
      } else {
        stars.push(
          <StarClickable
            className="clickable-stars"
            clbk={props.handleRate}
            key={i}
            index={i}
            shape={"empty"}
          />
        );
      }
    }
  };

  if (clickable === false) {
    populateShowStars();
  } else if (clickable === true) {
    populateClickableStars();
  }

  return <div className="stars">{stars}</div>;
}
