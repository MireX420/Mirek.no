import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="footer__note">no trackers · no cookies · no third-party requests</p>
      </div>
    </footer>
  );
}
