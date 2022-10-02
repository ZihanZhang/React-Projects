import jsonPlaceholder from '../apis/jsonPlaceholder'
import _ from 'lodash'

export const fetchPostsAndUsers = () => async (dispatch, getState) =>{
  await dispatch(fetchPosts())
  // const userIds = _.uniq(_.map(getState().posts, 'userId'))
  // userIds.forEach(id => dispatch(fetchUser(id)))

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()
}

export const fetchPosts = () => async dispatch => {
    //bad way
    // const res = await jsonPlaceholder.get('/posts')
    const res = await jsonPlaceholder.get('/posts')

    // return {
    //   type: 'FETCH_POSTS',
    //   payload: promise
    // }

    dispatch({type: 'FETCH_POSTS', payload: res.data})
}

// export const fetchUser = id => dispatch => _fetchUser(id, dispatch)

// const _fetchUser = _.memoize(async(id, dispatch) => {
//   const res = await jsonPlaceholder.get(`/users/${id}`)

//   dispatch({type: 'FETCH_USER', payload: res.data})  
// })

export const fetchUser = id => async dispatch  => {
  const res = await jsonPlaceholder.get(`/users/${id}`)

  dispatch({type: 'FETCH_USER', payload: res.data})  
}