export type NavTab = 'home' | 'materi' | 'test' | 'panduan';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}
