import React, { useState } from "react";
import PersonForm from "../components/PersonForm";
import PersonList from "../components/PersonLists";
import axios from 'axios';

const Main = (props) => {
    const [people, setPeople] = useState([]);
    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id != personId))
    }

    return(
        <div>
            <PersonForm people = {people} setPeople={setPeople}/>
            <hr/>
            <PersonList people = {people} setPeople = {setPeople} removeFromDom={removeFromDom} />
        </div>
    )
}

export default Main;