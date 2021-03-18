import React from "react";
import { useParams } from "react-router-dom";
import { CorporationContext } from "../core/corporation-provider.component";

export const CardDetail: React.FC = () => {
    const { id } = useParams<Record<string, string>>();
    const asd = React.useContext(CorporationContext)
    return (
        <>
            <h2>Hello from Detail page</h2>
            <h3>User Id: {id}</h3>
        </>
    )
}