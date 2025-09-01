import { RiHeartLine } from "@remixicon/react";

function NewButton() {
  return (
    <button className="absolute bottom-0 right-0 w-fit p-1 bg-first-color hover:bg-first-color-alt rounded-xs rounded-br-xl">
      <RiHeartLine size={24} color="white" />
    </button>
  );
}

export default NewButton;
