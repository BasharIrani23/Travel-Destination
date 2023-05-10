import "./Tours.css";
import data from "../../data/db.json";
import Tour from "./tour/Tour";

function Tours() {
  return (
    <div className="Tourh1">
      {data.map((item) => (
        <Tour Tour={item} key={item.id} />
      ))}
    </div>
  );
}
export default Tours;
