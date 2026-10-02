import { Link } from "react-router-dom";
import { FOCUS_RING } from "../styles";

export default function NotFound() {
  return (
    <div>
      <p className="font-mono text-xs text-muted">// 404</p>
      <h1 className="mt-3 font-display text-3xl font-semibold">Page not found</h1>
      <Link to="/" className={`mt-6 inline-block text-accent underline underline-offset-2 ${FOCUS_RING}`}>
        Back to home
      </Link>
    </div>
  );
}
