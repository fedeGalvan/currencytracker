import React from "react";
import api from "../../services/api";
import CurrencyCard from "../currencyCard";
import Loader from "../Loader";
class Libra extends React.Component {
  constructor() {
    super();
    this.state = "";
    this.loaded = false;
    this.array = [];
  }

  async componentDidMount() {
    const fetchLibra = api.libra().then((data) => data);
    await fetchLibra
      .then((res) => this.setState(res))
      .then((this.loaded = true));
  }

  render() {
    Object.keys(this.state).forEach((k) => {
      if (
        [this.state[k].casa.compra, this.state[k].casa.compra].includes(
          "No Cotiza"
        ) === false
      ) {
        this.array.push(this.state[k].casa);
      }
    });

    return (
      <>
        {this.loaded ? (
          <>
            <h2 className="title">Libra</h2>
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

export default Libra;
