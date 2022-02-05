export default async function ({ route, store, redirect, $axios }) {
  // Check if user is logged in locally.
  if (store.state.auth.isAuthenticated) {
    return;
  }
  try {
    // If not logged in, attempt to grab user object.
    let info = await $axios.get("/user", { withCredentials: true });
    // Commit change to page
    console.log(info.data.user);
    store.dispatch('auth/setUser', info.data.user);
  } catch(error) {
    if (error.response.data.message === 'not_authenticated') {
    // Redirect to login page. User needs to authenticate.
    console.log(error.response.data.message)
     // return redirect('/login');
    }
  }
}