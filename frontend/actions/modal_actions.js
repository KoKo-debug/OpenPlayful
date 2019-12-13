export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const openModal = modal => ({
  type: OPEN_MODAL,
  modal
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});


export const clearErrors = () => ({
  type: CLEAR_ERRORS
});