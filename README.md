# hyper63 upload example

This project is used for the hyper63 storage sandbox to demo how to upload a file to hyper63 storage.

```
const FormData = require('form-data')
const fetch = require('fetch')
const s = require('@hyper63/storage-demo')
const url = 'https://play.hyper63.com'
const token = '...'

const form = new FormData()
form.append('file', s, {
  type: 'image/jpg',
  filename: 'somepicture.jpg'
})

await ( await fetch(`${url}/storage/posters`, {
  method: 'POST',
  headers: { authorization: `Bearer ${token}` },
  body: form
})).json()
```

