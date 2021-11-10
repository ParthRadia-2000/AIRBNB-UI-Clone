import React from "react";
import "../css/discover.css";
const Discover = () => {
  return (
    <div className="discover">
      <div className="discover_title">Discover things to do</div>
      <div className="discover_categories">
        <div className="discover_child">
          <div className="discover_image">
            <img
              class="discover_display_image"
              src="https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=240"
              alt="discover_image"
            />
          </div>
          <div className="discover_detail">
            <div className="detail_title">Experiences</div>
            <div className="detail_description">
              Find unforgettable activities near you.
            </div>
          </div>
        </div>
        <div className="discover_child">
          <div className="discover_image">
            <img
              class="discover_display_image"
              src="https://a0.muscache.com/im/pictures/0ce799cb-7553-4369-be9e-d0011e0ef636.jpg?im_w=240"
              alt="discover_image"
            />
          </div>
          <div className="discover_detail">
            <div className="detail_title">Experiences</div>
            <div className="detail_description">
              Find unforgettable activities near you.
            </div>
          </div>
        </div>
        <div className="discover_child">
          <div className="discover_image">
            <img
              class="discover_display_image"
              src="https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=240"
              alt="discover_image"
            />
          </div>
          <div className="discover_detail">
            <div className="detail_title">Experiences</div>
            <div className="detail_description">
              Find unforgettable activities near you.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
