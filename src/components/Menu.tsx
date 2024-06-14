interface IMenu {
    showMenu: boolean
}

const Menu = (props: IMenu) => {
    if(!props.showMenu) {
        return (
            <>
            
            </>
        );
    }

    return (
        <>
            <div className="menu-backdrop"></div>
            <div className="menu-bar"></div>
        </>
    );
}

export default Menu;