import Navbar from "@/features/home/components/navbar";
import Footer from "@/features/home/components/footer";
import HomeLanding from "@/features/home/components/home-landing";

const DefaultPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HomeLanding />
      </main>
      <Footer />
    </>
  );
};
export default DefaultPage;