export interface SidebarItem {
  text: string,
  route?: string,
  icon?: string,
  displayOrder?: number,
  children?: SidebarItem[],
  isRoot?: boolean
}
