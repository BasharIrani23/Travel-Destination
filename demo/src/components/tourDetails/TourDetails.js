import { useEffect, useState } from "react";
import data from "../../data/db.json";
import { useNavigate, useParams } from "react-router";

const TourDetails = () => {
  const [loaded, setLoaded] = useState(false);
  const [city, setCity] = useState({});
  const [cityDescription, setCityDescription] = useState("");
  const [displayAllDescription, setDisplayAllDescription] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const getCity = data.find((e) => e.id === id);

    if (getCity) {
      const description = getCity.info.split(",").slice(0, 3).join(",");
      setCityDescription(getCity.info);
      setCity({ ...getCity, info: description });

      setLoaded(true);
    }
  }, []);
  return (
    <div>
      {loaded ? (
        <div>
          <h1>{city.name}</h1>
          <img src={city.image} />
          <p>{city.price}$</p>
          {displayAllDescription ? (
            <div>
              <h3>{cityDescription}</h3>
              <button onClick={() => setDisplayAllDescription(false)}>
                See less
              </button>
            </div>
          ) : (
            <div>
              <h3>{city.info}</h3>
              <button onClick={() => setDisplayAllDescription(true)}>
                See more
              </button>
            </div>
          )}
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default TourDetails;
