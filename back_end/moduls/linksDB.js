const mongoose = require("mongoose");

const linksSchema = mongoose.Schema(
  {
    image: {
      type: String,
    },
    name: {
      type: String,
    },
    address: {
      type: String,
    },
    information: {
      type: String,
    },
    app: [
      {
        name: String,
        link: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const moduleLinks = mongoose.model("social_links_profile", linksSchema);

module.exports = moduleLinks;
