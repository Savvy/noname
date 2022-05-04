export default async function ({ route, store, redirect, $axios }) {
  // Check if user is logged in locally.
  console.log('DISPATCHING');
  if (store.state.auth.isAuthenticated) {
    console.log('IS AUTHENTICATED');
    console.log(store.state.auth.user);
    return;
  }
  try {
    // If not logged in, attempt to grab user object.
    let { data } = await $axios.get("/user", { withCredentials: true });
    // Commit change to page
    store.dispatch('auth/setUser', data.user);

    // If page is confirmation and the user is verified, redirect to home
    if (route.name === 'confirm-token' && data.user.status === 'Active') {
      redirect('/');
    }
  } catch(error) {
    if (error.response.data.message === 'not_authenticated') {
    // Redirect to login page. User needs to authenticate.
      console.log(error.response.data.message);
      // return redirect('/login');
    }
  }
}