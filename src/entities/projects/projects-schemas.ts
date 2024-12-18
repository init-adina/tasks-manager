import { z } from "zod";

export const addingSchema = z.object({
  deadline: z.string(),
  name: z.string().min(1, "Название задачи не может быть пустым"),
  description: z.string().min(1, "Задайте описание"),
});

export type AddProjectType = z.infer<typeof addingSchema>;
