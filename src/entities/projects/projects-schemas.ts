import { z } from "zod";

export const addingSchema = z.object({
  deadline: z
    .string()
    .nonempty("Укажите срок выполнения")
    .refine((date) => /^\d{4}-\d{2}-\d{2}$/.test(date), {
      message: "Дата должна быть в формате YYYY-MM-DD",
    })
    .refine(
      (date) => {
        const [year, month, day] = date.split("-").map(Number);
        const parsedDate = new Date(year, month - 1, day);
        return (
          parsedDate.getFullYear() === year &&
          parsedDate.getMonth() === month - 1 &&
          parsedDate.getDate() === day
        );
      },
      {
        message: "Укажите корректную дату",
      }
    ),
  name: z.string().min(1, "Название задачи не может быть пустым"),
  description: z.string().min(1, "Задайте описание"),
});

export type AddProjectType = z.infer<typeof addingSchema>;
