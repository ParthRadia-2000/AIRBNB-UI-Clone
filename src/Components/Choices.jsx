import React from "react";
import "../css/choices.css";
const Choices = () => {
  return (
    <div className="choices">
      <div className="choices_title">Live anywhere</div>
      <div className="choice_categories">
        <div className="choice_child">
          <div className="choice_image">
            <img
              className="choice_image_display"
              src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=240"
              alt="choice_image"
            />
          </div>
          <div className="choice_detail">Outdoor getaways</div>
        </div>
        <div className="choice_child">
          <div className="choice_image">
            <img
              className="choice_image_display"
              src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=240"
              alt="choice_image"
            />
          </div>
          <div className="choice_detail">Unique stayes</div>
        </div>
        <div className="choice_child">
          <div className="choice_image">
            <img
              className="choice_image_display"
              src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=240"
              alt="choice_image"
            />
          </div>
          <div className="choice_detail">Entire homes</div>
        </div>
        <div className="choice_child">
          <div className="choice_image">
            <img
              className="choice_image_display"
              src="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=240"
              alt="choice_image"
            />
          </div>
          <div className="choice_detail">Pets allowed</div>
        </div>
      </div>
    </div>
  );
};

export default Choices;
