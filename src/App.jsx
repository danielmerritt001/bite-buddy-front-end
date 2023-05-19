// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import ProfileList from './pages/ProfileList/ProfileList'
import ProfileDetails from './pages/ProfileDetails/ProfileDetails'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import RecipeList from './pages/RecipeList/RecipeList'
import RecipeDetails from './pages/RecipeDetails/RecipeDetails'
import BoardList from './pages/BoardList/BoardList'
import BoardDetails from './pages/BoardDetails/BoardDetails'
import NewBoard from './pages/NewBoard/NewBoard'
import EditBoard from './pages/EditBoard/EditBoard'
import EditComment from './pages/EditComment/EditComment'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as recipeService from './services/recipeService'
import * as boardService from './services/boardService'

// styles
import './App.css'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    const fetchAllRecipes = async () => {
      const data = await recipeService.index(query)
      setRecipes(data.hits)
    }
    if (user) fetchAllRecipes()
  }, [query, user])

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
  }

  const handleLogout = () => {
    setUser(null)
    authService.logout()
    navigate('/')
  }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }

  const handleGetRecipe = async (recipeId) => {
    const recipeObj = await recipeService.show(recipeId)
    return recipeObj
  }

  const handleAddBoard = async (boardFormData) => {
    await boardService.create(boardFormData)
    navigate('/boards')
  }

  const handleUpdateBoard = async (boardFormData) => {
    await boardService.update(boardFormData)
    navigate('/boards')
  }

  const handleDeleteBoard = async (boardId) => {
    await boardService.delete(boardId)
    navigate('/boards')
  }
  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <div className='bite-buddy-title'>
        <h1><b>Bite Buddy</b></h1>
      </div>
      <Routes>
        <Route
          path='/'
          element={
            <Landing user={user} />
          }
        />
        <Route
          path='/profiles'
          element={
            <ProtectedRoute user={user}>
              <ProfileList handleGetRecipe={handleGetRecipe} />
            </ProtectedRoute>
          }
        />
        <Route
          path='/profiles/:profileId'
          element={
            <ProtectedRoute user={user}>
              <ProfileDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path='/auth/signup'
          element={
            <Signup handleAuthEvt={handleAuthEvt} />
          }
        />
        <Route
          path='/auth/login'
          element={
            <Login handleAuthEvt={handleAuthEvt} />
          }
        />
        <Route
          path='/auth/change-password'
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
        <Route
          path='/recipes'
          element={
            <ProtectedRoute user={user}>
              <RecipeList
                recipes={recipes}
                query={query}
                search={search}
                getSearch={getSearch}
                updateSearch={updateSearch}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path='/recipes/:recipeId'
          element={
            <ProtectedRoute user={user}>
              <RecipeDetails user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path='/boards'
          element={
            <ProtectedRoute user={user}>
              <BoardList handleGetRecipe={handleGetRecipe} />
            </ProtectedRoute>
          }
        />
        <Route
          path='/boards/new'
          element={
            <ProtectedRoute user={user}>
              <NewBoard handleAddBoard={handleAddBoard} />
            </ProtectedRoute>
          }
        />
        <Route
          path='/boards/:boardId'
          element={
            <ProtectedRoute user={user}>
              <BoardDetails handleGetRecipe={handleGetRecipe} handleDeleteBoard={handleDeleteBoard}
                user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path='/boards/:boardId/edit'
          element={
            <ProtectedRoute user={user}>
              <EditBoard handleUpdateBoard={handleUpdateBoard} />
            </ProtectedRoute>
          }
        />
        <Route path='/recipes/:recipeId/comments/:commentId' element={
          <ProtectedRoute user={user}>
            <EditComment />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  )
}

export default App

