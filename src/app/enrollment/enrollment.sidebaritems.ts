import { SidebarItem } from '../shared/models';

export const EnrollmentSidebarItems: SidebarItem[] = [
  {
      text: 'Enrollment',
      route: 'enrollment',
      icon: 'university',
      displayOrder: 100,
      children: [
        { text: 'Enroll New Student', route: 'enrollment' },
        { text: 'All Enrollments', route: 'enrollments' }
      ]
  }
];
