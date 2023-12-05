import style from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className="Layout">
      <header>
        <div> 🌏 World Database</div>
        {/* ctrl+cmd+space=emoji     */}
      </header>
      <main>{children}</main>
    </div>
  );
}
