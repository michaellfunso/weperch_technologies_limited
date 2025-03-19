"use client";
import { useEffect, useState } from "react";

export default function NotificationPopup({ onClose }) {
  const [visible, setVisible] = useState(true);

  // Auto-dismiss after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose && onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  return (
    <div className="fixed top-40 left-4 z-50 transform transition-all duration-300 ease-out animate-slideIn">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm">
        <p className="text-lg font-semibold text-blue-600">
          Thanks! We'll reach out to you soon! 
        </p>
        <button
          onClick={() => {
            setVisible(false);
            onClose && onClose();
          }}
          className="mt-4 w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition-colors"
        >
          X
        </button>
      </div>
    </div>
  );
}
