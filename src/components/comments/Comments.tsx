import Comment from "./Comment";
import { CommentType } from "../../types/types";

const Comments = ({
  allComments,
}: {
  allComments: CommentType[] | undefined;
}) => {

  const repliesCount = allComments?.reduce((per, curr) => {
    return curr.replies.length + per;
  }, 0);

  const calculateAllComments = allComments!.length + repliesCount!;
  console.log(calculateAllComments);

  return (
    <div className="mt-6 border p-2 shadow-lg rounded-lg">
      <h1 className="font-opensans mb-8 text-xl xl:text-2xl font-bold">
        Comments ({calculateAllComments})
      </h1>
      {allComments!.length > 0 ? (
        allComments?.map((comment) => <Comment commentInfo={comment} />)
      ) : (
        <h1 className="font-opensans text-xl text-center text-red-500 my-4 xl:text-2xl font-semibold">
          There is no any comments
        </h1>
      )}
    </div>
  );
};

export default Comments;
