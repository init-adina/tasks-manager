function TeamListTop() {
  return (
    <div className="top-team-list text-gray-500 text-sm font-medium grid grid-cols-7 border-b">
      <div className="designer-wrapper col-span-2 py-2 px-4 border-r">Name</div>

      <div className="task col-span-2 py-2 px-4 border-r">Projects</div>

      <div className="status col-span-1 py-2 px-4 border-r">Status</div>

      <div className="priority col-span-1  py-2 px-4 border-r">Priority</div>

      <div className="last-update col-span-1 py-2 px-4">Last Update</div>
    </div>
  );
}

export default TeamListTop;
