const db = require("../db");

const CreateBoardingHouse = async (formData) => {
  let connection;

  try {
    connection = await db.getConnection();
    await connection.beginTransaction();

    //add data to the accomodation table
    const result1 = await connection.query(
      "INSERT INTO accommodationtb (district,address_line1,address_line2,owner_id) VALUES(?,?,?,?)",
      [
        formData.district,
        formData.addressLine1,
        formData.addressLine2,
        formData.owner_id,
      ]
    );

    //retreive the postID
    const post_ID = result1[0].insertId;

    //add data to the price_deatail table
    await connection.query(
      "INSERT INTO price_detailstb (advertised_price,post_id) VALUES(?,?)",
      [formData.price, post_ID]
    );
    //add data to the boarding_room table
    await connection.query(
      "INSERT INTO boarding_roomstb (no_bed,description,no_tenants,is_kitchen,bath_rooms,room_size,post_id) VALUES(?,?,?,?,?,?,?)",
      [
        formData.beds,
        formData.description,
        formData.tenant,
        formData.kitchen,
        formData.bathroom,
        formData.size,
        post_ID,
      ]
    );

    await connection.commit();
    connection.release();
    console.log("transaction is succesffuly complete postid is" + post_ID);

    return {
      success: true,
      message: "Transaction is Complete",
      post_ID: post_ID,
    };
  } catch (err) {
    await connection.rollback();
    console.log("Transaction are roolBack to the connection erros", err);
    return { success: false, message: "Transaction failed:" + err.message };
  } finally {
    connection.release();
  }
};

const UploadImageBoardingHouse = async (ImageData, post_ID) => {
  try {
    await db.query(
      "INSERT INTO boarding_room_imgtb (room_inside_img1,washroom_img,kitchen_img,room_inside_img2,room_outside_img1,room_outside_img2,room_id) VALUES (?,?,?,?,?,?,?)",
      [
        ImageData.roomImageFilename,
        ImageData.washRoomImageFilename,
        ImageData.kitchenImageFilename,
        ImageData.bedImageFilename,
        ImageData.boardingHouseImageFilename,
        ImageData.additionalImageFilename,
        post_ID,
      ]
    );
    console.log("image upload Succesfuuly");
    return { success: true, message: "Image Upload Succesfully" };
  } catch (err) {
    console.log(err);
    return { success: false, message: "Image upload error" + err.message };
  }
};

module.exports = {
  CreateBoardingHouse,
  UploadImageBoardingHouse,
};
