import style from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <header className={style.header}>
        <div> 🌏 World Database</div>
        {/* ctrl+cmd+space=emoji     */}
      </header>
      <main className={style.main}>{children}</main>
    </div>
  );
}
