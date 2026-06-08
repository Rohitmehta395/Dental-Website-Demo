import { create } from "zustand";

export const useStore = create((set) => ({
  // --- Sidebar ---
  sidebarOpen: true,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),

  // --- Patient Filters ---
  patientFilter: "all",
  setPatientFilter: (filter) => set({ patientFilter: filter }),

  patientSearch: "",
  setPatientSearch: (search) => set({ patientSearch: search }),

  // --- Selected Patient ---
  selectedPatientId: null,
  setSelectedPatientId: (id) => set({ selectedPatientId: id }),

  // --- Toast Notifications ---
  toasts: [],
  addToast: (toast) =>
    set((state) => ({
      toasts: [
        ...state.toasts,
        { id: Date.now(), ...toast },
      ],
    })),
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    })),

  // --- Modal ---
  modalOpen: false,
  modalContent: null,
  openModal: (content) => set({ modalOpen: true, modalContent: content }),
  closeModal: () => set({ modalOpen: false, modalContent: null }),
}));
