import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BoardingBuildingImage from "../PostAd/assets/Boarding-Building.jpg";
import RentalHouseImage from "../PostAd/assets/Rental-House.webp";
import BoardingRoomImage from "../PostAd/assets/Boarding-Room.jpg";

const PostAd = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    // Navigate to the corresponding route based on the selected category
    navigate(`/create-listing/${category.toLowerCase()}`);
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "80vh", // Set your desired height
    justifyContent: "center",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px", // Adjust the space between the buttons and profile link
  };

  const buttonStyle = {
    width: "400px", // Increase the width for larger buttons
    height: "fit-content", // Adjust height based on content
    margin: "15px", // Increase the margin for spacing between buttons
    border: "2px solid #4A5568", // Set your desired border color
    borderRadius: "10px", // Set your desired border radius
    overflow: "hidden",
    transition: "transform 0.2s ease-in-out",
    textAlign: "center",
  };

  const imageStyle = {
    width: "100%", // Ensure the image takes up the full width of the button
    height: "auto", // Maintain the aspect ratio of the image
  };

  const textStyle = {
    marginTop: "10px", // Space between image and text
    fontSize: "20px",
    fontWeight: "Bold",
  };


  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center mt-20 font-bold">
        Select Listing Category
      </h1>
      <div style={containerStyle}>
        <div style={buttonContainerStyle}>
          <button
            className="mr-3"
            style={buttonStyle}
            onClick={() => handleCategoryClick("boarding-house")}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.15)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={BoardingBuildingImage}
              alt="Boarding Building"
              style={imageStyle}
            />
            <div style={textStyle}>Boarding Building</div>
          </button>
          <button
            className="mx-3"
            style={buttonStyle}
            onClick={() => handleCategoryClick("rental-house")}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.15)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={RentalHouseImage}
              alt="House Sell or Rent"
              style={imageStyle}
            />
            <div style={textStyle}>House Sell or Rent</div>
          </button>
          <button
            className="ml-3"
            style={buttonStyle}
            onClick={() => handleCategoryClick("boarding-room")}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.15)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={BoardingRoomImage}
              alt="Boarding Room"
              style={imageStyle}
            />
            <div style={textStyle}>Boarding Room</div>
          </button>
        </div>
      </div>
    </main>
  );
};

export default PostAd;
