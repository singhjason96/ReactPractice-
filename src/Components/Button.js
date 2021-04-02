import React, { useState } from "react";
import { findAllInRenderedTree } from "react-dom/test-utils";
import {useHistory} from 'react-router-dom';

const Button = () => {
let history = useHistory();

    function AlertSubmit() {
        return history.push('/header');
    }

    return (
        <>
          <button onClick={() => AlertSubmit()}>
            Submit
          </button>
        </>
      );
};

export default Button;