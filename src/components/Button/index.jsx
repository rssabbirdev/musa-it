/* eslint-disable react/prop-types */
export default function Button({
	ButtonIcon,
	buttonName,
	iconClassName,
	buttonClassName,
}) {
	return (
		<div
			className={`flex justify-center items-center gap-1 bg-[#D9D9D9] text-[#546082] px-5 py-2 rounded-full ${buttonClassName}`}
		>
			<ButtonIcon className={iconClassName} />
			<span className='text-sm'>{buttonName}</span>
		</div>
	);
}
