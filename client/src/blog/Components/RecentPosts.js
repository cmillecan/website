import React from "react";
import "./RecentPosts.css";
import samplePic1 from "../../images/samplepic1.webp";
import samplePic2 from "../../images/samplepic2.jpg";

const RecentPosts = () => {
  return (
    <div className="recent-posts-container">
      <div className="recent-posts">
        <h4>Recent Posts</h4>
        <p>See All</p>
      </div>
      <div className="divider">
        <div className="posts-thumbnail-div">
          <div className="post-thumbnail">
            <div className="post-image">
              <img className="recent-post-img" src={samplePic2} alt="sample" />
            </div>
            <div className="recent-post-title">
              <h3>a day at the san francisco zoo</h3>
            </div>
          </div>
          <div className="post-thumbnail">
            <div className="post-image">
              <img className="recent-post-img" src={samplePic1} alt="sample" />
            </div>
            <div className="recent-post-title">
              <h3>my favorite pottery</h3>
            </div>
          </div>
          <div className="post-thumbnail">
            <div className="post-image">
              <img className="recent-post-img" src={samplePic2} alt="sample" />
            </div>
            <div className="recent-post-title">
              <h3>traveling again</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
