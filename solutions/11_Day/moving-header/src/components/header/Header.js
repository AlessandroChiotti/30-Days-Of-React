const Header = ({ styles, title, handleMouseEnter }) => {
  return (
    <header className="App-header">
      <h1 onMouseEnter={handleMouseEnter} style={styles}>
        {title}
      </h1>
    </header>
  );
};

export default Header;
