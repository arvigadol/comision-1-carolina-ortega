import { useEffect, useState } from "react";
import MyPostItem from "./MyPostItem";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlinePlus, HiOutlinePlusCircle } from "react-icons/hi";

const MyPost = ({ posts, getPost }) => {
  // la información que NO vamos a modificar.
  const [search, setSearch] = useState("");
  const [filterPosts, setFilterPosts] = useState(posts);

  const navigate = useNavigate();

  useEffect(() => {
    const filtered = posts.filter((post) => {
      return post.title.toLowerCase().includes(search.toLowerCase());
    });

    setFilterPosts(filtered);
  }, [search, posts]);

  return (
    <div style={{ minWidth: "420px" }}>
      <Link to="/posts/new"  >
        <button className="create-button">
          <HiOutlinePlusCircle />
        </button>
      </Link>
      <input
        type="search"
        className="form-control"
        placeholder="Search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <>
        {filterPosts.map((post) => {
          return (
            <MyPostItem
              getPost={getPost}
              key={post._id}
              post={post}
              onClick={() => {
                navigate(`/posts/${post._id}`);
              }}
            />
          );
        })}
      </>
    </div>
  );
};

export default MyPost;