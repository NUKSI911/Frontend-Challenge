import { Profile } from "../Profile/Profile";
import { Ellipsis } from "react-css-spinners";
import TableFilter from "react-table-filter";

import "./ProfileList.css";
export function ProfileList({ result, _filterUpdated,profiles }) {
  if (result.length === 0)
    return (
      <div className="spinner">
        <Ellipsis color="#ffdf00" size={150} />
      </div>
    );

  return (
    <table class="styled-table">
      <caption>Profile Information</caption>
      <thead>
        <TableFilter rows={result} key="i"  onFilterUpdate={_filterUpdated}>
          <th>No</th>
          <th
            key={"FirstName"}
            filterkey="FirstName"
            className="cell"
            casesensitive={"true"}
            showsearch={"true"}
          >
            FirstName
          </th>
          <th
            key={"LastName"}
            filterkey="LastName"
            className="cell"
            casesensitive={"true"}
            showsearch={"true"}
          >
            LastName
          </th>
          <th
            key={"Gender"}
            filterkey="Gender"
            className="cell"
            casesensitive={"true"}
            showsearch={"true"}
          >
            Gender
          </th>
          <th>PhoneNumber</th>
          <th>UserName</th>
          <th>Email</th>
          <th>PaymentMethod</th>
          <th>CC-No</th>
          <th>CC Type</th>
          <th>Url</th>
          <th>MacAddress</th>
          <th>LastLogin</th>
          <th>Location</th>
          <th>DomainName</th>
        </TableFilter>
      </thead>
      <tbody>
        {result.map((record, i) => (
          <Profile key={i} index={i} record={record} />
        ))}
      </tbody>
    </table>
  );
}
