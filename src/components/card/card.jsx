import PropTypes from "prop-types";

const Card = ({ monster }) => {
  return (
    <div
      className="card h-100 shadow-sm w-100 rounded-5 border-2 border-primary"
      style={{ maxWidth: "400px", overflow: "hidden" }}
    >
      <div className="card-img-container p-3 d-flex justify-content-center">
        <img
          className="card-img-top border border-2 border-danger"
          src={`https://www.robohash.org/${monster.id}`}
          alt={`Monster ${monster.name}`}
          style={{
            width: "250px",
            height: "250px",
            objectFit: "cover",
            borderRadius: "15%",
          }}
        />
      </div>
      <div className="card-body text-center">
        <h5
          className="card-title font-weight-bold text-primary"
          style={{ fontSize: "1.5rem" }}
        >
          {monster.name}
        </h5>
        <p className="card-text text-muted" style={{ fontSize: "1.125rem" }}>
          {monster.email}
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  monster: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
