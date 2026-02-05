# Deploying Your Timetable Generator

This project is optimized for **Cloudflare Pages** or **GitHub Pages** to ensure high reliability and avoid bandwidth limits.

## 1. Primary Recommendation: Cloudflare Pages (Unlimited)
Cloudflare is recommended because it offers **unlimited bandwidth** on its free tier.

1. Log in to [Cloudflare](https://dash.cloudflare.com) and go to **Workers & Pages**.
2. Click **Create application** > **Pages** > **Connect to Git**.
3. Select your GitHub repository: `ashu999gold-dot/timetable`.
4. **Build Settings**:
   - **Framework preset**: None
   - **Build command**: (Leave empty)
   - **Build output directory**: `.`
5. Click **Save and Deploy**.

## 2. Alternative: GitHub Pages (100GB/mo)
1. Go to your repository on GitHub.
2. Click **Settings** > **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Branch: `main` / `(/root)`.
5. Click **Save**.

## 3. Maintenance
Whenever you request a change and I push it, the site will **automatically update** on both platforms.

🎉 Your "trouble-free" site is ready!
