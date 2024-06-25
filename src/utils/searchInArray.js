export function searchInArray(array, searchText) {
	// Convert the searchText to a string to ensure proper comparison
	searchText = searchText.toString().toLowerCase();

	// Helper function to perform the search
	function recursiveSearch(item) {
		// If the item is an array, iterate over each element
		if (Array.isArray(item)) {
			for (const element of item) {
				if (recursiveSearch(element)) {
					return true;
				}
			}
			// If the item is an object, iterate over each key
		} else if (typeof item === 'object' && item !== null) {
			for (const key in item) {
				if (Object.prototype.hasOwnProperty.call(item, key)) {
					if (recursiveSearch(item[key])) {
						return true;
					}
				}
			}
			// If the item is a string, number, or other primitive type, check if it matches the search text
		} else if (item.toString().toLowerCase().includes(searchText)) {
			return true;
		}

		// Return false if the search text is not found in this item
		return false;
	}

	const results = [];

	// Start the recursive search on each item in the array
	for (const element of array) {
		if (recursiveSearch(element)) {
			results.push(element);
		}
	}

	return results;
}
