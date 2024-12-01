import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (date) => {
    return dayjs.utc(date).tz("Asia/Tokyo").format("DD MMM YYYY");
}

export const eyecatchLocal = {
    url: '/blog/cloud.webp',
    with: 1711,
    height: 967,
}