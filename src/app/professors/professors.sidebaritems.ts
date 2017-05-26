import { SidebarItem } from '../shared/models';

export const ProfessorsSidebarItems: SidebarItem[] = [
  {
      text: 'Professors',
      route: 'professors',
      icon: 'user-circle-o',
      displayOrder: 200,
      children: [
        { text: 'All Professors', route: 'professors' }
      ]
  }
];
