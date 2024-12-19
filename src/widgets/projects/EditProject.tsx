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
import { useEffect } from "react";

function EditProject({
  projectId,
  initialProjectData,
  onCancelEdit,
}: {
  projectId: number;
  initialProjectData: AddProjectType | null;
  onCancelEdit: () => void;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddProjectType>({
    resolver: zodResolver(addingSchema),
  });

  useEffect(() => {
    // Reset form with initial data when the project is selected for editing
    if (initialProjectData) {
      reset(initialProjectData);
    }
  }, [initialProjectData, reset]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await projectsService.editProject(projectId, data);
      console.log(data);
      // alert("Проект успешно обновлен!");
      onCancelEdit();
      window.location.reload();
    } catch (error) {
      console.error("Ошибка обновления проекта:", error);
      // alert("Не удалось обновить проект.");
    }
  });

  return (
    <div className="edit-project">
      <Container>
        <div className="wrapper py-16 max-w-xl mx-auto space-y-8 text-center">
          <Headline>Edit Project</Headline>

          <form
            className="flex flex-col gap-8"
            onSubmit={onSubmit}
          >
            <Input
              label="Deadline"
              className="border py-3"
              labelClass="items-start"
              required
              type="date"
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
              Save
            </Button>

            <button
              onClick={onCancelEdit}
              className="bg-red-500 text-white p-2 rounded-md mt-4"
            >
              Cancel
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default EditProject;
