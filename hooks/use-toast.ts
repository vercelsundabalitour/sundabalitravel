import * as React from "react";

type ToastActionElement = React.ReactElement<any>;

type ToastProps = {
  title?: string;
  description?: string;
  action?: ToastActionElement;
};

export function useToast() {
  const [toasts, setToasts] = React.useState<ToastProps[]>([]);

  const toast = React.useCallback((props: ToastProps) => {
    setToasts((prev) => [...prev, props]);
    setTimeout(() => {
      setToasts((prev) => prev.slice(1));
    }, 3000);
  }, []);

  return {
    toast,
    toasts,
  };
}
