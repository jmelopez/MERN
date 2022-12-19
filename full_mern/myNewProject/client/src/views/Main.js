import React, { useState } from "react";
import PersonForm from "../components/PersonForm";
import PersonList from "../components/PersonLists";
import axios from 'axios';

const Main = (props) => {
    const [people, setPeople] = useState([]);

    return(
        <div>
            <PersonForm people = {people} setPeople={setPeople}/>
            <hr/>
            <PersonList people = {people} setPeople = {setPeople}/>
        </div>
    )
}

export default Main;