/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/assets/fonts/fonts.css",
  ],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        roboto: ["Roboto"],
      },
      colors: {
        primary: {
          0: "#000000",
          10: "#410005",
          20: "#68000E",
          30: "#980019",
          35: "#930018",
          36: "#BE3846",
          40: "#BE0924",
          41: "#C00C25",
          45: "#C00C25",
          50: "#E22D39",
          60: "#FF5355",
          70: "#FF8984",
          75: "#FFA8C6",
          80: "#FFB3AF",
          90: "#FFDAD7",
          95: "#FFEDEB",
          99: "#FFFBFF",
          100: "#FFFFFF", //Warna bg
        },
        secondary: {
          0: "#000000",
          5: "#020617",
          10: "#1A1C1C",
          20: "#2F3131",
          30: "#454747",
          35: "#504E4E",
          40: "#3E4040",
          45: "#61646B;",
          50: "#575859",
          55: "#61646B",
          60: "#909191",
          65: "#9593A0",
          70: "#AAABAB",
          80: "#C6C6C7",
          90: "#E2E2E2",
          91: "#F3F4F6",
          95: "#FFFBFF",
          99: "#FFF5F5",
          100: "#F5F5F5",
          101: "#FFFFFF",
        },
        tertiary: {
          0: "#000000",
          10: "#271900",
          20: "#422D00",
          30: "#5E4200",
          40: "#7D5800",
          50: "#9C6F00",
          60: "#B98822",
          70: "#D7A23C",
          80: "#F5BD54",
          90: "#FFDEA9",
          95: "#FFEED8",
          99: "#FFFBFF",
          100: "#FFFFFF",
        },
        error: {
          0: "#000000",
          10: "#410002",
          20: "#690005",
          30: "#93000A",
          40: "#BA1A1A",
          50: "#DE3730",
          60: "#FF5449",
          70: "#FF897D",
          80: "#FFB4AB",
          90: "#FFDAD6",
          95: "#FFEDEA",
          99: "#FFFBFF",
          100: "#FFFFFF",
        },
        neutral: {
          0: "#000000",
          10: "#201A1A",
          15: "#0F172A",
          20: "#362F2E",
          21: "#4C4C4C",
          30: "#4D4544",
          35: "#4F4F4F",
          40: "#374151",
          45: "#8B8B8B",
          50: "#7F7574",
          60: "#998E8D",
          70: "#B4A9A8",
          80: "#D0C4C3",
          85: "#CFCFCF",
          90: "#EDE0DE",
          95: "#FBEEEC",
          96: "#E6DEDD",
          99: "#FFFBFF",
          100: "#FFFFFF",
        },
        neutralVariant: {
          0: "#000000",
          10: "#251918",
          20: "#3B2D2C",
          30: "#534342",
          40: "#6B5A59",
          50: "#857372",
          60: "#A08C8B",
          70: "#BBA6A5",
          80: "#D8C1C0",
          90: "#F4DDDB",
          95: "#FFEDEB",
          99: "#FFFBFF",
          100: "#FFFFFF",
        },
        //custom warna yang tidak terdapat di design sistem UI/UX
        base: {
          25: "#2B3440", //new ar
          50: "#F2F2F2",
          100: "#1F2937",
          110: "#64748B",
          120: "#1F2937",
          140: "#D1D5DB",
          150: "#980019",
          160: "#6F6F6F",
          170: "#FAFAFA",
          180: "#383A47",
          300: "#E5E6E6",
          400: "#D4DBFF",
          401: "#F0F4FF",
          402: "#F9FAFB",//baru thalita
          403: "#F2F2F2",//baru thalita
          404: "#5C5C5C",//baru thalita
          405: "#DBDBDD", //baru thalita
          406: "#3F3F3F", //baru thalita

        },
      },
      boxShadow: {
        custom: "0px 8px 16px 0px #00000014",
        "custom-1": "0px 8px 16px 0px #00000014",
        "custom-3": "0px 2px 4px 0px #00000024",
        "custom-5": "0px 1px 2px -1px #0000001A",
      },
      Shadow: {
        "custom-2": "0px 0px 4px 0px #0000000A",
        "custom-4": "0px 0px 6px 0px #0000000D",
        "custom-6": "0px 1px 3px 0px #0000001A",
      },
    },
  },
  plugins: [require("daisyui")],
};

// List Pageckage/Library yang di install
// 1.
// 2.
// 3.
// 4.
// 5.
// 6.
// 7.
// 8.
// 9.
// 10.
// Dst
