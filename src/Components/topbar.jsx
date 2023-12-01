import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://th.bing.com/th/id/OIP.DVIFpyMYa9nDW96kqokA2wHaE0?w=303&h=197&c=7&r=0&o=5&pid=1.7" alt="avatar" />
          </div>
        </label>
        <Link to="/" className="btn btn-ghost normal-case text-xl flex items-center">
          The Books
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal text-xl  px-1">
          <li>
            <Link to="/books" className=" m-1 text-center">
              Books
            </Link>
          </li>
          <li>
            <Link to="/booksadd" className=" m-1 text-center">
              Add Book
            </Link>
          </li>
          <li>
            <Link to="/author" className=" m-1 text-center">
              Author
            </Link>
          </li>
          <li>
            <Link to="/authoradd" className=" m-1 text-center">
              Add Author
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}