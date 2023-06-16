import { useEffect, useState } from "react";
import UpcommingEventCard from "./UpcommingEventCard";
import Marquee from "react-fast-marquee";
import SectionTitle from "../../Shared/SectionTitle";

const UpcommingEvents = () => {
    const [upcommingEvents, setUpcommingEvents] = useState([])
    useEffect(() => {
        fetch('/upcomingEvents.json')
            .then(res => res.json())
            .then(data => setUpcommingEvents(data))
    }, [])
    console.log(upcommingEvents)
    return (
        <div className="my-5">
         <div className="py-5">
         <SectionTitle heading={"Upcomming Events"}></SectionTitle>
         </div>

            <Marquee>
                {
                    upcommingEvents.map(upcommingEvent => <UpcommingEventCard key={upcommingEvent._id} upcommingEvent={upcommingEvent}></UpcommingEventCard>)
                }
            </Marquee>




        </div>
    );
};

export default UpcommingEvents;