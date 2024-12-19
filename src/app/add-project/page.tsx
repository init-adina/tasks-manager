"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@shared/ui/Button";
import Container from "@shared/ui/Container";
import Headline from "@shared/ui/Headline";
import Input from "@shared/ui/input/Input";
import { useForm } from "react-hook-form";
import {
  addingSchema,
  AddProjectType,
} from "src/entities/projects/projects-schemas";
import { projectsService } from "src/entities/projects/projects.service";

function AddProject() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddProjectType>({
    resolver: zodResolver(addingSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await projectsService.addProject(data);
      console.log(data);
      // alert("Проект успешно добавлен!");
      reset();
    } catch (error) {
      console.error("Ошибка добавления проекта:", error);
      // alert("Не удалось добавить проект.");
    }
  });

  return (
    <div className="add-project">
      <Container>
        <div className="wrapper py-16 max-w-xl mx-auto space-y-8 text-center">
          <Headline>Add a Project</Headline>

          <form
            className="flex flex-col gap-8"
            onSubmit={onSubmit}
          >
            <Input
              label="Deadline"
              className="border py-3"
              labelClass="items-start"
              required
              type="deadline"
              {...register("deadline")}
              error={errors.deadline?.message}
            />

            <Input
              label="Name"
              className="border py-3"
              labelClass="items-start"
              {...register("name")}
              error={errors.name?.message}
            />

            <Input
              label="Description"
              className="border py-3"
              labelClass="items-start"
              {...register("description")}
              error={errors.description?.message}
            />

            <Button
              theme="secondary"
              className="text-center flex items-center justify-center font-medium py-3 rounded-md w-full"
              type="submit"
            >
              Add
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default AddProject;
