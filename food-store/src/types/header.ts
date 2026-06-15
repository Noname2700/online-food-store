export interface HeaderProps {
    title?: string;
    cartItemCount?: number;
    onSearchClick?: () => void;
    onCartClick?: () => void;   
    links?: HeaderLink[];
    rightSlot?: React.ReactNode;
}

export interface HeaderLink {
    label: string;
    href: string;
}