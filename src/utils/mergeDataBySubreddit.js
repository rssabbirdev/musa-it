// Function to merge JSON data by subreddit
export function mergeDataBySubreddit(data) {
	// Use an object to group data by subreddit
	const groupedData = {};

	// Iterate through each object in the data array
	data.forEach((obj) => {
		const subreddit = obj.subreddit;

		// If subreddit doesn't exist in groupedData, initialize it with an empty array
		if (!groupedData[subreddit]) {
			groupedData[subreddit] = [];
		}

		// Push the current object into the corresponding subreddit array
		groupedData[subreddit].push(obj);
	});

	// Convert groupedData object into an array of objects with 'subreddit' and 'data' keys
	const mergedData = Object.keys(groupedData).map((subreddit) => ({
		subreddit: subreddit,
        data: groupedData[subreddit],
        count: groupedData[subreddit]?.length
	}));

	return mergedData;
}

