//navigation

type Page =
	| {
			title: 'home';
			path: '/';
			icon: JSX.Element;
	  }
	| {
			title: 'about';
			path: '/about';
			icon: JSX.Element;
	  }
	| {
			title: 'demo';
			path: '/carbonmap';
			icon: JSX.Element;
	  };

//   layout
type ContainerProps = {
	padding?: boolean;
	border?: boolean;
};

// logo
type NavBarOrFooterLogo = {
	height: string;
	width: string;
};
