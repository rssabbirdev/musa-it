export const findIFrameUrl = (data, params) => {
	const column = data.find(
		(i) => i?.column === params.get('column').toLowerCase()
	);
	const period = column?.data?.find(
		(i) => i?.period === params.get('period').toLowerCase()
	);
	return period.url;
};
