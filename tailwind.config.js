/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        'open': ["Open Sans"],
        'papri': ["Paprika"],
      },
      colors:{
        'primary':"#1BBF00",
        'secondary':"#160C6D",
        'thrid':"#141135",
      },
      maxWidth:{
        "container":"1170px"
      }
      ,
      backgroundImage:{
        "banner":"url('./assets/banner.png')"
      }
    },
  },
  plugins: [],
}