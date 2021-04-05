import React, { useState, useEffect } from "react";
import { findAllInRenderedTree } from "react-dom/test-utils";
import {useHistory} from 'react-router-dom';
import {firebaseConfig} from "../Utils/firebase";
import firebase from "firebase";


const Form = () => {
    useEffect(() => {
        let app =
          firebase.apps && firebase.apps.length > 0
            ? firebase.apps[0]
            : firebase.initializeApp(firebaseConfig);
        console.log("app", app);
        let database = app.database();
        console.log("db", database);
        app.database().ref().set({
            username: "joanna",
            email: "xplorepass.com",
          });

    }, []);
    
       
        
        return (
            <>
                <form name="testForm">
                    <input type="text" name="testInput" value="Input Here"></input>
                   
                </form>
            </>
          );
    };


export default Form;