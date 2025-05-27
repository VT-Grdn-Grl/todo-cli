
// Component styles that can be easily converted to React Native StyleSheet
export const styles = {
  container: {
    base: "min-h-screen",
    gradient: "bg-gradient-to-br from-gray-50 to-gray-100",
    padding: "px-4 py-8",
    maxWidth: "max-w-2xl mx-auto"
  },
  
  card: {
    base: "bg-white rounded-2xl shadow-lg p-6 mb-6",
    animation: "animate-scale-in"
  },
  
  button: {
    primary: "px-6 py-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all hover:scale-105",
    ghost: "opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50 hover:text-red-600 p-2",
    disabled: "disabled:opacity-50 disabled:cursor-not-allowed"
  },
  
  input: {
    base: "flex-1 text-lg py-6 px-4 border-2 border-gray-200 focus:border-blue-500 transition-colors"
  },
  
  text: {
    heading: "text-xl font-semibold text-gray-800 mb-4",
    task: "text-gray-800 font-medium break-words",
    subtitle: "text-gray-500 text-sm mt-1",
    empty: "text-center py-12"
  },
  
  layout: {
    flex: "flex items-center gap-4",
    flexColumn: "flex flex-col",
    spaceBetween: "flex items-center justify-between",
    center: "flex items-center justify-center"
  }
};

export const colors = {
  primary: {
    blue: "#2563eb",
    purple: "#9333ea",
    yellow: "#fbbf24"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    500: "#6b7280",
    600: "#4b5563",
    800: "#1f2937"
  },
  semantic: {
    success: "#10b981",
    error: "#ef4444",
    warning: "#f59e0b"
  }
};
