import ModalComponent from "./Modal";

function CardComponent(props) {
  // Props descrution
  const { cardTitle } = props;

  return (
    <>
      {<ModalComponent cardTitle={cardTitle} />}
      {/* CARD */}
      <div className={`${cardTitle} card`} style={{ width: "18rem" }}>
        <img src="/img/tron.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{cardTitle}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={`#${cardTitle}Modal`}
          >
            Delete the record
          </button>
        </div>
      </div>
    </>
  );
}

export default CardComponent;
