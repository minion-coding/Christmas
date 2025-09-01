import Avatar from "../Avatar";

function ReviewItem({ data }) {
  return (
    <li className="hover:bg-gray-200 transition-colors duration-300 w-full">
      <div className="flex">
        <Avatar name={data.userName} />
        <p className="text-base font-light">{data.comment}</p>
      </div>
      <hr></hr>
    </li>
  );
}

export default ReviewItem;
