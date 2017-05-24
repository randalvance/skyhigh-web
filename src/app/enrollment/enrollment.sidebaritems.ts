import { SidebarItem } from "../shared/models";

export const EnrollmentSidebarItems: SidebarItem[] = [
  {
      text: "Enrollment",
      route: "enrollment",
      icon: "users",
      displayOrder: 100,
      children: [
        { text: "Enroll New Student", route: "enrollment" }
      ]
  }
];
