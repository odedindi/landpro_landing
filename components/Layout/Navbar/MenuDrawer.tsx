// ======================== styles ========================
import * as S from '../style';
// ====================== components ======================
import { Header, Body, Close } from '@zendeskgarden/react-modals';
// ========================================================

type MenuDrawerProps = {
	body: JSX.Element;
	showDrawerHandler: () => void;
	title: string;
};
export const MenuDrawer = ({
	body,
	showDrawerHandler,
	title,
}: MenuDrawerProps) => (
	<S.DrawerModal onClose={showDrawerHandler}>
		<Header className="modalHeader">
			<S.MenuTitle>{title}</S.MenuTitle>
		</Header>
		<Body>{body}</Body>
		<Close aria-label="Close modal" />
	</S.DrawerModal>
);
