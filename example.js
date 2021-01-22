const FormData = require('form-data')
const fetch = require('node-fetch')
const url = 'https://play.hyper63.com'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJoeXBlcjYzIiwiaWF0IjoxNjExMTYwMjMwLCJleHAiOjI1NTc4ODgyMzB9.HzWKLVs_cHKvCQ1l-cA2mkle63BwAD9C1Ee5-WagVDw'
const s = require('./index')()
const form = new FormData()
form.append('file', s, {
  filename: 'picture3.jpg',
  type: 'image/jpg'
})

fetch(`${url}/storage/posters`, {
  method: 'POST',
  headers: {
    authorization: `Bearer ${token}`
  },
  body: form
})
  .then(response => response.json())
  .then(json => console.log(json))


