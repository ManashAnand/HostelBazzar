import React from "react";
import Card from "@/components/custom/Card";

const AllItem = ({ allPost,hostelName }) => {
  console.log(allPost);
  return (
    <>
      <div className="flex justify-center items-center my-10">
        <div className=" xl:grid grid-cols-3 gap-4 w-[82%] flex flex-col justify-center items-center">
          {hostelName!= "All Hostel" ? allPost?.filter(item => item?.hostel == hostelName)?.map((product) => {
            return (
              <>
                <Card product={product} />
              </>
            );
          })    :

          allPost?.map((product) => {
            return (
              <>
                <Card product={product} />
              </>
            );
          })
        
        }
        </div>
      </div>
    </>
  );
};

export default AllItem;
