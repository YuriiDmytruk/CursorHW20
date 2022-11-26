import Post from "./Post.jsx";

import PostModel from "../models/postModel";

function Publications() {
  const ANAKIN_IMAGE =
    "https://imagez.tmz.com/image/b8/1by1/2021/10/25/b823cb5212504585a16a46faa55537db_xl.jpg";
  const RAY_IMAGE =
    "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

  const POSTS = [
    new PostModel(
      {
        name: "Anakin skywalker",
        photo: ANAKIN_IMAGE,
        nickname: "@dart_vader",
      },
      "WTF? Who is Ray? Why she is Skywalker? Luke...?",
      RAY_IMAGE,
      "26 feb."
    ),

    new PostModel(
      {
        name: "Anakin skywalker",
        photo: ANAKIN_IMAGE,
        nickname: "@dart_vader",
      },
      "WTF? Who is Ray? Why she is Skywalker? Luke...?",
      RAY_IMAGE,
      "26 feb."
    ),

    new PostModel(
      {
        name: "Anakin skywalker",
        photo: ANAKIN_IMAGE,
        nickname: "@dart_vader",
      },
      "WTF? Who is Ray? Why she is Skywalker? Luke...?",
      RAY_IMAGE,
      "26 feb."
    ),
  ];

  return (
    <div>
      {POSTS.map((e) => (
        <Post post={e} />
      ))}
    </div>
  );
}

export default Publications;
