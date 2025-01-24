export function useUser() {
  const user = ref<{ username: string; id: string }>();
  const token = ref<string>();

  const userStorage = localStorage.getItem("user");
  const tokenStorage = localStorage.getItem("token");
  if (userStorage && tokenStorage) {
    user.value = JSON.parse(userStorage);
    token.value = tokenStorage;
  }

  watchEffect(() => {
    if (user.value && token.value) {
      localStorage.setItem("user", JSON.stringify(user.value));
      localStorage.setItem("token", token.value);
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
  });

  return { user, token };
}
