import React from "react";
import { connect } from "react-redux";
import { fetchCart } from "../store/cart";
import SplineLanding from "../components/SplineLanding";
import { WrapAroundEnding, Wrapping } from "three";

// import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * COMPONENT
 */
export class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { username } = this.props;

    return (
      // <div style={{width: "100vw", height: "100vh", position: "relative"}}>
      <SplineLanding />
      // </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
    userId: state.auth.id,
    cart: state.cart,
  };
};

const mapDispatch = (dispatch) => {
  return {
    //loadUserCart: (userId) => dispatch(fetchUserCart(userId)),
    fetchCart: () => {
      dispatch(fetchCart());
    },
  };
};

export default connect(mapState, mapDispatch)(Home);

{
  /* <div className="landing">
           <h3>Welcome, {username}</h3>
           <div></div>
        </div> */
}
