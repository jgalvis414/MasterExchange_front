import { useState } from "react";
//atomics
import Field from "../atomics/Field";

const Profile = () => {
  const [fields, setFields] = useState({});

  const fnOnChange = (evt) => {
    const { name, value } = evt.target;
    setFields({ ...fields, [name]: value });
  };
  const fnSend = () => {
    alert(JSON.stringify(fields));
  };

  return (
    <div>
      <h3>Profile..</h3>
      <div>
        <label>Email:{fields.email}</label>
        <Field name={"email"} value={fields.value} onChange={fnOnChange} />
      </div>
      <div>
        <label>alias:{fields.alias}</label>
        <Field name={"alias"} value={fields.value} onChange={fnOnChange} />
      </div>
      <button onClick={fnSend}> Send </button>
    </div>
  );
};
export default Profile;
