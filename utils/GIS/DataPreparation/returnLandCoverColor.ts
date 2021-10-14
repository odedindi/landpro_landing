export const returnLandCoverColor = (landCover: LandCover): string => {
	switch (landCover) {
		case 'main':
			return 'Pink';
		case 'Unknown':
			return 'DeepPink';
		case 'Shrubs':
			return 'GreenYellow';
		case 'Grasses':
			return 'LimeGreen';
		case 'Agriculture':
			return 'SaddleBrown';
		case 'Built-up':
			return 'DarkGray';
		case 'Bare':
			return 'Tan';
		case 'Snow-Ice':
			return 'Azure';
		case 'Water':
			return 'Blue';
		case 'Wetland':
			return 'Aqua';
		case 'Lichens':
			return 'Turquoise ';
		case 'Closed forest':
			return 'DarkGreen';
		case 'Evergreen-needle-leaf':
			return 'MediumSeaGreen';
		case 'Evergreen-broad-leaf':
			return 'SeaGreen';
		case 'Deciduous-needle-leaf':
			return 'YellowGreen';
		case 'Deciduous-broad-leaf':
			return 'OliveDrab';
		case 'Mixed-closed-forest':
			return 'PaleGreen';
		case 'Other-closed-forest':
			return 'LightGreen';
		case 'Open-forest':
			return 'Green';
		case 'Mixed':
			return 'Teal';
		case 'Other-open-forest':
			return 'DarkOliveGreen';
		case 'Oceans':
			return 'SteelBlue';
		default:
			return 'Gray';
	}
};

export default returnLandCoverColor;
