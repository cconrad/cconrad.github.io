let
  containsSpacesOrUppercase = (str) => {
    // Check for spaces or uppercase letters
    const regex = /\s|[A-Z]/;
    return regex.test(str);
  },
  slugify = require("slugify");

module.exports = function () {
  return {
    eleventyComputed: {
      permalink: (data) => "/notes/" + (containsSpacesOrUppercase(data.page.fileSlug) ? slugify(data.page.fileSlug) : data.page.fileSlug).toLowerCase() + "/",
      title: (data) => data.title || data.page.fileSlug,
    },
    layout: "note.njk",
    tags: ["notes"]
  };
};