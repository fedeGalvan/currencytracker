import React from "react";
import api from "../../services/api";
import CurrencyCard from "../currencyCard";
import Loader from "../Loader";
class Real extends React.Component {
  constructor() {
    super();
    this.state = "";
    this.show = false;
    this.array = [];
  }

  async componentDidMount() {
    const fetchReal = api.real().then((data) => data);
    await fetchReal.then((res) => this.setState(res)).then((this.show = true));
  }

  render() {
    Object.keys(this.state).forEach((k) => {
      if ([this.state[k].casa.compra].includes("No Cotiza") === false) {
        this.array.push(this.state[k].casa);
      }
    });

    return (
      <>
        {this.show ? (
          <>
            <h2 className="title">Real</h2>
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

export default Real;
