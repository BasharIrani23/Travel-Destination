import "./Tours.css";
import data from "../../data/db.json";
function Tours() {
  return (
    <div>
      {data.map((item) => {
        return (
          <div className="Tourh1">
            <h1>{item.name}</h1>
            <img src={item.image} />
            <hr />
          </div>
        );
      })}
    </div>
  );
}
export default Tours;
