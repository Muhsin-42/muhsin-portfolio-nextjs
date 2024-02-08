import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";
const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="btn-primary group w-52 dark:bg-white/10"
      disabled={pending}
    >
      {pending ? (
        <div className="loader-primary"></div>
      ) : (
        <>
          Submit
          <FaPaperPlane className="text-xs opacity-70 transition delay-150 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </>
      )}
    </button>
  );
};

export default SubmitBtn;
