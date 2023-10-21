
const AddCommentForm = () => {
  
  return (
    <div className="mt-6 border p-3 shadow-lg rounded-lg flex flex-col gap-y-4">
      <textarea className="w-full border-2 rounded-lg font-opensans p-2 focus:outline-primary" placeholder="Wrtie Your Comment"></textarea>
      <div className="flex justify-end items-center">
        <button className="font-opensans border-2 p-2 rounded-lg bg-primary text-white transition-all duration-300 font-semibold text-sm border-primary hover:bg-transparent hover:text-black ">Add Comment</button>
      </div>
    </div>
  );
};

export default AddCommentForm;
