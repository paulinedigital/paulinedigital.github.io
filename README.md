# PAULINE.DIGITAL

__NOTE__
- make sure to replace `username` with your GitHub username
- make sure to replace `yourdomain.com` with your custom domain name

## Setup Github (user) pages

- Create a new repo named `username@github.io` with `README.md`
- Create a new branch named `dev`
- Change default branch to `dev` in `Settings > Branches`
- Clone the repository
	- Use `dev` branch for development
	- Don't touch `master` branch, as it will be used for the live site

## Setup Cloudflare
1. DNS tab:
	- add CNAME record
		- NAME: `yourdomain.com`
		- VALUE `username@github.io`
		- TTL `Automatic`
	- add CNAME record
		- NAME: `www`
		- VALUE `username@github.io`
		- TTL `Automatic`
2. Crypto tab:
	- Enable SSL `Flexible`
3. Page rules tab:
	- Create page rule
		- `http://yourdomain.com/*`
		- Always use HTTPS
	- Create page rule
		- `https://yourdomain.com/*`
		- Cache Level: Cache Everything

## Setup project

`dist` directory will contain compiled build files, make sure it's not in `.gitignore`!

Sample project directory/file architecture:
```
.
├── dist
│  ├─ index.html
│  ├─ CNAME
│  └─ ect..
│
├── src
│  ├─ index.html
│  ├─ CNAME
│  └─ etc..
│
├─ .gitignore
├─ package.json
├─ README.md
└─ ect...
```
__NOTE__ CNAME and index.html are minimum required files for GitHub user pages to work. CNAME should contain `yourdomain.com`.

## Deploy
- Commit and push all changes on `dev` branch
- Use `git push origin :master && git subtree push --prefix dist origin master`
	- This will clear `master` branch and deploy `dist` directory to `master`
