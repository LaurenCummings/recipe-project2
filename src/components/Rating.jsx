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

    function calcEmptyStars() {
        const fullStars = calcFullStars();
        const halfStars = calcHalfStars();
        const emptyStars = 5 - fullStars - halfStars;
        return emptyStars;
    }

    const fullStars = new Array(calcFullStars()).fill(0);
    const halfStars = new Array(calcHalfStars());
    const emptyStars = new Array(calcEmptyStars());

    return (
        <div className="rating">
            <div className="stars">
                {fullStars.map((item, index) => (
                    <IoIosStar key={index} /> 
                ))}
            </div>
            <div className="count">
                <p>({count})</p>
            </div>
        </div>
    )
}

export default Rating;