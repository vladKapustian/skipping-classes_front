/** Created by Andrey Gayvoronsky on 13/04/16. */

import CalendarLocale from "rc-picker/lib/locale/ru_RU";

import { PickerLocale } from "antd/es/date-picker/generatePicker";
// import type { PickerLocale } from '../generatePicker';

import type { TimePickerLocale } from "antd/es/time-picker";

const TimePickerLocale: TimePickerLocale = {
  placeholder: "Выберите время",
  rangePlaceholder: ["Время начала", "Время окончания"],
};

// Merge into a locale object
const locale: PickerLocale = {
  lang: {
    placeholder: "Выберите дату",
    yearPlaceholder: "Выберите год",
    quarterPlaceholder: "Выберите квартал",
    monthPlaceholder: "Выберите месяц",
    weekPlaceholder: "Выберите неделю",
    rangePlaceholder: ["Начальная дата", "Конечная дата"],
    rangeYearPlaceholder: ["Начальный год", "Год окончания"],
    rangeMonthPlaceholder: ["Начальный месяц", "Конечный месяц"],
    rangeWeekPlaceholder: ["Начальная неделя", "Конечная неделя"],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

export default locale;
