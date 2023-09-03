type Display = {
  display: {
    modal: boolean;
    setModal: (m: any) => void;
  };
};

const About = ({ display }: Display) => {
  return (
    <div className="modal" style={{ display: display.modal ? "flex" : "none" }}>
      <h1>Placeholder</h1>
    </div>
  );
};

export default About;
