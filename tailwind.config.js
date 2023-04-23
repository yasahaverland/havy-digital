// Um tailwind config file "armazena" codigos usados frequentimente no seu app, como cores, tamanhos, sombras etc. Separando desse jeito o codigo fica mais limpo e organizado e fica mais facil manter a consistencia.
// https://v2.tailwindcss.com/docs/configuration - mais informações de como costumizar um tailwind config file
/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      primary: "#000000",
      secondary: "#aaa6c3",
      tertiary: "#151030",
      "black-100": "#100d25",
      "black-200": "#090325",
      "white-100": "#f3f3f3",
    },
    boxShadow: {
      card: "0px 35px 120px -15px #211e35",
    },
    screens: {
      xs: "450px",
    },
    backgroundImage: {
      "bank-pattern": "url('/src/assets/bankbg.png')",
    },
  },
};
export const plugins = [];