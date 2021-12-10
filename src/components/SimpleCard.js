import React from "react";
import { Card } from "primereact/card";

const CARD_TYPE = {
    SUCCESS: "customSuccessCard",
    DANGER: "customDangerCard",
    WARN: "customWarningCard",
    DEFAULT: "customDefaultCard",
    DANGERGLASS: "dangerGlass",
    GREENGLASS: "greenGlass",
    DEFAULTGLASS: "defaultGlass",
    INFOGLASS: "infoGlass",
};

const SimpleCard = (props) => {
    let type = props.type ? CARD_TYPE[props.type] : "customDefaultCard";
    return (
        <div className={type}>
            <Card className={props.className + " w-20rem"} title="Title">
                {props.children}
            </Card>
        </div>
    );
};

export default SimpleCard;