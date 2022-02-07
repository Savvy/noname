export default async function ({ route, store, redirect, $axios }) {
  // Check if user is logged in locally.
  if (!store.state.auth.user) {
    return redirect('/login');
  }
}