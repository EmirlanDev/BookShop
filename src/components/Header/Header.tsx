import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState<boolean>(false);
  const navigate = useNavigate();
  let num = 1;

  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="header__navBar">
            <NavLink to="/">
              <h1>Bookshop</h1>
            </NavLink>
            <nav>
              <li>Categories</li>
              <li>Recent</li>
              <li>Books</li>
              <li>About Us</li>
            </nav>
          </div>
          <div className="header__btns">
            <input
              style={{
                width: search ? "" : "0",
                padding: search ? "" : "0",
                border: search ? "1px solid #818eea" : "none",
                right: search ? "" : "201.68px",
              }}
              type="text"
              placeholder="Search..."
            />
            <svg
              onClick={() => setSearch(!search)}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z"
                fill="#19272E"
              />
            </svg>
            <div className="header__btns__basket">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7 8V6C7 4.67392 7.52678 3.40215 8.46447 2.46447C9.40215 1.52678 10.6739 1 12 1C13.3261 1 14.5979 1.52678 15.5355 2.46447C16.4732 3.40215 17 4.67392 17 6V8H20C20.2652 8 20.5196 8.10536 20.7071 8.29289C20.8946 8.48043 21 8.73478 21 9V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V9C3 8.73478 3.10536 8.48043 3.29289 8.29289C3.48043 8.10536 3.73478 8 4 8H7ZM7 10H5V20H19V10H17V12H15V10H9V12H7V10ZM9 8H15V6C15 5.20435 14.6839 4.44129 14.1213 3.87868C13.5587 3.31607 12.7956 3 12 3C11.2044 3 10.4413 3.31607 9.87868 3.87868C9.31607 4.44129 9 5.20435 9 6V8Z"
                  fill="#19272E"
                />
              </svg>
              <p style={{ display: num ? "" : "none" }}>{num}</p>
            </div>
            <button>Sign In</button>
            <p
              onClick={() => navigate("/add")}
              style={{
                background: "#818eea",
                color: "white",
                padding: "3px 8px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              add
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
