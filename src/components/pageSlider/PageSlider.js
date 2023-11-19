import styles from './PageSlider.module.css';

// пункты для фильтра карточек
const sectionItems = [
    {
        id: 0, title: 'ВСЕ'
    },
    {
        id: 1, title: 'НОВЫЕ'
    },
    {
        id: 2, title: 'ГОТОВО'
    }
];

function PageSlider(props) {
    let bodyColor = styles.blue;
    let activeColor = styles.activeBlue;
    let itemColor = styles.itemBlue;
    switch (props.color) {
        case "blue": {
            bodyColor = styles.blue;
            activeColor = styles.activeBlue;
            itemColor = styles.itemBlue;
            break;
        }
        case "green": {
            bodyColor = styles.green;
            activeColor = styles.activeGreen;
            itemColor = styles.itemGreen;
            break;
        }
        case "red": {
            bodyColor = styles.red;
            activeColor = styles.activeRed;
            itemColor = styles.itemRed;
            break;
        }
        case "yellow": {
            bodyColor = styles.yellow;
            activeColor = styles.activeYellow;
            itemColor = styles.itemYellow;
            break;
        }
    }

    const items = sectionItems.map((it) => {
        let styleClasses = `${itemColor}`;
        if (it.id === props.selectedID) {
            styleClasses += ` ${activeColor}`;
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
        <div className={bodyColor}>
            {items}
        </div>
    );
}

export default PageSlider;