import Container from "@shared/ui/Container";
import TaskIcon from "@mui/icons-material/Task";

function TaskListTwo() {
  return (
    <section className="tasks-list py-12">
      <Container>
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-1 border p-4 flex ">
            <div>4 tasks</div>
            <TaskIcon />
          </div>

          <div className="col-span-3 border"></div>
        </div>
      </Container>
    </section>
  );
}

export default TaskListTwo;
