export const login = (user) => {
  const { email, password } = user;
  const delay = (0.7 + Math.random() * 2) * 1000;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === "admin" && !!email) {
        resolve();
      } else {
        reject(new Error("In valid email or password"));
      }
    }, delay);
  });
};
