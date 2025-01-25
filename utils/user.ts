const user = ref<{ username: string; _id: string }>();

export default function useUser() {
  if (!user.value) {
    onMounted(async () => {
      user.value = await $fetch("/api/user");
    });
  }
  return user;
}
