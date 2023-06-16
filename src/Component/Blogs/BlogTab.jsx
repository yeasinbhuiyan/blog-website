/* eslint-disable react/prop-types */

import BlogCard from "./BlogCard";

const BlogTab = ({ blogs }) => {
    return (
        <div className='grid md:grid-cols-3 gap-8  p-20 '>
            {
                blogs.map(blog => <BlogCard key={blog.subSegment} blog={blog}></BlogCard>)
            }
        </div>
    );
};

export default BlogTab;