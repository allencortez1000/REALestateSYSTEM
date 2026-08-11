type Theme = 'light' | 'dark' | 'system';

export type UIStore = {
  theme: Theme;
  sidebarOpen: boolean;
};

export const uiStore: UIStore = {
  theme: 'system',
  sidebarOpen: false
};

export const useUIStore = () => uiStore;
