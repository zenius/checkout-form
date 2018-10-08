import React from "react";

export const ExpiryDate = function(props) {
  return (
    <div className="ExpiryDate">
      <label>Expires on</label>
      <div className="Expiry">
        <select name="month">
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
        <select name="year">
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
        </select>
      </div>
      <div className="CVCField">
        <label>CVC</label>
        <input placeholder="000" type="number" />
      </div>
    </div>
  );
};
