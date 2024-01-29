const cloudinary = require("cloudinary").v2;

const uploadAvatar = async (fileBuffer) => {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });

  const options = {
    resource_type: "image",
    public_id: "profile/avatar" + Date.now(),
    overwrite: true,
  };

  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(options, (error, result) => {
        if (error) reject(error);
        resolve(result);
      })
      .end(fileBuffer);
  });
};

module.exports = {
    uploadAvatar
}