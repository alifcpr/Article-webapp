import React from "react";
import TagBadge from "./TagBadge";

const TagsContainer = () => {
  const tags = ["Design", "User Expperience", "User Interfaces"];

  return (
    <div className="flex flex-col w-full md:flex-row md:items-center md:gap-x-3">
      <h1 className="font-opensans text-dark-light font-bold italic">
        Popular Tags :
      </h1>
      <div className="flex flex-wrap gap-2 items-center justify-start mt-2 md:mt-0">
        {tags.map((tag , index) => (
          <TagBadge key={index}>{tag}</TagBadge>
        ))}
      </div>
    </div>
  );
};

export default TagsContainer;
