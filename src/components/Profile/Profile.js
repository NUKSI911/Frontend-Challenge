import "./Profile.css";

export function Profile({ record, index }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{record.FirstName}</td>
      <td> {record.LastName}</td>
      <td> {record.Gender}</td>
      <td> {record.PhoneNumber}</td>
      <td>{record.UserName}</td>
      <td> {record.Email}</td>
      <td>{record.PaymentMethod}</td>
      <td>{record.CreditCardNumber}</td>
      <td>{record.CreditCardType}</td>
      <td>{record.URL}</td>
      <td> {record.MacAddress}</td>
      <td>{record.LastLogin}</td>
      <td>
        {record.Longitude} {record.Latitude}{" "}
      </td>
      <td> {record.DomainName}</td>
    </tr>
  );
}
