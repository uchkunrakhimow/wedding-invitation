import { Check } from "lucide-react";
import { Toast as ToastType } from "../types";
import { useEffect } from "react";

interface ToastProps {
  toast: ToastType;
  setToast: React.Dispatch<React.SetStateAction<ToastType>>;
}

const Toast: React.FC<ToastProps> = ({ toast, setToast }) => {
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ ...toast, show: false });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast, setToast]);

  if (!toast.show) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 max-w-md transition-all duration-500 transform ${
        toast.show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div
        className={`flex items-center p-4 rounded-lg shadow-lg ${
          toast.type === "success"
            ? "bg-green-500 text-white"
            : toast.type === "warning"
            ? "bg-amber-500 text-white"
            : "bg-blue-500 text-white"
        }`}
      >
        <div className="flex-shrink-0 mr-3">
          {toast.type === "success" ? (
            <Check className="h-5 w-5 text-white" />
          ) : toast.type === "warning" ? (
            <div className="h-5 w-5 text-white flex items-center justify-center">
              !
            </div>
          ) : (
            <div className="h-5 w-5 text-white flex items-center justify-center">
              i
            </div>
          )}
        </div>
        <p>{toast.message}</p>
      </div>
    </div>
  );
};

export default Toast;
