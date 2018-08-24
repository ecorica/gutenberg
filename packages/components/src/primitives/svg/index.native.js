import {
	Path,
	G,
	Svg,
} from 'react-native-svg';

export {
    G,
    Path,
};

export const SVG = ( props ) => {
	if ( props.width !== undefined && props.height !== undefined ) {
		return (
			<Svg width={ props.width } height={ props.height } >
				{ props.children }
			</Svg>
		);
	}

	// take viewport system to match the viewBox definition
	// i.e. viewBox="0 0 24 24"
	const viewBoxCoords = props.viewBox.split( ' ' );
	return (
		<Svg width={ viewBoxCoords[ 2 ] } height={ viewBoxCoords[ 3 ] } >
			{ props.children }
		</Svg>
	);
};