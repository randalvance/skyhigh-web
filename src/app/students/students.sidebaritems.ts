import { SidebarItem } from "../shared/models";

export const StudentsSidebarItems: SidebarItem[] = [
  {
      text: "Students",
      route: "students",
      icon: "user",
      displayOrder: 300,
      children: [
        { text: "All Students", route: "students" },
        { text: "Add Student", route: "students/new" }
      ]
  }
];
