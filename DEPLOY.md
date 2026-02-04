# Deploying to Netlify via GitHub

Since I cannot access your GitHub account directly, follow these steps to deploy your website.

## 1. Commit Your Code
I have already initialized the Git repository and styled the files. You need to commit them.
Open your terminal in `d:/calculator-website` and run:

```bash
# Set your identity (if you haven't already globally)
git config user.email "your-email@example.com"
git config user.name "Your Name"

# Commit the files
git commit -m "Initial commit of Timetable Generator"
```

## 2. Create a Repository on GitHub
1. Go to [GitHub.com](https://github.com/new).
2. Create a new repository name, e.g., `liquid-timetable`.
3. Do **not** initialize with README, .gitignore, or license (we have code locally).
4. Click **Create repository**.

## 3. Push to GitHub
Copy the commands from GitHub's "...or push an existing repository from the command line" section, or use these (replace `YOUR_USERNAME`):

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/liquid-timetable.git
git push -u origin main
```

## 4. Deploy on Netlify
1. Log in to [Netlify](https://app.netlify.com/).
2. Click **"Add new site"** > **"Import from an existing project"**.
3. Select **GitHub**.
4. Authorize Netlify to access your GitHub account.
5. Search for `liquid-timetable` and select it.
6. **Build Settings**:
   - For this Vanilla JS site, you can leave the "Build command" and "Publish directory" **blank** (or set Publish directory to `.`).
7. Click **Deploy site**.

🎉 Your site will be live in a few seconds!
