module.exports = function () {
  return {
    eleventyComputed: {
      title: (data) => data.title || data.page.fileSlug,
    },
    layout: "note.njk", 
    tags: ["notes"]
  };
};