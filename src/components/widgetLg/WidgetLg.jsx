import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://cdn.mos.cms.futurecdn.net/WjVddGoDQBMcE5Z4UFVQCS-1200-80.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Ryan Gosling</span>
            </td>
            <td className="widgetLgDate">2 June 2022</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://cdn.mos.cms.futurecdn.net/WjVddGoDQBMcE5Z4UFVQCS-1200-80.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Ryan Gosling</span>
            </td>
            <td className="widgetLgDate">2 June 2022</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://cdn.mos.cms.futurecdn.net/WjVddGoDQBMcE5Z4UFVQCS-1200-80.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Ryan Gosling</span>
            </td>
            <td className="widgetLgDate">2 June 2022</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://cdn.mos.cms.futurecdn.net/WjVddGoDQBMcE5Z4UFVQCS-1200-80.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Ryan Gosling</span>
            </td>
            <td className="widgetLgDate">2 June 2022</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
