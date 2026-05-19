export interface HeaderProps {
    title?: string;
    cartItemCount?: number;
    onSearchClick?: () => void;
    onCartClick?: () => void;   
    link?: HeaderLink[];
    rigtslot?: React.ReactNode;
}

export interface HeaderLink {
    label: string;
    href: string;
}