import classNames from "classnames";
import style from "./header.module.scss";
import { FiMoon } from "react-icons/fi";

const Header = () => {
  return (
    <header className="">
      <div
        className={classNames(
          style.wrapperHeader,
          "d-flex justify-content-between align-items-center p-3"
        )}
      >
        <div>
          <p className="paragraph fs-24">👋</p>
        </div>
        <ul className="d-flex align-items-center gap-5">
          <li>Item1</li>
          <li>Item2</li>
          <li>Item3</li>
        </ul>
        <div>
          <FiMoon size={24} />
        </div>
      </div>
    </header>
  );
};

export default Header;
