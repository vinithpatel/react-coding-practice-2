const element = (
  <div className="background-container">
    <div className="card-container">
      <h1 className="card-heading">Congratulations</h1>
      <div className="card">
        <img
          className="profile"
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        />
        <h1 className="person-name">Kiran V</h1>
        <p className="paragraph">
          Vishnu Institute of Computer Education and Technology.Bhivaram
        </p>
        <img
          className="profile"
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
