import s from './style.module.css'


const Layout = ({id, title, colorBg, urlBg, children }) => {
    const styleColorBg = colorBg ? {backgroundColor: colorBg} : {};
    const styleUrlBg = urlBg ? {backgroundImage: `url(${urlBg})`} : {};
    return (
        <section className={s.root} id={id} style={{...styleColorBg, ...styleUrlBg}}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        { title && (<h3>{title}</h3>)}
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        {children && (children)}
                    </div>
                </article>
            </div>
        </section>
    )
};

export default Layout;

