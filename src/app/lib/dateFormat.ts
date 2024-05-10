interface FormatDateProps {
	unixTimestamp: number;
	type?: string;
}


export const formatDate = ({ unixTimestamp, type = 'day' }: FormatDateProps): any => {
	const daysOfWeek = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
	const monthsOfYear = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', ];

	const daysOfWeekShortened = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
	const monthsOfYearShortened = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

	const date = new Date( unixTimestamp * 1000 );
	const dayOfMonth = date.getDate();
	const monthIndex = date.getMonth();
	const dayOfWeekIndex = date.getDay();
	const hours = date.getHours().toString().padStart( 2, "0" );
	const minutes = date.getMinutes().toString().padStart( 2, "0" );

	const formattedDate = `${dayOfMonth} ${monthsOfYear[monthIndex]} ${daysOfWeek[dayOfWeekIndex]}`;
	const formattedDateShortened = `${dayOfMonth} ${monthsOfYearShortened[monthIndex]} ${daysOfWeekShortened[dayOfWeekIndex]}`;

	return type === 'day' ? daysOfWeek[dayOfWeekIndex] : type === 'hour' ? `${hours}:${minutes}` : type === 'short' ? formattedDateShortened : formattedDate;
};

export default formatDate;