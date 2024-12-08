import Headline from "@shared/ui/Headline";
import Input from "@shared/ui/input/Input";
import { cn } from "@shared/utils/cn";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@shared/ui/Button";

interface AddProjectProps {
  onClose: () => void;
}

function AddProject({ onClose }: AddProjectProps) {
  return (
    <>
      <div className="dark-overlay fixed inset-0 bg-black/30 z-10"></div>

      <div
        className={cn(
          "add-task flex flex-col gap-4",
          "absolute inset-0 z-20 mx-auto my-auto",
          "bg-white px-6 py-10 w-1/3 h-fit rounded-md"
        )}
      >
        <Headline
          size="sm"
          className="font-medium"
        >
          Add Project
        </Headline>

        <form className="form-wrapper flex flex-col gap-2">
          <Input
            label="Name"
            type="text"
            className="border py-3"
            labelClass="items-start"
          />

          <Input
            label="Description"
            type="text"
            className="border py-3"
            labelClass="items-start"
          />

          <Input
            label="Deadline"
            type="date"
            className="border py-3"
            labelClass="items-start"
          />

          <Button
            theme="secondary"
            type="submit"
            className="text-center flex items-center justify-center font-medium py-3 rounded-md w-full"
          >
            Add
          </Button>
        </form>

        <div
          onClick={onClose}
          className="exit absolute top-2 right-2 cursor-pointer bg-gray-100 size-8 flex items-center justify-center rounded-full"
        >
          <ClearIcon sx={{ width: "20px", height: "20px" }} />
        </div>
      </div>
    </>
  );
}

export default AddProject;
