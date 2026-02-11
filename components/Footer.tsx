import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="col-span-1 lg:col-span-12 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
      <p>© 2026 Nicolás Beru. All rights reserved.</p>
      <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/jhoan-nicolas-beru-alvarez-a30a61210" blank="_blank" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
        <a href="https://github.com/jackira01" blank="_blank" target="_blank" className="hover:text-white transition-colors">Github</a>
      </div>
    </footer>
  );
};

export default Footer;