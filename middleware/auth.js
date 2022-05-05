export default async function ({ route, store, redirect, $axios }) {
  // Check if user is logged in locally.
  if (store.state.auth.isAuthenticated) {
    return;
  }
  try {
    // Run a check to see if the user is authenticated.
    store.dispatch('auth/checkUser');

    // If page is confirmation and the user is verified, redirect to home
    if (route.name === 'confirm-token' && store.state.auth.user.status === 'Active') {
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