const initialState = { favoritesFilm: []}

function toggleFavorite (state, action) {
  let nextState
  switch(action.type){
    case 'TOGGLE_FAVORITE':
      const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.id ===action.value.id)
      if (favoriteFilmIndex !== -1) {
        // Le film est déjà dans les favoris, on le supprime
        nextState = {
          ...state,
          favoritesFilm: state.favoritesFilm.filter((item, index) => index !== favoriteFilmIndex)
          //la fonction filter sert à enlever un film précis avec un index donné
        }
      }
      else {
        //film pas encore dans les favoris, on l'ajoute à la liste
        nextState = {
          ...state,
          favoritesFilm: [...state.favoritesFilm, action.value]
        }
      }
    return nextState || state
    default:
      return state
  }

export default toggleFavorite
