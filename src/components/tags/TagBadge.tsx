import React from "react";

type TagBadgeProps = { children: React.ReactNode };

const TagBadge = ({ children }: TagBadgeProps) => {
  return (
    <div className="py-2 px-4 bg-dark-light bg-opacity-10 text-sm text-primary font-opensans font-bold italic rounded-md">
      {children}
    </div>
  );
};

export default TagBadge;
