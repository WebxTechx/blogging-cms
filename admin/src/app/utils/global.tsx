import { toast } from 'sonner';

export const toastSuccess = (message: string) => {
  toast.success(message);
};

export const toastError = (message: string) => {
  toast.error(message);
};

export const toastPromise = (promise: any, message: string) => {
  toast.promise(promise, {
    loading: 'Loading...',
    success: (data: any) => {
      return `${data.name} toast has been added`;
    },
    error: 'Error',
  });
};

export const toastCancel = (label:any,event:any) => {
  toast('My cancel toast', {
    cancel: {
      label: label,
      onClick: event,
    },
  });
};

export const toastCustom = (promise: any, message: string) => {
  toast.custom((t) => (
    <div>
      This is a custom component{' '}
      <button onClick={() => toast.dismiss(t)}>close</button>
    </div>
  ));
};

export const toastLoading = () => {
  toast.loading('Loading data');
};
