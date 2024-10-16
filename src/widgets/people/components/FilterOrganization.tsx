import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function FilterOrganization() {
  return (
    <div className="px-4 py-3 cursor-pointer bg-primary-50 text-sm w-fit text-primary-500 rounded-md flex gap-4 items-center font-medium">
      <div>Design Team</div>
      <ArrowDropDownIcon className="size-5" />
    </div>
  );
}

export default FilterOrganization;
