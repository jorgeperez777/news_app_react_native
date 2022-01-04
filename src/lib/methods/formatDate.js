import moment from 'moment-timezone';
import 'moment/locale/es-mx';

export const parseDateNews = date => {
  let dateFormatUTC = moment.utc(date);
  let dateFormatTZ = moment
    .tz(dateFormatUTC, 'America/cancun')
    .format('DD MMM YYYY hh:mm a');
  return dateFormatTZ;
};
