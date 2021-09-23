// ======================= React & Next =======================
import * as React from 'react';
// ============================================================

export const useElementIsVisible = <Element extends HTMLElement>(
	offset = 0,
): {
	isVisible: Boolean;
	elementToCheckIfVisible: React.RefObject<Element>;
} => {
	const [isVisible, setIsVisible] = React.useState(true);
	const elementToCheckIfVisible = React.useRef<Element>(null);

	const onScroll = () => {
		if (!elementToCheckIfVisible.current) {
			setIsVisible(false);
			return;
		}
		const top = elementToCheckIfVisible.current.getBoundingClientRect().bottom;
		setIsVisible(top + offset >= 0 && top - offset <= window.innerHeight);
	};

	React.useEffect(() => {
		document.addEventListener('scroll', onScroll, true);
		return () => document.removeEventListener('scroll', onScroll, true);
	});

	return { isVisible, elementToCheckIfVisible };
};

export default useElementIsVisible;
