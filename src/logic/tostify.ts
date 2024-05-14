import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// interface TostifyProps {
//   message: string;
//   type: 'success' | 'error';
// }

const toastify = (message, type) => {
  if (type === 'success') {
    toast.success(message, {
      toastId: 1,
    });
  }
  if (type === 'error') {
    toast.error(message, {
      toastId: 1,
    });
  }
};

export default toastify;