import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io';

function Rating({ rating, count }) {

    function calcFullStars() {
        const fullStars = Math.trunc(rating);
        return fullStars;
    }

    function calcHalfStars() {
        if (rating - Math.trunc(rating) >= 0.5) {
            return 1;
        } else {
            return 0;
        }
    }

    return (
        <div className="rating">
            <div className="stars">
                <p>{calcFullStars()}</p>
                <p>{calcHalfStars()}</p>
            </div>
            <div className="count">
                <p>({count})</p>
            </div>
        </div>
    )
}

export default Rating;