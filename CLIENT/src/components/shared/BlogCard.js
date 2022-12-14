import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiFillLike } from "react-icons/ai";
import Button from "./Button";

const BlogCard = ({ blogData }) => {
    const [postDate, setPostDate] = useState("");

    useEffect(() => {
        const months = [
            "Jan",
            "Feb",
            "March",
            "April",
            "May",
            "June",
            "July",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        const date = new Date(blogData?.createdAt);
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();

        const tempDate = `${day}-${months[month]}-${year}`;
        setPostDate(tempDate);
    }, [blogData]);

    return (
        <div className="card shadow-xl group">
            <figure className="relative">
                <img
                    src={`${process.env.REACT_APP_BLOG_THUMBNAIL_BASE_URL}/${blogData?.postThumbnail}`}
                    alt="Shoes"
                />
                {/* tags */}
                <div className="absolute top-2 right-2 hidden group-hover:inline-block transition duration-300 ">
                    {blogData.postCategory.map((category) => {
                        return (
                            <span
                                key={`${Math.random() + category}`}
                                className="badge bg-secondary border-secondary text-base-100 capitalize ml-2"
                            >
                                {category}
                            </span>
                        );
                    })}
                </div>
            </figure>

            <div className="card-body">
                <h3 className="text-lg sm:text-xl font-medium text-secondary hover:text-primary">
                    {blogData?.postTitle.slice(0, 50)}...
                </h3>
                {/* like and view */}
                <div className="flex justify-end mb-1">
                    <p className="flex items-center flex-grow-0">
                        <span className=" text-secondary text-lg font-normal bg-transparent capitalize">
                            <AiOutlineEye />
                        </span>{" "}
                        <span className="text-primary text-sm font-normal capitalize">
                            {blogData?.postView}
                        </span>
                    </p>
                    <p className="flex items-center text-end flex-grow-0 ml-2">
                        <span className=" text-secondary text-lg font-normal bg-transparent capitalize">
                            <AiFillLike />
                        </span>{" "}
                        <span className="text-primary text-sm font-normal capitalize">
                            {blogData?.postLike}
                        </span>
                    </p>
                </div>
                <p className="">
                    <span className="badge text-primary text-xs font-normal capitalize">
                        {blogData?.authorName}
                    </span>{" "}
                    ||{" "}
                    <span className="badge text-primary text-xs font-normal capitalize">
                        {postDate}
                    </span>
                </p>

                {/* <p
                    className="text-primary text-base text-justify mt-6"
                    dangerouslySetInnerHTML={{
                        __html:,
                    }}
                ></p> */}
                <p className="text-primary text-base text-justify mt-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Facere maxime alias sunt assumenda sequi aliquam.
                    Dignissimos dolor consequatur maiores debitis.
                </p>
            </div>
            <div className=" flex justify-center mb-6">
                <Button
                    btnPath={`/singleBlog/${blogData?._id}`}
                    btnName="read more"
                />
            </div>
        </div>
    );
};

export default BlogCard;
