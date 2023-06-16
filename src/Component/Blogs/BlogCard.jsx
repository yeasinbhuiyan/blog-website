/* eslint-disable react/prop-types */

const BlogCard = ({ blog }) => {
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img className="w-full h-96" src={blog.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{blog.subSegment}</h2>
                <p>{blog?.description}</p>
                
            </div>
        </div>
    );
};

export default BlogCard;