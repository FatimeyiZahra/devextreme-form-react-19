export interface ILeftMenuItemProps {
    name: string | null,
    link: string | null,
    icon: string | null,
    submenu: ILeftMenuItemProps[] | null,
    isOpen: boolean | null,
    id: number | null,
    isSubmenu?: boolean | null,
    index?: number | null,
    setCheck: (check: boolean) => void,
    check: boolean,
    selectedItem: ILeftMenuItemProps | null,
}

export interface ILeftMenuProps {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void,
    menu: ILeftMenuItemProps[],
    setCheck: (check: boolean) => void,
    check: boolean,
}

