import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function FilterPosition() {
  return (
    <div className="px-4 py-3 text-sm cursor-pointer w-fit rounded-md flex gap-4 items-center font-medium border shadow-md text-gray-600">
      <div>Position</div>
      <ArrowDropDownIcon className="size-5" />
    </div>
  );
}

export default FilterPosition;
