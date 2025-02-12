import * as React from "react";
import { useState } from 'react';

/*
Situation                                               Modifier
Program difficulty                                      –(Rating of program ÷ 2, round up)
Program's rating is less than half character’s skill    +3
Program options                                         –(number of options ÷ 2, round up)
Programmed by team                                      –(number of team members ÷ 2, round up)
Programmed on mainframe                                 +2
Each success not used to reduce base time               +3
*/

function Dashboard() {
    const programs = require('../data/programs.json');
    const [programName,     setProgramName] = useState('');
    const [programRating,   setProgramRating] = useState(1);
    const [programType,     setProgramType] = useState('Analyze');
    const [programMultiplier,setProgramMultiplier] = useState(1);
    const [programCost,     setProgramCost] = useState(1);
    const [programOptions,  setProgramOptions] = useState([]);
    const [doubleMemory,    setDoubleMemory] = useState(false);
    const ProgramCosts = {
        1: 100,
        2: 100,
        3: 100,
        4: 200,
        5: 200,
        6: 200,
        7: 500,
        8: 500,
        9: 500,
        10: 1000,
        11: 1000,
        12: 1000,
        13: 1000,
        14: 1000
    };

    const onChangeRating = (event) => {
        setProgramRating(event.target.value);
    }

    const onChangeName = (event) => {
        setProgramName(event.target.value);
    }

    const onChangeType = (event) => {
        console.log(event);
        console.log(event.target.value);
        //setProgramType()
        setProgramMultiplier(event.target.value);
    }
    // {ProgramCosts[programCost]*((programRating*programRating)*programMultiplier)}¥

    return (
        <div className='container'>
            <div className="row align-items-center">
                <div className="col">
                    <h2 className="subTitle">Basic Information</h2>
                    <div className="input-group mb-3">
                        <span className="input-group-text formLabels" id="program_name">Program Name</span>
                        <input type="text" className="form-control" placeholder="name" aria-label="name" aria-describedby="program_name" onChange={onChangeName} value={programName}></input>
                    </div>
                    <div className="input-group mb-3">
                        <label for="program_rating formLabels" className="form-label">Program Rating</label>: <span>{programRating}</span>
                        <input type="range" className="form-range" id="program_rating" min="1" max="14" onChange={onChangeRating} value={programRating}></input>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text formLabels" id="program_type">Program Type</span>
                        <select className="form-select" aria-label="Default select example" onChange={onChangeType}>
                        {
                            programs.map((program, index) => {
                                return (<option key={index} value={program.Multiplyer}>{program.Name}</option>)
                            })
                        }
                        </select>
                    </div>
                <div className="input-group mb-3">

                </div>
                <h2 className="subTitle">Options</h2>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"></input>
                    <label className="form-check-label" for="flexSwitchCheckDefault">Programming on Double Memory?</label>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"></input>
                    <label className="form-check-label" for="flexSwitchCheckDefault">Programming on Double Memory?</label>
                </div>
                </div>
                <div className="col">
                    <h2 className="subTitle">Details</h2>
                    <div className="borderLines">
                        <div className="row">
                            <div className='col'>Program Name: {programName}</div>
                            <div className='col'>Program Type: {programType}</div>
                        </div>
                        <div className='row'>
                            <div className='col'>Rating: {programRating}</div>
                            <div className='col'>Multiplier: { programMultiplier}</div>
                            <div className='col'>Size: {(programRating*programRating)*programMultiplier}</div>
                        </div>
                        <div className='row'>
                            <div className='col'>Options: {programOptions}</div>
                        </div>
                        <div className='row'>
                            <div className='col'>Design TN: </div>
                            <div className='col'>Programming TN: </div>
                        </div>
                        <div className='row'>
                            <div>Days Of Programming:</div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )

}
export default Dashboard;