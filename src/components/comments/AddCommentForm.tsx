import { useMutation, useQueryClient } from "react-query";
import { createNewCommentApi } from "../../services/api";
import { BlogDetailType } from "../../types/types";
import { useState, useEffect } from "react";
import Loading from "../Loadings/Loading";
import { toast } from "react-hot-toast";
import Landing from "../../pages/Landing";
import useAuth from "../../hook/useAuth";
import CommentForm from "./CommentForm";

type AddCommentFormProps = {
  allBlogInfo: BlogDetailType | undefined;
};
const AddCommentForm = ({ allBlogInfo }: AddCommentFormProps) => {
  const { slug } = allBlogInfo!;
  const [commentText, setCommentText] = useState<string>("");

  const { auth } = useAuth();

  const queryClient = useQueryClient();
  const { mutate: createComment, isLoading: createCommentLoading } =
    useMutation({
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
        setCommentText("");
        queryClient.invalidateQueries({
          queryKey: ["blog-detail", slug],
        });
      },
      onError: () => {
        toast.error("there is an error , try again");
      },
    });

  const createCommentHandler = () => {
    if (auth.login) {
      createComment({
        desc: commentText,
        slug: slug,
        parent: null,
        replayOnUser: null,
      });
    } else {
      toast.error("You must create an account to comment");
    }
  };

  return (
    <div className="mt-6 border p-3 shadow-lg rounded-lg flex flex-col gap-y-4">
      <CommentForm
        btnLabel="Add Comment"
        changeValueFunc={setCommentText}
        loadingState={createCommentLoading}
        showCancel={false}
        submitFunc={() => createCommentHandler()}
        value={commentText}
        type="Add_Comment"
        placeHolderText="Write Your Comment"
      />
    </div>
  );
};

export default AddCommentForm;
