/* eslint-disable react/prop-types */

import moment from "moment/moment";

// eslint-disable-next-line react/prop-types, no-unused-vars
const UpcommingEventCard = ({ upcommingEvent }) => {

    return (
        <div className="card md:p-6 p-5 h-80 w-80 md:w-full md:h-96 bg-base-100   image-full">
            <figure><img className="w-full" src={upcommingEvent?.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title md:text-3xl">{upcommingEvent?.title}</h2>
                <div>
                    <p className="text-xl">{upcommingEvent?.location}</p>
                    <p className="font-bold">{moment(upcommingEvent?.date).format('MMMM Do YYYY')}</p>
              </div>
               
            </div>
        </div>
    );
};

export default UpcommingEventCard;