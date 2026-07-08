export interface HeaderProps {
  title?: string;
  cartItemCount?: number;
  onSignUpClick?: () => void;
  onSignInClick?: () => void;
  onSearchClick?: () => void;
  onCartClick?: () => void;
  links?: HeaderLink[];
  rightSlot?: React.ReactNode;
}

export interface HeaderLink {
  label: string;
  href: string;
}
