import Comment from "./Comment";
import { CommentType } from "../../types/types";

const Comments = ({
  allComments,
}: {
  allComments: CommentType[] | undefined;
}) => {
  console.log(allComments);
  return (
    <div className="mt-6 border p-2 shadow-lg rounded-lg">
      {allComments!.length > 0 ? (
        allComments?.map((comment) => <Comment commentInfo={comment} />)
      ) : (
        <h1 className="font-opensans text-xl xl:text-2xl font-bold">
          Comments (0)
        </h1>
      )}
    </div>
  );
};

export default Comments;
