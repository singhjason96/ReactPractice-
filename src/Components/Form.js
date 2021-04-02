import React, { useState } from "react";
import { findAllInRenderedTree } from "react-dom/test-utils";
import {useHistory} from 'react-router-dom';

const Form = () => {
    let history = useHistory();
        var changes = "";
        function AlertSubmit() {
            return history.push('/header');
        }
        
        return (
            <>
                <form name="testForm">
                    <input type="text" name="testInput" value="Input Here"></input>
                    <input type="button" name="testButton" value="Submit" onClick={() => AlertSubmit()}></input>
                </form>
            </>
          );
    };

export default Form;