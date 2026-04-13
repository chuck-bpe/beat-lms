export function SignOutButton() {
  return (
    <form action="/auth/sign-out" method="post">
      <button className="button secondary" type="submit">
        Sign out
      </button>
    </form>
  );
}
