# 🚀 Deploy Green Chili to Netlify

This guide will help you deploy your Green Chili restaurant website to Netlify.

## ✅ Prerequisites Done
- [x] `netlify.toml` configuration file created
- [x] `public/_redirects` file for SPA routing
- [x] Build process verified and working
- [x] Code pushed to GitHub

## 🌐 Deployment Options

### Option 1: Deploy via Netlify Web Interface (Easiest)

1. **Go to Netlify**
   - Visit [https://app.netlify.com/](https://app.netlify.com/)
   - Sign up or log in (you can use your GitHub account)

2. **Import Project**
   - Click **"Add new site"** → **"Import an existing project"**
   - Choose **"Deploy with GitHub"**
   - Authorize Netlify to access your GitHub account
   - Select the **`Green_chili`** repository

3. **Configure Build Settings**
   - Netlify will automatically detect the settings from `netlify.toml`:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click **"Deploy site"**

4. **Wait for Deployment**
   - Netlify will install dependencies, build your project, and deploy it
   - This usually takes 2-3 minutes

5. **Your Site is Live! 🎉**
   - You'll get a random URL like `https://random-name-123.netlify.app`
   - You can customize this URL in Site settings → Domain management

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```
   This will open your browser to authorize the CLI.

3. **Initialize and Deploy**
   ```bash
   # From your project directory
   netlify init
   ```
   - Choose "Create & configure a new site"
   - Select your team
   - Enter a site name (or let Netlify generate one)
   - Accept the detected build settings

4. **Deploy to Production**
   ```bash
   netlify deploy --prod
   ```

### Option 3: Drag & Drop (Quick Test)

1. **Build Locally**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop the **`dist`** folder
   - Your site will be live in seconds!

Note: This creates a temporary site. For permanent hosting, use Option 1 or 2.

## 🔧 Post-Deployment

### Custom Domain (Optional)
1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Follow the instructions to configure DNS

### Environment Variables (If Needed)
1. Go to **Site settings** → **Environment variables**
2. Add any required variables with `VITE_` prefix

### Continuous Deployment
Netlify automatically deploys when you push to the `main` branch on GitHub!

## 📊 What Happens During Deployment

1. ✅ Netlify clones your GitHub repository
2. ✅ Installs dependencies (`npm install`)
3. ✅ Runs the build command (`npm run build`)
4. ✅ Publishes the `dist` folder
5. ✅ Sets up SPA routing from `_redirects` file
6. ✅ Applies security headers from `netlify.toml`
7. ✅ Provides HTTPS certificate automatically
8. ✅ Sets up CDN for fast global delivery

## 🎯 Recommended: Option 1 (Web Interface)

For your first deployment, I recommend **Option 1** (Web Interface) because:
- ✅ Most visual and beginner-friendly
- ✅ Easy to monitor build logs
- ✅ Automatic continuous deployment from GitHub
- ✅ One-click rollbacks if needed

## 🐛 Troubleshooting

### Build Fails
- Check the build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify Node version matches (we use Node 18)

### 404 Errors on Routes
- The `_redirects` and `netlify.toml` files handle this
- Make sure they're in your repository

### Site Not Updating
- Check if the latest commit is deployed
- Try clearing Netlify cache: **Deploys** → **Trigger deploy** → **Clear cache and deploy**

## 📝 Quick Checklist

- [x] Code pushed to GitHub
- [x] `netlify.toml` file present
- [x] `public/_redirects` file present  
- [x] Build successful locally (`npm run build`)
- [ ] GitHub account ready
- [ ] Netlify account ready (or create one)
- [ ] Follow Option 1 steps above

---

**Need Help?** Check Netlify's [official documentation](https://docs.netlify.com/) or their support chat.

**Ready to deploy?** Follow **Option 1** above and your site will be live in minutes! 🚀
