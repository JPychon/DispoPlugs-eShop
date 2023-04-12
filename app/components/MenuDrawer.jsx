import {Drawer, MenuMobileNav} from '~/components';

export function MenuDrawer({isOpen, onClose, menu}) {
    return (
      <Drawer open={isOpen} onClose={onClose} openFrom="left" heading="Pages">
        <div className="grid">
          <MenuMobileNav menu={menu} onClose={onClose} />
        </div>
      </Drawer>
    );
  }
