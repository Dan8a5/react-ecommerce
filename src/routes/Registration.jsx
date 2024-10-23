// src/routes/Registration.jsx
import { Form } from "react-router-dom";
import { z } from "zod";
import styles from "./Registration.module.css";

// Validation schema
const RegistrationSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .transform((email) => email.toLowerCase()),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const Registration = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Create Account</h2>
        <p className={styles.subtitle}>Join our community today</p>

        <Form method="post" className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={styles.input}
              placeholder="Create a password"
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Create Account
          </button>

          <p className={styles.terms}>
            By creating an account, you agree to our{" "}
            <a href="#" className={styles.link}>
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className={styles.link}>
              Privacy Policy
            </a>
          </p>
        </Form>
      </div>
    </div>
  );
};

// Add the action export
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    // Validate the form data
    const validatedData = RegistrationSchema.parse(data);

    // Here you would typically:
    // 1. Hash the password
    // 2. Save to database
    // 3. Create session/token
    console.log("Registration data:", validatedData);

    return { ok: true };
  } catch (error) {
    return {
      ok: false,
      errors: error.errors || [{ message: "Registration failed" }],
    };
  }
};

export default Registration;
