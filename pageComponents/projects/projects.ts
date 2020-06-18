export interface Project {
  id: string;
  title: string;
  images: number;
  disabled: boolean;
}

export const PROJECTS: Project[] = [
  { id: 'iboat-6', title: 'iBoat-6', images: 9, disabled: false },
  { id: 'iboat-7', title: 'iBoat-7', images: 6, disabled: false },
  { id: 'it-800', title: 'iT-800', images: 9, disabled: true },
  { id: 'itender-8', title: 'iTender-8', images: 12, disabled: false },
  { id: 'canna', title: 'Canna', images: 12, disabled: false },
  { id: 'eco-14', title: 'ECO-14', images: 12, disabled: false },
];
