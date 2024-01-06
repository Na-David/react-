import style from "./SubLayout.module.css"

export default function SubLayout({children}){
    return <div className="SubLayout">
        <div>{children}</div>
        <div className={style.footer}>David-Na</div>
    </div>
}