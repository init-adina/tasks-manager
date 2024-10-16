import Button from "@shared/ui/Button";
import CallMadeIcon from "@mui/icons-material/CallMade";

function ProgressLeftInner() {
  return (
    <div className="left-inner-info- flex flex-col gap-4">
      <div className="text-lg text-white">Hi, Adina !</div>

      <div className="text-2xl font-semibold tracking-wide text-white">
        You have finished <br /> 3 projects this week!
      </div>

      <Button
        theme="outlined"
        className="mt-4"
      >
        <span>See All</span>
        <CallMadeIcon sx={{ width: "20px" }} />
      </Button>
    </div>
  );
}

export default ProgressLeftInner;
