import React from "react";

type Props = {
  value: string;
  title: string;
};

const DestinationCard = ({ value, title }: Props) => {
  return (
    <div className="flex flex-col p-5 max-w-[166px] max-h-[178px] bg-white rounded-[14px] max-sm:m-1">
      <span className="text-[46px] font-semibold text-primary-orange">
        {value}
      </span>
      <span className="text-[21px] text-primary-gray">{title}</span>
    </div>
  );
};

export default DestinationCard;
