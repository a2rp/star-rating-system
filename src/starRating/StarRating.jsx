import { useState } from "react";
import { FaStar } from "react-icons/fa";
import styles from "./styles.module.scss";

const StarRating = () => {
    const [selectedRating, setSelectedRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);
    const visibleRating = hoveredRating || selectedRating;

    return (
        <div className={styles.ratingControl}>
            <div
                className={styles.starsList}
                role="group"
                aria-label="Choose a rating from one to five stars"
                onMouseLeave={() => setHoveredRating(0)}
                onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                        setHoveredRating(0);
                    }
                }}
            >
                {[1, 2, 3, 4, 5].map((starValue) => (
                    <button
                        className={
                            starValue <= visibleRating
                                ? styles.activeStar
                                : styles.starButton
                        }
                        key={starValue}
                        type="button"
                        aria-label={starValue + " star" + (starValue === 1 ? "" : "s")}
                        aria-pressed={starValue === selectedRating}
                        onMouseEnter={() => setHoveredRating(starValue)}
                        onFocus={() => setHoveredRating(starValue)}
                        onClick={() => setSelectedRating(starValue)}
                    >
                        <FaStar aria-hidden="true" />
                    </button>
                ))}
            </div>

            <p className={styles.ratingValue} aria-live="polite">
                <span>Rating</span>
                <strong>{selectedRating ? selectedRating + "/5" : "Not selected"}</strong>
            </p>
        </div>
    );
};

export default StarRating;