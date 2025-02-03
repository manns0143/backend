require('dotenv').config()
const port = process.env.PORT

const express = require('express')
const app = express()

const githubData = {
    "login": "manns0143",
    "id": 196774409,
    "node_id": "U_kgDOC7qKCQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/196774409?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/manns0143",
    "html_url": "https://github.com/manns0143",
    "followers_url": "https://api.github.com/users/manns0143/followers",
    "following_url": "https://api.github.com/users/manns0143/following{/other_user}",
    "gists_url": "https://api.github.com/users/manns0143/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/manns0143/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/manns0143/subscriptions",
    "organizations_url": "https://api.github.com/users/manns0143/orgs",
    "repos_url": "https://api.github.com/users/manns0143/repos",
    "events_url": "https://api.github.com/users/manns0143/events{/privacy}",
    "received_events_url": "https://api.github.com/users/manns0143/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Mann",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 0,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2025-01-28T10:09:15Z",
    "updated_at": "2025-01-29T04:18:08Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/signin', (req, res) => {
    res.send('sign in page')
})

app.get('/signup', (req, res) => {
    res.send('sign up page')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})