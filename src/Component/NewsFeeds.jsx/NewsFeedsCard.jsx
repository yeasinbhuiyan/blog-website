/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { FaEye } from "react-icons/Fa";

const NewsFeedsCard = ({ news }) => {
    const { _id, rating, total_view, title, author, details, image_url } = news

    return (

        <div className="card my-10 lg:card-side bg-base-100 shadow-xl">
            <figure><img className="w-[700px] h-[250px]" src={image_url} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>     {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}<Link  className="link-primary underline" to={'/'}>
                    ...read more

                </Link></>}</p>

                <div className="card-actions  flex justify-between">
                    <div className="flex items-center">
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={Math.round(rating?.number || 0)}
                            readOnly />
                        <span className='ms-2'>{rating?.number}</span>

                    </div>
                    <div className="flex items-center">



                        <FaEye></FaEye> <span className='me-1'>{total_view}</span>

                    </div>

                </div>
            </div>
        </div>


    );
};

export default NewsFeedsCard;