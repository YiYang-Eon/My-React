import React, {Component} from "react";
import {Simulate} from "react-dom/test-utils";

class Skills extends Component {
    render() {
        return (
            <div className="">
                <select multiple>
                    <option value="Java">Java</option>
                    <option value="Scala">Scala</option>
                    <option value="Go">Go</option>
                    <option value="Python">Python</option>
                </select>
            </div>
        )
    }
}

export default Skills