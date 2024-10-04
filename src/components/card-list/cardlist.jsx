import PropTypes from "prop-types";
import Card from "../card/card";

const CardList = ({ filteredMonsters }) => {
  return (
    <div className="container-fluid px-4">
      <div className="row g-3 justify-content-center">
        {filteredMonsters.map((monster) => (
          <div
            key={monster.id}
            className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex justify-content-center"
          >
            <Card monster={monster} />
          </div>
        ))}
      </div>
    </div>
  );
};

CardList.propTypes = {
  filteredMonsters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardList;
