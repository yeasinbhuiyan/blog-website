import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';


const Blog = () => {
    const [segments, setSegments] = useState([])
    useEffect(() => {
        fetch('/blog2.json')
            .then(res => res.json())
            .then(data => setSegments(data))

    }, [])


    const segment1 = segments.filter(sf => sf.segment === 'Food and Cooking')
    const segment2 = segments.filter(sf => sf.segment === 'Travel and Adventure')

    const segment3 = segments.filter(sf => sf.segment === 'Health and Wellness')


    console.log(segment1 ,segment2,segment3 )
    return (
        <div>

            <Tabs>
                <TabList>
                    <Tab>
                        Food and Cooking
                    </Tab>

                    <Tab>
                        Travel and Adventure
                    </Tab>

                    <Tab>
                        Health and Wellness
                    </Tab>
                </TabList>

                <TabPanel>
                    <h1>Tab 1</h1>
                </TabPanel>


                <TabPanel>
                    <h1>tab 2 </h1>
                </TabPanel>
                <TabPanel>
                    <h1>tab 3 </h1>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Blog;