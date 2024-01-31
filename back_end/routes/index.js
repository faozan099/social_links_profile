const moduleLinks = require("../moduls/linksDB");
const multer = require("multer");
const { uploadAvatar } = require("../util/cloudinary");
const { responseFailed, responseSuccess } = require("../util/response");

const router = require("express").Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get("/", (req, res) => {
  try {
    responseSuccess(200, "testing node & express", "Welcome", res);
  } catch (error) {
    responseFailed(500, error.massage, res);
  }
});

router.get("/api/get", async (req, res) => {
  try {
    const data = await moduleLinks.find({});

    responseSuccess(200, data, "succes", res);
  } catch (error) {
    responseFailed(500, error.massage, res);
  }
});

router.post("/api/post", upload.single("image"), async (req, res) => {
    try {
      const { app, name, address, information } = req.body;
  
      if (!req.file) {
        return responseFailed(400, "no file uploaded", res);
      }
     
      const uploadCloudinary = await uploadAvatar(req.file.buffer);
      const newLink = new moduleLinks({
        app,
        name,
        address,
        information,
        image: uploadCloudinary.secure_url,
      });
    
      const savedLink = await newLink.save();
  
      console.log("Cloudinary Response: ", uploadCloudinary, res);
  
      const imageUrl = uploadCloudinary.secure_url;
      responseSuccess(201, { ...savedLink, imageUrl }, "success", res);
    } catch (error) {
      responseFailed(500, error.message, res);
    }
  });
module.exports = router;
