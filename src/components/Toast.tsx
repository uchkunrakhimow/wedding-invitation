import { Check, X } from "lucide-react";
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
      }, 10 * 3000);
      return () => clearTimeout(timer);
    }
  }, [toast, setToast]);

  const handleClose = () => {
    setToast({ ...toast, show: false });
  };

  if (!toast.show) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div
        className={`max-w-md transition-all duration-500 transform ${
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
          <p className="flex-grow">{toast.message}</p>
          <button
            onClick={handleClose}
            className="ml-3 text-white hover:text-gray-200 focus:outline-none"
            aria-label="Close toast"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
