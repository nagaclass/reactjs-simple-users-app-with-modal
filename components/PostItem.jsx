import { txtSlicer } from "utils/func";

const PostItem = ({ selectUser, post }) => {
  const { id, title, body } = post;

  return (
    <div className="box" onClick={() => selectUser(post)}>
      <p className="mb-8">
        <span className="bold">Title: </span>
        {txtSlicer(title, 25)}
      </p>
      <p className="mb-8">
        <span className="bold">ID:</span> {id}
      </p>
      <p className="mb-8">
        <span className="bold">Description</span>: {txtSlicer(body, 25)}
      </p>
    </div>
  );
};

export default PostItem;
