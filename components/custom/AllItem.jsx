import React from "react";
import Card from "@/components/custom/Card";

const AllItem = ({ allPost }) => {
  console.log(allPost);
  return (
    <>
      <div className="flex justify-center items-center my-10">
        <div className=" xl:grid grid-cols-3 gap-4 w-[82%] flex flex-col justify-center items-center">
          {allPost?.map((product) => {
            return (
              <>
                <Card product={product} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllItem;
