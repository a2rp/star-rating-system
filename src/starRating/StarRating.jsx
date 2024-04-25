import React, { useRef, useState } from "react";
import styles from "./styles.module.scss";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
    const star1Ref = useRef(null);
    const star2Ref = useRef(null);
    const star3Ref = useRef(null);
    const star4Ref = useRef(null);
    const star5Ref = useRef(null);
    const [clickedRatingValue, setClickedRatingValue] = useState(0);
    // const [ratingValue, setRatingValue] = useState(0);

    const handleStarMouseOver = (starValue) => {
        for (let i = 1; i <= 5; ++i) {
            if (i <= starValue) {
                document.querySelector(".star" + i).style.cssText = `color: yellow`;
            } else {
                document.querySelector(".star" + i).style.cssText = `color: #000`;
            }
        }
    };

    const handleULMouseOut = () => {
        if (clickedRatingValue > 0) {
            for (let i = 1; i <= 5; ++i) {
                if (i <= clickedRatingValue) {
                    document.querySelector(".star" + i).style.cssText = `color: yellow`;
                } else {
                    document.querySelector(".star" + i).style.cssText = `color: #000`;
                }
            }
        } else {
            for (let i = 1; i <= 5; ++i) {
                document.querySelector(".star" + i).style.cssText = `color: #000`;
            }
        }
    };

    const handleStarClick = (starValue) => {
        // setRatingValue(ratingValue => starValue);
        setClickedRatingValue(clickedRatingValue => starValue);
    };

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.heading}>Star rating system</div>

                <div className={styles.starsContainer}>
                    <ul className={styles.starsList} onMouseOut={handleULMouseOut}>
                        <li><FaStar className={`${styles.star} star star1`}
                            onMouseOver={() => handleStarMouseOver(1)} onClick={() => handleStarClick(1)} /></li>
                        <li><FaStar className={`${styles.star} star star2`}
                            onMouseOver={() => handleStarMouseOver(2)} onClick={() => handleStarClick(2)} /></li>
                        <li><FaStar className={`${styles.star} star star3`}
                            onMouseOver={() => handleStarMouseOver(3)} onClick={() => handleStarClick(3)} /></li>
                        <li><FaStar className={`${styles.star} star star4`}
                            onMouseOver={() => handleStarMouseOver(4)} onClick={() => handleStarClick(4)} /></li>
                        <li><FaStar className={`${styles.star} star star5`}
                            onMouseOver={() => handleStarMouseOver(5)} onClick={() => handleStarClick(5)} /></li>
                    </ul>

                    <div className={styles.ratingValue}>Rating: {clickedRatingValue}/5</div>
                </div>

            </div>
        </div>
    )
}

export default StarRating;

