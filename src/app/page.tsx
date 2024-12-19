import Header from "./components/header";
import Section from "./components/section";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen flex flex-col">
      <Header />
      <Section />
      <Footer/>
    </div>
  );
}
