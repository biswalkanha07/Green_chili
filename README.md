# 🌶️ Green Chili Restaurant Website

A modern, responsive restaurant website built with React, TypeScript, and Vite. Features a beautiful UI with Tailwind CSS and smooth animations.

## 🚀 Features

- **Modern Design**: Clean and responsive UI with Tailwind CSS
- **TypeScript**: Type-safe code for better development experience
- **Fast Performance**: Built with Vite for lightning-fast builds
- **Smooth Animations**: Engaging user experience with motion effects
- **Menu Display**: Showcasing chef specials and dishes
- **Booking System**: Easy table reservation interface
- **Delivery Information**: Clear delivery zones and availability

## 📦 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Motion** - Animation library
- **Lucide React** - Beautiful icons

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ installed on your system

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/biswalkanha07/Green_chili.git
   cd Green_chili
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   
   The app will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🌐 Deploy to Netlify

### Method 1: Using Netlify CLI (Recommended)

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

### Method 2: Using Netlify Web Interface

1. Go to [Netlify](https://app.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub account and select the `Green_chili` repository
4. Netlify will automatically detect the build settings from `netlify.toml`
5. Click "Deploy site"

**That's it!** Netlify will automatically:
- Run `npm run build`
- Deploy the `dist` folder
- Set up SPA routing
- Provide you with a live URL

### Method 3: Drag & Drop

1. Build the project locally:
   ```bash
   npm run build
   ```

2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop the `dist` folder
4. Your site will be live instantly!

## 📁 Project Structure

```
Green_chili/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ChefSpecial.tsx
│   │   ├── DishCard.tsx
│   │   ├── BookingForm.tsx
│   │   └── ...
│   ├── App.tsx          # Main app component
│   ├── App.css          # Main styles
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── netlify.toml         # Netlify configuration
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── tailwind.config.js   # Tailwind CSS configuration
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 Environment Variables

This project doesn't currently use environment variables. If you need to add any in the future:

1. Create a `.env` file in the root directory
2. Add your variables with `VITE_` prefix
3. Access them in code using `import.meta.env.VITE_YOUR_VARIABLE`

For Netlify deployment, add environment variables in:
**Site Settings → Environment Variables**

## 🎨 Customization

- **Colors**: Modify Tailwind configuration or CSS variables in `src/index.css`
- **Components**: Edit component files in `src/components/`
- **Assets**: Add images and icons to `public/` folder

## 🐛 Troubleshooting

### Build fails on Netlify
- Check Node version in `netlify.toml` matches your local version
- Clear Netlify cache and retry deployment
- Check build logs for specific errors

### Routing issues after deployment
- The `netlify.toml` and `public/_redirects` files handle SPA routing
- Ensure these files are committed to your repository

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Biswal Kanha**
- GitHub: [@biswalkanha07](https://github.com/biswalkanha07)

## 🙏 Acknowledgments

- Built with love for food enthusiasts
- Inspired by modern restaurant web design trends

---

**Enjoy your Green Chili experience!** 🌶️✨
