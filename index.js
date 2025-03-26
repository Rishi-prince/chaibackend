require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const githubdata={
  "login": "Rishi-prince",
  "id": 132259523,
  "node_id": "U_kgDOB-Ieww",
  "avatar_url": "https://avatars.githubusercontent.com/u/132259523?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Rishi-prince",
  "html_url": "https://github.com/Rishi-prince",
  "followers_url": "https://api.github.com/users/Rishi-prince/followers",
  "following_url": "https://api.github.com/users/Rishi-prince/following{/other_user}",
  "gists_url": "https://api.github.com/users/Rishi-prince/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Rishi-prince/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Rishi-prince/subscriptions",
  "organizations_url": "https://api.github.com/users/Rishi-prince/orgs",
  "repos_url": "https://api.github.com/users/Rishi-prince/repos",
  "events_url": "https://api.github.com/users/Rishi-prince/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Rishi-prince/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Prince kumar",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 1,
  "following": 2,
  "created_at": "2023-05-01T08:57:16Z",
  "updated_at": "2025-03-26T09:45:06Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/facebook',(req,res)=>{
    res.send('rishibhardwaj')
})
app.get('/facebook',(req,res)=>{
  res.send('rishibhardwaj')
})

app.get('/github',(req,res)=>{
  res.json(githubdata)
})

app.get('/signup',(req,res)=>{
    res.send('<h1>please signup at chai or code...</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})