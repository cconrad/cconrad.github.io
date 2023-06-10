require("dotenv").config();

module.exports = {
  // Website title, shown in HTML <title>
  title: "Claus Conrad",
  // Website title, shown everywhere else
  prettyTitle: "{ claus.conrad }",
  // Site URL to generate absolute URLs. Used across the board.
  url: process.env.URL || "https://www.clausconrad.com",
  // Profile image for left sidebar
  image: "/assets/images/sidebar_profile.png",
  // Image alt text for left sidebar
  imageAlt: "Picture of Claus Conrad (the blog author)",
  // Author name, shown in left sidebar, and used in JSON-LD
  author: "Claus Conrad",
  // Site description, shown below site image (optional)
  description: "",
  // OpenGraph default image, in case you don't have an `image`
  // set in your Markdown frontmatter; relevant for social
  // sharing.
  openGraphDefaultImage: "/assets/images/opengraph.jpg",
  // GitHub ID (optional, remove it not needed), used for link in the left sidebar
  socialGitHub: "cconrad",
  // LinkedIn ID  (optional, remove it not needed), used for link in the left sidebar
  socialLinkedIn: "clausconrad"
};
