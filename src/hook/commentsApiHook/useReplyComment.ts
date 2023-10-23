import { useMutation, useQueryClient } from "react-query";
import { createNewCommentApi } from "../../services/api";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";

const useReplyComment = () => {
  const queryClient = useQueryClient();
  const { blogSlug } = useParams();

  const {
    mutate: replyComment,
    isLoading: replyCommentLoading,
    isSuccess: completeReplyComment,
  } = useMutation({
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
      toast.success("Your reply comment is sent successfully");
      queryClient.invalidateQueries({
        queryKey: ["blog-detail", blogSlug],
      });
    },
    onError: () => {
      toast.error("there is an error , try again");
    },
  });

  return { replyComment, replyCommentLoading, completeReplyComment };
};

export default useReplyComment;
