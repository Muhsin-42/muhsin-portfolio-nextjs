import { useActiveSectionContext } from "@/context/activeSectionContext";
import { TypeSectionsName } from "@/lib/types";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useSectionInView = (SectionName: TypeSectionsName, threshold = 0.5) => {
  const { ref, inView } = useInView({
    threshold, // if 75% of section in view then true
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    // disable the observer whene it is navigating from navbar
    if (inView && Date.now() - timeOfLastClick > 1000)
      setActiveSection(SectionName);
  }, [inView, setActiveSection, SectionName, timeOfLastClick]);

  return { ref };
};

export default useSectionInView;
