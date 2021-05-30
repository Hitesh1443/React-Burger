import React from "react";

import Modal from "../../components/UI/Modal/Modal";
import Wrap from "../Wrap/Wrap";
import useHttpErrorHandler from "../../hooks/http-error-handler";

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, clearError] = useHttpErrorHandler(axios);

    return (
      <Wrap>
        <Modal show={error} modalClosed={clearError}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Wrap>
    );
  };
};

export default withErrorHandler;
