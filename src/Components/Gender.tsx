import React, {Component} from "react";

class Gender extends Component {
    render() {
        const male ="Male"
        const female ="Female"
        return (
            <div>性别：
                <label><input type="radio" name = "sex" value={male}/>男性</label>
                <label><input type="radio" name = "sex" value={female}/>女性</label>
            </div>
        )
    }
}

export default Gender