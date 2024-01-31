import About from "@/components/Sections/About";
import Intro from "@/components/Sections/Intro";
import SectionDivider from "@/components/Shared/SectionDivider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
    </main>
  );
}
