// Write a function that returns the total surface area and volume of a box as an array: [area, volume].

// option 1
function getSize(width, height, depth) {
	const box_surface_area = 2 * (width * height + height * depth + depth * width);
	const box_volume = width * height * depth;
	return [box_surface_area, box_volume];
}

// Option 2
function getSize(width, height, depth) {
	const box = {
		width,
		height,
		depth
	};

	return [getArea(box), getVolume(box)];
}

function getArea(box) {
	return (2 * (box.width * box.height + box.height * box.depth + box.depth * box.width));
}

function getVolume(box) {
	return box.width * box.height * box.depth;
}