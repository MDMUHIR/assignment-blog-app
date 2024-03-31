const fn = {
  getLocalStorage: function (key) {
    return localStorage.getItem(key);
  },
  setlocalStorage: function (key, data) {
    localStorage.setItem(key, data);
  },

  updateBlogStorage: function (data) {
    this.setlocalStorage("vuejsblogs", JSON.stringify(data));
  },

  getBlogStorage: function () {
    const blogs = this.getLocalStorage("vuejsblogs");
    return blogs === null ? [] : JSON.parse(blogs);
  },
};

export default fn;
