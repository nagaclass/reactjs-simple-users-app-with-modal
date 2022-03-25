import Posts from "components/Posts";
import Todos from "components/Todos";
import Users from "components/Users";

const tabs = [
  {
    name: "users",
    title: "Users",
    component: <Users />,
  },
  {
    name: "posts",
    title: "Posts",
    component: <Posts />,
  },
  {
    name: "todos",
    title: "Todos",
    component: <Todos />,
  },
];

export default tabs;
