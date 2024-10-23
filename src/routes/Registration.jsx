import { Form } from "react-router-dom";

export const action = () => {
  return;
};

const Registration = () => {
  return (
    <Form>
      <label>
        Your Email Address
        <input
          name="username"
          type="email"
          placeholder="you@supercoolhumnan.com"
        />
      </label>
      <label>
        Password
        <input name="password" type="password" placeholder="password" />
      </label>
    </Form>
  );
};

export default Registration;
