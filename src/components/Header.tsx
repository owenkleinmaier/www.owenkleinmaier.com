const Header: React.FC = () => {
  return (
    <header className="flex justify-between p-5">
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#skills">skills</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
        </ul>
      </nav>
      <button className="text-xl">🌙</button>
    </header>
  );
};

export default Header;
