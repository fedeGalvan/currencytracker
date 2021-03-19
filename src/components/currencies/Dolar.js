import React from "react";
import api from "../../services/api";
import CurrencyCard from "../currencyCard";
import Loader from "../Loader";

class Dolar extends React.Component {
  constructor() {
    super();
    this.state = "";
    this.loaded = false;
    this.array = [];
  }

  async componentDidMount() {
    const fetchDolar = api.dolar().then((data) => data);
    await fetchDolar
      .then((res) => this.setState(res))
      .then((this.loaded = true));
  }

  render() {
    Object.keys(this.state).forEach((k) => {
      if ([this.state[k].casa.compra].includes("No Cotiza") === false) {
        this.array.push(this.state[k].casa);
      }
    });

    return (
      <>
        {this.loaded ? (
          <>
            <h2 className="title">Dólar</h2>
            <div className="cardWrapper">
              {this.array.map((c) => (
                <CurrencyCard
                  className="currencyCard"
                  compra={c.compra.replace(",", ".")}
                  venta={c.venta.replace(",", ".")}
                  nombre={c.nombre}
                  key={Math.random()}
                />
              ))}
            </div>
          </>
        ) : (
          <Loader />
        )}
      </>
    );
  }
}

export default Dolar;
