import { useToastContext } from "../components/TaostProvider";


const useToast = () => {
    const context = useToastContext();

    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    const { showToast } = context;
    return {
        successToast: (message) => showToast(message, "success"),
        errorToast: (message) => showToast(message, "error"),
    };
};

export default useToast;