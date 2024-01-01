import React from "react";

export default function Footer() {
  return (
    <footer className="mt-auto flex-wrap min-h-max w-full items-center justify-center bg-white px-6 py-4">
      <div className="text-center font-light">
        <p>
          <a href="\privacypolicypage">Privacy and Policy</a></p>
      </div>

      <p
        className="
            text-center font-light 
            text-core-text-950
            "
      >
        Copyright &copy; {new Date().getFullYear()} All Rights Reserved
      </p>
      
      
    </footer>
  );
}
