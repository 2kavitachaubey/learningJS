import Header from "@/components/Header";
import Practice from"@/components/Practice";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {

  return(
      <main style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
        <Practice thisPage="chaubey" />

        <div style={{ marginTop: "20px", borderTop: "1px solid #ccc", paddingTop: "20px" }}>
          <Component {...pageProps} />
        </div>
      </main>

  );
}
