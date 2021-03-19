import React from "react";

class CurrencyCard extends React.Component {
  render() {
    const { nombre, venta, compra } = this.props;
    return (
      <>
        <div className="card">
          <div className="card-content">
            <div className="content">
              <h2>{nombre}</h2>
              <div className="card-currency">
                <p className="compra">
                  Compra: ${parseFloat(compra).toFixed(2)}
                </p>
                <p className="venta">Venta: ${parseFloat(venta).toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CurrencyCard;
