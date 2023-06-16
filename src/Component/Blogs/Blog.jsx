import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import BlogTab from "./BlogTab";


const Blog = () => {
    const [segments, setSegments] = useState([])
    useEffect(() => {
        fetch('/blog.json')
            .then(res => res.json())
            .then(data => setSegments(data))

    }, [])


    const segment1 = segments.filter(sf => sf.segment === 'Food and Cooking')
    const segment2 = segments.filter(sf => sf.segment === 'Travel and Adventure')

    const segment3 = segments.filter(sf => sf.segment === 'Health and Wellness')


    console.log(segment1, segment2, segment3)
    return (
        <div className="py-10">

            <Tabs>
                <TabList>
                   <div className="flex px-10 mx-auto">
                   <Tab>
                        Food and Cooking
                    </Tab>

                    <Tab>
                        Travel and Adventure
                    </Tab>

                    <Tab>
                        Health and Wellness
                    </Tab>
                   </div>
                </TabList>

                <TabPanel>
                    <BlogTab blogs={segment1}></BlogTab>
                </TabPanel>


                <TabPanel>
                    <BlogTab blogs={segment2}></BlogTab>
                </TabPanel>
                <TabPanel>
                    <BlogTab blogs={segment3}></BlogTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Blog;