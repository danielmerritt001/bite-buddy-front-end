// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ProfileList from './pages/ProfileList/ProfileList'
import ProfileDetails from './pages/ProfileDetails/ProfileDetails'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import RecipeList from './pages/RecipeList/RecipeList'
import RecipeDetails from './pages/RecipeDetails/RecipeDetails'
import BoardList from './pages/BoardList/BoardList'
import BoardDetails from './pages/BoardDetails/BoardDetails'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as recipeService from './services/recipeService'

// styles
import './App.css'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')

  //once we call this function we can undo comments but must connect with backend first to receive function that connects with API
  // const getRecipes = async () => {
  //   const response = await getRecipesData()
  //   const data = await response.json()
  //   setRecipes(data.hits)
  //   console.log(data.hits)
  // }

  useEffect(() =>{
    const fetchAllRecipes = async () => {
      const data = await recipeService.index()
      setRecipes(data)
    }
    if (user) fetchAllRecipes()
  }, [user])

  const updateSearch = e => {
    setSearch(e.target.value)
    console.log(query)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
  }

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
        <div className="bite-buddy-title">
          <h1><b>Bite Buddy</b></h1>
        </div>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Type your favorite ingredients..."/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {/* we will map through the recipes within recipelist */}
        <RecipeList recipes={recipes}/>
      </div>
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route 
        // change profile list to profile once backend is in communication with front end
          path='/profilelist'
          element={<ProfileList/>}
        />
        <Route 
          path='/profiles/:profileId'
          element={<ProfileDetails/>}
        />
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
        <Route
          path='/recipes'
          element={
          // <ProtectedRoute user={user}>
            <RecipeList recipes={recipes}/>
          }
        />
        <Route 
          path='/recipes/:recipeId'
          element={
            <RecipeDetails/>
          }
        />
        <Route
          path='/boards'
          element={
            <BoardList/>
          }
        />
        <Route 
          path='/boards/:boardId'
          element={
            <BoardDetails/>
          }
        />
      </Routes>
    </>
  )
}

export default App
