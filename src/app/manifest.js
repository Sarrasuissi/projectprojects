export default function manifest() {
  return {
    name: "finky",
    short_name: "Finky",
    description: "",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/x-icon",
      },
    ],
  };
}
