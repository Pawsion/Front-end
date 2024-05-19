import { users } from "../../shared/dummy";

export async function login(formData: { get: (arg0: string) => string }) {
  const username = formData.get("username");
  const password = formData.get("password");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(
        (user: { username: string; password: string }) =>
          user.username === username && user.password === password
      );
      if (user) {
        resolve({ success: true, user });
      } else {
        reject(new Error("Invalid username or password"));
      }
    }, 1000);
  });
}