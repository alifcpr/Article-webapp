import { toast } from "react-hot-toast";
import { editCommentApi } from "../../services/api";
import { useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";

const useEditComment = () => {
  const queryClient = useQueryClient();

  const { blogSlug: slug } = useParams();

  const {
    mutate: editComment,
    isLoading: editCommentLoading,
    isSuccess: completeEditComment,
  } = useMutation({
    mutationFn: ({ desc, commentId }: { desc: string; commentId: string }) =>
      editCommentApi({ desc, commentId }),
    onSuccess: () => {
      toast.success("Your comment has been successfully updated");
      queryClient.invalidateQueries({
        queryKey: ["blog-detail", slug],
      });
    },
  });

  return { editComment, editCommentLoading, completeEditComment };
};

export default useEditComment;
