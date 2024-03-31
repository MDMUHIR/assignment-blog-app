import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import fn from "./localhost";
export const useBlogStore = defineStore("blogging", () => {
  const posts = reactive([
    // {
    //   id: 1,
    //   title: "lojfsjjn fh ",
    //   body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    //   image: "",
    //   userId: 9,
    // },
  ]);

  let nextId = posts.length + 1;

  const currentlyEditing = ref(null);

  const createPostShow = ref(false);
  const editPostShow = ref(false);

  // Actions
  const getStorageData = () => {
    posts.length = 0;
    const storedposts = fn.getBlogStorage();
    storedposts.forEach((post) => {
      posts.push(post);
    });
    nextId = posts.length + 1;
  };
  getStorageData();

  const getPosts = () => {
    return posts;
  };
  const newPost = reactive({
    id: null,
    title: "",
    body: "",
    image: "",
    userId: null,
  });

  const createPost = () => {
    if (newPost.title == "") {
      alert("Please Enter A Title First");
    } else {
      let nextId = posts.length + 1;
      console.log(nextId);
      posts.unshift({
        id: nextId,
        title: newPost.title,
        body: newPost.body,
        image: newPost.image,
        userId: null,
      });
      newPost.title = "";
      newPost.body = "";
      newPost.image = "";
      nextId++;

      createPostShow.value = false;
    }
    fn.updateBlogStorage(posts);
  };
  const deletePost = (id) => {
    let tempPosts = JSON.parse(JSON.stringify(posts));
    posts.length = 0;
    tempPosts = tempPosts.map((post) => {
      if (post.id != id) {
        posts.push(post);
      }
    });
    console.log("Deleted" + id);
    fn.updateBlogStorage(posts);
  };
  const triggerUpdate = (blog) => {
    currentlyEditing.value = blog;
    console.log(currentlyEditing.value);
    editPostShow.value = true;
    fn.updateBlogStorage(posts);
  };
  const updateBlog = () => {
    currentlyEditing.value = null;
    editPostShow.value = false;
    fn.updateBlogStorage(posts);
  };
  // const updateBlog = async (blog) => {
  //   currentlyEditing.title = blog.title;
  //   currentlyEditing.body = blog.body;
  //   editPostShow.value = true;
  //   fn.updateBlogStorage(posts);
  // };
  // const saveState = () => {
  //   localStorage.setItem("authState", JSON.stringify(this));
  // };
  // const loadState = () => {
  //   const authState = localStorage.getItem("authState");
  //   if (authState) {
  //     Object.assign(this, JSON.parse(authState));
  //   }
  // };

  // loadState();

  return {
    posts,
    createPostShow,
    newPost,
    currentlyEditing,
    editPostShow,
    getPosts,
    createPost,
    deletePost,
    updateBlog,
    triggerUpdate,
  };
});
