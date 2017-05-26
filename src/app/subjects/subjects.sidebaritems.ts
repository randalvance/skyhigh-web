import { SidebarItem } from "../shared/models";

export const SubjectsSidebarItems: SidebarItem[] = [
  {
      text: "Subjects",
      route: "subjects",
      icon: "book",
      displayOrder: 300,
      children: [
        { text: "All Subjects", route: "subjects" },
        { text: "Add Subject", route: "subjects/new" }
      ]
  }
];
