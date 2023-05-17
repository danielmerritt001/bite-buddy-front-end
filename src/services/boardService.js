// services
import * as tokenService from './tokenService'
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/boards`


async function index() {
  try {
    const res = await fetch(BASE_URL, {
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
    // BASE_URL IS POST http://localhost:3001/api/boards
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

export {
  index,
  show,
  create,
  update,
  deleteBoard as delete,
}