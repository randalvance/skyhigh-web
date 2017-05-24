import { Component }  from "@angular/core";
import { EnrollmentSidebarItems } from "../enrollment/enrollment.sidebaritems";
//import { ProfessorsSidebarItems } from "../professors/professors.sidebaritems";
//import { StudentsSidebarItems } from "../students/students.sidebaritems";

@Component({
  moduleId: module.id,
  selector: "na-sidebar",
  templateUrl: "sidebar.component.html"
})
export class SidebarComponent {
  public sidebarItems = [
    { text: "Dashboard", icon: "dashboard", route: "/", displayOrder: 1 },
    ...EnrollmentSidebarItems,
    //...ProfessorsSidebarItems,
    //...StudentsSidebarItems
  ].sort((a, b) => a.displayOrder > b.displayOrder ? 1 : a.displayOrder < b.displayOrder ? -1 : 0);
}
