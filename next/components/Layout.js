import style from "./Layout.module.css"

export default function Layout({children}){
 return <div className="Layout">
    <header className={style.header}>🌏 World Database</header>
    {/* ctrl+cmd+space=emoji     */}
    <main className={style.main}>{children}</main>
 </div>
}