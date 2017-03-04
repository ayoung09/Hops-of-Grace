import axios from 'axios';

//-------------------- product related actions ----------------------------
/*  load all products . . . to show on front page for non-authenticated, non-session new users
    many-filter products . . . based on the nav bar categories passed in, filter all products through 1 or more matches
    one-filter products . . . typed in search from home screen - exact or partial match - no preset categories
    get user-products-cart . . . if logged-in, from cookie-cart session
    get user-products-history . . . if logged-in, from purchasing history
    select product . . . focused product from click interaction - single page product display
    create product . . . brewer creates/adds product
      get related products - maybe not necessary - just run through the many-filter to get like brew & flavor...the 'you might also like' feature in amazon

    other?

*/







const productReducer = (state=null, action) => {
  switch(action.type) {
  case AUTHENTICATED:
    return action.user;
  }
  return state;
}

const AUTHENTICATED = 'AUTHENTICATED';

export const authenticated = user => ({
  type: AUTHENTICATED, user
})

export const login = (username, password) =>
  dispatch =>
    axios.post('/api/auth/login/local',
      {username, password})
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        dispatch(authenticated(user))
      })
      .catch(failed => dispatch(authenticated(null)))


export default productReducer;
