import React from "react";
import useStyles from "./styles";

import avatar from "../../../../../assets/avatar.jpg";
import post from "../../../../../assets/postJS.jpeg";

//componentes
import PostCard from "../../../../../components/PostCard";

const posts = [
  {
    id: 1,
    autor: {
      id: 1,
      name: "Gabriel Barreto",
      username: "gbarreto98",
      avatar: avatar,
    },
    title: "JavaScript",
    description: "Aprendendo javascript na prática",
    date: "Aug 19, 2020",
    hashtags: "ReactJS, VueJS",
    image: post,
  },
  {
    id: 2,
    autor: {
      id: 2,
      name: "Gabriel Barreto",
      username: "gbarreto98",
      avatar: avatar,
    },
    title: "JavaScript",
    description: "Aprendendo javascript na prática",
    date: "Aug 19, 2020",
    hashtags: "ReactJS, VueJS",
    image: post,
  },
  {
    id: 3,
    autor: {
      id: 3,
      name: "Gabriel Barreto",
      username: "gbarreto98",
      avatar: avatar,
    },
    title: "JavaScript",
    description: "Aprendendo javascript na prática",
    date: "Aug 19, 2020",
    hashtags: "ReactJS, VueJS",
    image: post,
  },
];

function Feed() {
  const classes = useStyles();
  return (
    <div className={classes.feed}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
