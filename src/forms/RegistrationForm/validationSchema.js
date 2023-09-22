import { object, string } from "yup";

const validationSchema = object({
  email: string().email().trim().min(3).required("Email is required"),
  username: string().trim().min(2).required("Username is required"),
  password: string().trim().min(4).max(10).required("Password is required"),
  name: string().trim().min(2),
});

export default validationSchema;
