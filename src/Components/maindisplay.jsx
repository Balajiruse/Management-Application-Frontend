import { useSelector } from "react-redux";

const Dashboarddisplay = () => {
  const { info } = useSelector((state) => state.Bookdata.data);
  const { authorinfo } = useSelector((state) => state.Authordata.data);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 m-5 p-5">
      <div className="card glass shadow-xl flex justify-center items-center w-40%">
        <div className="card-body text">
          <h2 className="card-title text-balck-500 text-5xl">Books</h2>
          <ul className="list-disc card-body">
            {info &&
              info.map((data, idx) => (
                <li className="card-title text-red-700 text-3xl" key={idx}>
                  {data.title}
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div className="card glass shadow-xl flex justify-center items-center w-40%">
        <div className="card-body text">
          <h2 className="card-title text-balck-500 text-5xl">Authors</h2>
          <ul className="list-disc card-body">
            {authorinfo &&
              authorinfo.map((data, idx) => (
                <li className="card-title text-red-700 text-3xl" key={idx}>
                  {data.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboarddisplay;
