import About from "@/components/Sections/About";
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
      {/* <div>
        <div
          id=""
          class="vertical-timeline-element--work vertical-timeline-element"
        >
          <span
            style="background:rgb(33, 150, 243);color:#fff"
            class="vertical-timeline-element-icon is-hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </span>
          <div
            style="background:rgb(33, 150, 243);color:#fff"
            class="vertical-timeline-element-content is-hidden"
          >
            <div
              style="border-right:7px solid  rgb(33, 150, 243)"
              class="vertical-timeline-element-content-arrow"
            ></div>
            <h3 class="vertical-timeline-element-title">Creative Director</h3>
            <h4 class="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
            <span class="vertical-timeline-element-date">2011 - present</span>
          </div>
        </div>
      </div> */}
    </main>
  );
}
