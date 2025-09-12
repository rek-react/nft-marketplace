import { usePopover } from "minimal-shared/hooks";

export function useProfileMenu() {
  const { anchorEl, setAnchorEl } = usePopover();

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => setAnchorEl(null);

  return { anchorEl, openMenu, closeMenu };
}
