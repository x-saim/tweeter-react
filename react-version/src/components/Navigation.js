import React from 'react'; //optional

function Navigation() {
  return (
    <nav>

    <span className="nav--text">tweeter</span>

    <div className="btn btn--scroll">
      <div className="btn__text btn--borderless" title="Compose Tweet">
        <span className="btn--bold">Write</span> a new tweet
        <br/>
        <i className="btn__icon fas fa-angle-double-down"></i>
      </div>
    </div>
  </nav>);
}

export default Navigation;