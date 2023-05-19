// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/boards`

async function index(boardQuery) {
  try {
    const res = await fetch(`${BASE_URL}/?title=${boardQuery}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function show(boardId) {
  try {
    const res = await fetch(`${BASE_URL}/${boardId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function create(blogFormData) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(blogFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function update(boardFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${boardFormData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(boardFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteBoard(boardId) {
  try {
    const res = await fetch(`${BASE_URL}/${boardId}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function addRecipeToBoard(formData) {
  try {
    const res = await fetch(`${BASE_URL}/${formData.boardId}/recipes`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function removeRecipeFromBoard(boardId, foodId) {
  try {
    const res = await fetch(`${BASE_URL}/${boardId}/recipes/${foodId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  index,
  show,
  create,
  update,
  deleteBoard as delete,
  addRecipeToBoard,
  removeRecipeFromBoard,
}