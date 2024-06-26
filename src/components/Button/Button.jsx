import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ onClick }) => (
  <div className={styles.buttonDiv}>
    <button type="button" className={styles.buttonLoad} onClick={onClick}>
      Load more
    </button>
  </div>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
