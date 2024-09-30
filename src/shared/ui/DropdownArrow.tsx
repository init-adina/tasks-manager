import { ArrowBackIosNewRounded } from "@mui/icons-material";

function DropdownArrow() {
  return (
    <div className="icon grid place-items-center">
      <ArrowBackIosNewRounded
        sx={{ width: "12px" }}
        className="rotate-90 -mr-1"
      />
    </div>
  );
}

export default DropdownArrow;
