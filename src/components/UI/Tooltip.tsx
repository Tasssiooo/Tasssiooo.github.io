const Tooltip = ({ text, left }: { text: string; left: string }) => {
  return (
    <div className="tooltip" style={{ left: left }}>
      {text}
    </div>
  );
};

export default Tooltip;
