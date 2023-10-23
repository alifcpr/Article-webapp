import { useMutation, useQueryClient } from "react-query";
import { deleteCommentApi } from "../../services/api";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";

const useDeleteComment = () => {
  const queryClient = useQueryClient();

  const { blogSlug: slug } = useParams();

  const {
    mutate: deleteComment,
    isLoading: deleteCommentLoaidng,
    isSuccess: completeDeleteComment,
  } = useMutation({
    mutationFn: ({ commentId }: { commentId: string }) =>
      deleteCommentApi({ commentId }),
    onSuccess: () => {
      toast.success("Your comment has been successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["blog-detail", slug],
      });
    },
    onError: () => {
      toast.error("There is an error , try again");
    },
  });

  return { deleteComment, deleteCommentLoaidng, completeDeleteComment };
};

export default useDeleteComment;
