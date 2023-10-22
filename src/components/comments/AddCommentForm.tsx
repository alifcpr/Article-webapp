import { useMutation } from "react-query";
import { createNewCommentApi } from "../../services/api";
import { BlogDetailType } from "../../types/types";
import { useState } from "react";
import Loading from "../Loadings/Loading";
import { toast } from "react-hot-toast";
import Landing from "../../pages/Landing";

type AddCommentFormProps = {
  allBlogInfo: BlogDetailType | undefined;
};
const AddCommentForm = ({ allBlogInfo }: AddCommentFormProps) => {
  const { slug } = allBlogInfo!;
  const [commentText, setCommentText] = useState<string>("");

  const { mutate: createComment, isLoading: createCommentLoading } = useMutation({
    mutationFn: ({
      desc,
      slug,
      parent,
      replayOnUser,
    }: {
      desc: string;
      slug: string;
      parent: string | null;
      replayOnUser: string | null;
    }) => createNewCommentApi({ desc, slug, parent, replayOnUser }),
    onSuccess: () => {
      toast.success("Your comment is sent successfully");
    },
    onError: () => {
      toast.error("there is an error , try again");
    },
  });

  const createCommentHandler = () => {
    createComment({
      desc: commentText,
      slug: slug,
      parent: null,
      replayOnUser: null,
    });
  };

  console.log(createCommentLoading);

  return (
    <div className="mt-6 border p-3 shadow-lg rounded-lg flex flex-col gap-y-4">
      <textarea
        className="w-full border-2 rounded-lg font-opensans p-2 focus:outline-primary"
        placeholder="Wrtie Your Comment"
        value={commentText}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setCommentText(e.target.value)
        }
      ></textarea>
      <div className="flex justify-end items-center">
        <button
          onClick={createCommentHandler}
          disabled={createCommentLoading}
          className="font-opensans disabled:bg-opacity-80 border-2 p-2 rounded-lg bg-primary text-white transition-all duration-300 font-semibold text-sm border-primary hover:bg-transparent hover:text-black "
        >
          {createCommentLoading ? <Loading /> : "Add Comment"}
        </button>
      </div>
    </div>
  );
};

export default AddCommentForm;
