import { ReactElement } from "react";

export interface ITaskItem {
  count: number;
  icon?: ReactElement;
  title: string;
}
