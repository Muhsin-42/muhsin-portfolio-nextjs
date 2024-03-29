import About from "@/components/Sections/About";
import ContactUs from "@/components/Sections/ContactUs";
import Experiences from "@/components/Sections/Experiences";
import Intro from "@/components/Sections/Intro";
import Projects from "@/components/Sections/Projects";
import Skills from "@/components/Sections/Skills";
import SectionDivider from "@/components/Shared/SectionDivider";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experiences />
      <SectionDivider />
      <ContactUs />
    </main>
  );
}
