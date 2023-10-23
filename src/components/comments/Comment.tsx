import useAuth from "../../hook/useAuth";
import { CommentType } from "../../types/types";
import stables from "../constants/stables";
import { useState, useEffect } from "react";
import Loading from "../Loadings/Loading";
import { useParams } from "react-router-dom";
import useDeleteComment from "../../hook/commentsApiHook/useDeleteComment";
import useEditComment from "../../hook/commentsApiHook/useEditComment";
import useReplyComment from "../../hook/commentsApiHook/useReplyComment";
import CommentForm from "./CommentForm";

const Comment = ({ commentInfo }: { commentInfo: CommentType }) => {
  console.log(commentInfo);

  /* vars */
  const [replayText, setReplayText] = useState<string>("");
  const [openReplay, setOpenReplay] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(commentInfo?.desc);
  const [openEdit, setOpenEdit] = useState<boolean>(false);

  /* url Params */
  const { blogSlug: slug } = useParams();

  /* context */
  const { auth } = useAuth();

  /* hooks  */
  const { deleteComment, deleteCommentLoaidng } = useDeleteComment();
  const { editComment, editCommentLoading, completeEditComment } =
    useEditComment();
  const { replyComment, replyCommentLoading, completeReplyComment } =
    useReplyComment();

  useEffect(() => {
    completeEditComment && setOpenEdit(false);
    completeReplyComment && setOpenReplay(false);
  }, [completeEditComment, completeReplyComment]);

  useEffect(() => {
    /* handle commentForm open state */
    if (openEdit) {
      setOpenReplay(false);
    }
    if (openReplay) {
      setOpenEdit(false)
    }
  }, [openEdit, openReplay]);

  /* handler funcs */
  const deleteCommentHandler = () => {
    deleteComment({ commentId: commentInfo?.id });
  };

  const editCommentHandler = () => {
    editComment({ desc: editText, commentId: commentInfo?.id });
    console.log("run here");
  };

  const replyCommentHandler = () => {
    replyComment({
      desc: replayText,
      parent: !!commentInfo?.parent ? commentInfo?.parent : commentInfo?._id,
      slug: slug!,
      replayOnUser: commentInfo?._id,
    });
  };

  return (
    <div className="flex gap-x-4 w-full bg-gray-100 rounded-lg mt-3 p-3">
      <div className="w-10 h-10 rounded-full bg-red-500 overflow-hidden md:w-12 md:h-12 xl:w-14 xl:h-14">
        <img
          src={stables.UPLOAD_FOLDER_BASE_URL + commentInfo.user.avatar}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-y-4 flex-1">
        <div className="flex flex-col gap-y-2 items-start justify-between">
          <div>
            <h1 className="text-sm font-semibold md:text-base xl:text-md">
              {commentInfo?.user?.name}
            </h1>
            <p className="text-sm text-slate-500 md:text-base xl:text-md">
              {new Date(commentInfo?.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
              })}
            </p>
          </div>
          {openEdit ? (
            <CommentForm
              btnLabel="Edit Comment"
              type="Edit_Comment"
              showCancel={true}
              value={editText}
              submitFunc={editCommentHandler}
              changeValueFunc={setEditText}
              loadingState={
                editCommentLoading ||
                replyCommentLoading ||
                deleteCommentLoaidng
              }
              changeShowFromState={setOpenEdit}
              showForm={openEdit}
              placeHolderText="Edit Your Comment"
            />
          ) : (
            <p className="mt-2 font-opensans text-slate-700 text-justify text-sm md:text-base">
              {commentInfo.desc}
            </p>
          )}

          {auth.login ? (
            <div className="flex gap-x-7 mt-5 font-opensans">
              <button
                disabled={
                  deleteCommentLoaidng ||
                  editCommentLoading ||
                  replyCommentLoading
                }
                onClick={() => setOpenReplay((prev) => !prev)}
                className="flex gap-x-1 items-center hover:text-primary disabled:hover:text-black disabled:hover:cursor-not-allowed text-sm disabled:bg-opacity-70 md:text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 md:w-6 md:h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
                <span className="font-semibold">Reply</span>
              </button>
              {auth.userId === commentInfo?.user?._id && (
                <button
                  disabled={
                    deleteCommentLoaidng ||
                    editCommentLoading ||
                    replyCommentLoading
                  }
                  onClick={() => setOpenEdit((prev) => !prev)}
                  className="flex gap-x-1 items-center hover:text-slate-500 disabled:hover:text-black disabled:hover:cursor-not-allowed  disabled:bg-opacity-70 text-sm md:text-base"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 md:w-6 md:h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                  <span className="font-semibold">Edit</span>
                </button>
              )}
              {auth.userId === commentInfo?.user?._id && (
                <button
                  disabled={
                    deleteCommentLoaidng ||
                    editCommentLoading ||
                    replyCommentLoading
                  }
                  onClick={deleteCommentHandler}
                  className={`flex gap-x-1 items-center hover:text-red-500 disabled:hover:text-black disabled:hover:cursor-not-allowed  disabled:bg-opacity-70 text-sm md:text-base ${
                    deleteCommentLoaidng && "bg-red-500 p-2 rounded-md"
                  }`}
                >
                  {deleteCommentLoaidng ? (
                    <Loading />
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 md:w-6 md:h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                      <span className="font-semibold">Delete</span>
                    </>
                  )}
                </button>
              )}
            </div>
          ) : null}
        </div>
        {openReplay && (
          <CommentForm
            btnLabel="Reply Comment"
            type="Reply_Comment"
            showCancel={true}
            value={replayText}
            submitFunc={replyCommentHandler}
            changeValueFunc={setReplayText}
            loadingState={
              editCommentLoading || replyCommentLoading || deleteCommentLoaidng
            }
            changeShowFromState={setOpenReplay}
            showForm={openReplay}
            placeHolderText={`Reply To ${commentInfo?.user?.name}`}
          />
        )}
        <div>
          <div>
            {commentInfo?.replies?.map((comment) => (
              <Comment commentInfo={comment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
