import React from "react";
import { Dolar, Real, Euro, Libra } from "../components/currencies";

class CurrenciesWrapper extends React.Component {
  render() {
    return (
      <>
        <Dolar />
        <Euro />
        <Real />
        <Libra />
      </>
    );
  }
}

export default CurrenciesWrapper;
