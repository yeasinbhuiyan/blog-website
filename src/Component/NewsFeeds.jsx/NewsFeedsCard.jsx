/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const NewsFeedsCard = ({ news }) => {
    const { _id, rating, total_view, title, author, details, image_url } = news

    return (

        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="w-96 h-full" src={image_url} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>     {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}<Link className="link-primary underline" to={`/news/${_id}`}>
                    ...read more

                </Link></>}</p>

                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div> */}
            </div>
        </div>


    );
};

export default NewsFeedsCard;