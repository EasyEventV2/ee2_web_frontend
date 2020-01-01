import toastr from 'toastr';

toastr.options = {
  closeButton: true,
  progressBar: true,
  escapeHtml: true,
  positionClass: 'toast-top-right',
};

export const showSuccess = (message, detail = null) => {
  toastr.success(detail, message || 'Thành công!');
};

export const showError = (message, detail = null) => {
  toastr.error(detail, message || 'Có lỗi xảy ra!');
};
