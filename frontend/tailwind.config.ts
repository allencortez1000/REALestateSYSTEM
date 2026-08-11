const config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 50:'#eef2fb',100:'#d5e0f5',200:'#aac1eb',300:'#7a9ddc',400:'#4f79cc',500:'#2f5bb8',600:'#23469a',700:'#1a337a',800:'#11235a',900:'#091540',950:'#040c28' },
        gold: { 50:'#fdf9ed',100:'#f9eed0',200:'#f2d99b',300:'#eac163',400:'#e0a832',500:'#c9861e',600:'#a86618',700:'#865014',800:'#693f12',900:'#4e2f0e' },
        cream: { 50:'#fefdfb',100:'#fcf9f4',200:'#f7f1e6',300:'#ede4d2' }
      },
      fontFamily: {
        sans: ['Inter','system-ui','sans-serif'],
        serif: ['Georgia','serif']
      },
      borderRadius: { '4xl':'2.5rem','5xl':'3rem' },
      boxShadow: {
        'soft':'0 4px 24px rgba(9,21,64,0.08)',
        'card':'0 2px 8px rgba(9,21,64,0.06),0 0 1px rgba(9,21,64,0.08)',
        'card-hover':'0 16px 48px rgba(9,21,64,0.14),0 0 1px rgba(9,21,64,0.08)',
        'luxury':'0 24px 80px rgba(9,21,64,0.18)',
        'float':'0 32px 96px rgba(9,21,64,0.22),0 8px 24px rgba(9,21,64,0.10)',
        'gold':'0 8px 32px rgba(201,134,30,0.25)',
        'glass':'0 8px 32px rgba(9,21,64,0.10),inset 0 1px 0 rgba(255,255,255,0.8)'
      },
      keyframes: {
        'fade-up':{ '0%':{ opacity:'0',transform:'translateY(24px)' },'100%':{ opacity:'1',transform:'translateY(0)' } },
        'fade-in':{ '0%':{ opacity:'0' },'100%':{ opacity:'1' } },
        'scale-in':{ '0%':{ opacity:'0',transform:'scale(0.96)' },'100%':{ opacity:'1',transform:'scale(1)' } },
        'float':{ '0%,100%':{ transform:'translateY(0px)' },'50%':{ transform:'translateY(-10px)' } },
        'shimmer':{ '0%':{ backgroundPosition:'-200% 0' },'100%':{ backgroundPosition:'200% 0' } },
        'pulse-ring':{ '0%':{ transform:'scale(0.9)',opacity:'0.8' },'100%':{ transform:'scale(1.5)',opacity:'0' } },
        'marquee':{ '0%':{ transform:'translateX(0)' },'100%':{ transform:'translateX(-50%)' } }
      },
      animation: {
        'fade-up':'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'fade-up-1':'fade-up 0.7s 0.1s cubic-bezier(0.16,1,0.3,1) both',
        'fade-up-2':'fade-up 0.7s 0.2s cubic-bezier(0.16,1,0.3,1) both',
        'fade-up-3':'fade-up 0.7s 0.3s cubic-bezier(0.16,1,0.3,1) both',
        'fade-up-4':'fade-up 0.7s 0.4s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in':'fade-in 0.5s ease-out both',
        'scale-in':'scale-in 0.4s cubic-bezier(0.16,1,0.3,1) both',
        'float':'float 6s ease-in-out infinite',
        'float-slow':'float 9s ease-in-out infinite',
        'shimmer':'shimmer 2.5s linear infinite',
        'pulse-ring':'pulse-ring 2s ease-out infinite',
        'marquee':'marquee 30s linear infinite'
      }
    }
  },
  plugins: []
};

export default config;
