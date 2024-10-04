const loadAllPost = async (category) => {
  if (category) {
    console.log(
      `https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`
    );
  } else {
    console.log(`https://openapi.programming-hero.com/api/retro-forum/posts`);
  }

  //   const response = await fetch(
  //     "https://openapi.programming-hero.com/api/retro-forum/posts"
  //   );
  //   const data = await response.json();
  //   console.log(data.posts);
};

loadAllPost();

const handleSearchByCategory = () => {
  const searchText = document.getElementById("searchPosts").value;
  loadAllPost(searchText);
};
