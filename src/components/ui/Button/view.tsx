export const Button: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ children, ...props }) => {
  return (
    <button
      onClick={props.onClick}
      className="last:ml-4 border-lime-500 bg-lime-700 text-white border"
    >
      {children}
    </button>
  );
};
