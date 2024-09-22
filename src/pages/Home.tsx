import React from "react";
import InspiringChange from "./InspiringChange"
import Impacts from "./Impacts"


class Home extends React.Component {
    render = () => {
        return (
            <>
                <InspiringChange />
                <Impacts />
            </>
        );
    };
}


export default Home;
