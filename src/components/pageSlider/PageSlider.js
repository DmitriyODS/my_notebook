import styles from './PageSlider.module.css';

function PageSlider(props) {
    const items = props.items.map((it) => {
        let styleClasses = `${styles.item}`;
        if (it.id === props.selectedID) {
            styleClasses += ` ${styles.active}`;
        }

        return (
            <div key={it.id} className={styleClasses} onClick={() => {
                if (it.id !== props.selectedID) {
                    props.changeSection(it.id);
                }
            }}>
                <h2>{it.title}</h2>
            </div>
        );
    })

    return (
        <div className={styles.root}>
            {items}
        </div>
    );
}

export default PageSlider;