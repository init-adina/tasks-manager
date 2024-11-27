import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "@shared/scss/main.scss";
import Header from "@widgets/header/Header";
import QueryProvider from "src/core/providers/query/QueryProvider";
import TasksServerProvider from "src/core/providers/tasks/TasksServerProvider";
import TeamsServerProvider from "src/core/providers/teams/TeamsServerProvider";
import ProjectsServerProvider from "src/core/providers/projects/ProjectsServerProvider";
import Toast from "@shared/ui/core/toast/Toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryProvider>
        <TeamsServerProvider>
          <ProjectsServerProvider>
            <TasksServerProvider>
              <body className={inter.className}>
                <Toast />
                <Header />
                <main className="min-h-screen">{children}</main>
              </body>
            </TasksServerProvider>
          </ProjectsServerProvider>
        </TeamsServerProvider>
      </QueryProvider>
    </html>
  );
}
