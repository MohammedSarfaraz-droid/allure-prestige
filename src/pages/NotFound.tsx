import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404 — route not found:", location.pathname);
  }, [location.pathname]);

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-cream px-6 pt-40 pb-32">
      <div className="text-center max-w-[600px]">
        <p className="overline">ERROR · 404</p>
        <h1
          className="font-serif italic text-ink mt-6 leading-none"
          style={{ fontSize: "clamp(72px, 14vw, 144px)" }}
        >
          Not Found<span className="text-gold">.</span>
        </h1>
        <div className="w-16 h-px bg-gold mx-auto my-10" />
        <p className="font-sans font-light text-[16px] text-ink-light leading-[1.85]">
          The page you are looking for does not exist — or has, like all elegant things, moved on.
        </p>
        <Link
          to="/"
          className="inline-block mt-10 nav-link bg-gold text-ink px-9 py-3.5 hover:bg-gold-light transition-colors duration-250"
          style={{ borderRadius: 2 }}
        >
          Return Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
