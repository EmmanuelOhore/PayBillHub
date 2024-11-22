import "../styles/invoice.css";
import logo from "../assets/logo.webp";

const Invoice = () => {
  const Row = [
    {
      SN: 1,
      itemDescription: "Laser Alignment on Platform",
      qty: 2,
      unitPrice: " 500,000",
      totalprice: "300,000",
    },
  ];
  return (
    <>
      <section className="invoice-header">
        <div className="company-info">
          <div className="logo-container">
            <img src={logo} alt="Company Logo" className="logo" />
          </div>
          <h1>Hydrocarbon Support Concepts Limited</h1>
          <p>
            Company Address Line 1<br />
            Company Address Line 2<br />
            Phone: 123-456-7890
          </p>
        </div>

        <div className="invoice-info">
          <h2>INVOICE</h2>
          <p>
            Date: <span id="invoice-date">2024-09-02</span>
          </p>
          <p id="PO-number">PO: XYZ-1234</p>
          <p>
            Invoice Number: <span id="invoice-number">INV-0001</span>
          </p>
        </div>
      </section>

      {/* <!-- Itemized List --> */}
      <section className="table-container">
        <table className="invoice-table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Item Description</th>
              <th>Qty</th>
              <th>Unit Price</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {Row.map((el) => {
              return (
                <tr key={el.SN}>
                  <td>{el.SN}</td>
                  <td>{el.itemDescription}</td>
                  <td>{el.qty}</td>
                  <td>{el.unitPrice}</td>
                  <td>{el.totalprice}</td>
                </tr>
              );
            })}

            {/* <!-- Add more rows as needed --> */}
          </tbody>
        </table>
        {/* <span className="material-symbols-outlined btn-one addBtn">
          <i className="fa-solid fa-plus"></i>
        </span>
        <span className="material-symbols-outlined btn-two addBtn">
          <i className="fa-solid fa-plus"></i>
        </span> */}
      </section>

      {/* <!-- Totals Section --> */}
      <section className="total-section">
        <div className="totals">
          <div className="numwords-container">
            <p className="numwords">
              <strong>In Words:</strong>
              <span id="numToWords">
                One Million Seventy-Five Thousand Naira Only
              </span>
            </p>
          </div>

          <div className="calculations-container">
            <p>
              Subtotal: <span id="subtotal">1,000,000</span>
            </p>
            <p>
              VAT (7.5%): <span id="vat">75,000</span>
            </p>
            <p>
              <strong>
                Grand Total: <span id="grand-total">1,075,000</span>
              </strong>
            </p>
          </div>
        </div>

        {/* <!-- Additional Notes and Signature --> */}
        <div className="notes-signature">
          <p>Authorized Signature: _____________________</p>
        </div>
      </section>

      {/* <!-- Print Button --> */}
      <button className="invoice-btn">Print Invoice</button>
    </>
  );
};

export default Invoice;
