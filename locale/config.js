moment.locale('th', {

    months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
    monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
    weekdays: "วันอาทิตย์_วันจันทร์_วันอังคาร_วันพุธ_วันพฤหัสบดี_วันศุกร์_วันเสาร์".split("_"),
    weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
    weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
    longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY LT",
        LLLL: "dddd D MMMM YYYY LT"
    },
    calendar: {
        sameDay: '[วันนี้ เมื่อ] LT',
        nextDay: '[พรุ่งนี้ เมื่อ] LT',
        nextWeek: 'dddd [เมื่อ] LT',
        lastDay: '[เมื่อวานนี้ เมื่อ] LT',
        lastWeek: '[ล่าสุด] dddd [เมื่อ] LT',
        sameElse: 'L'

    },
    relativeTime: {
        future: 'ใน%s',
        past: '%sที่แล้ว',
        s: 'ไม่กี่วินาที',
        m: 'ประมาณหนึ่งนาที',
        mm: '%d นาที',
        h: 'ประมาณหนึ่งชั่วโมง',
        hh: '%d ชั่วโมง',
        d: 'ประมาณหนึ่งวัน',
        dd: '%d วัน',
        M: 'ประมาณหนึ่งเดือน',
        MM: '%d เดือน',
        y: 'ประมาณหนึ่งปี',
        yy: '%d ปี'
    },

    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4  // The week that contains Jan 4th is the first week of the year.
    }

});
