module.exports = function () {
  return {
    layout: "post.njk",
    permalink: "blog/{{title | slugify}}/",
    tags: ["posts"]
  };
};