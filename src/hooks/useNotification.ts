import { useNotificationContext } from "@/context/NotificationContext";

export const useNotification = () => {
  const { notify } = useNotificationContext();
  return notify;
};

export default useNotification;
