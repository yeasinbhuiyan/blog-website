import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import NewsFeedsCard from './NewsFeedsCard';

const NewsFeeds = () => {
    const [allNews, setAllNews] = useState([])
    useEffect(() => {

        fetch('/newsfeed.json')
            .then(res => res.json())
            .then(data => setAllNews(data))
    }, [])
    return (
        <div >
            <div>
                <SectionTitle heading={"News Feed"}></SectionTitle>
               <div className='gap-5 p-16'>
               {
                    allNews && allNews.map(news => <NewsFeedsCard key={news._id} news={news}></NewsFeedsCard>)
                }
               </div>

            </div>
        </div>
    );
};

export default NewsFeeds;