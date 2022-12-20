class MyDate {
    method;
    gDay;
    gMonth;
    gYear;

    bDay;
    bMonth;
    bYear;

    constructor(methodIsEng2Ban) {
        this.method = methodIsEng2Ban;
    }

    gSetDay(Day) {
        if (Day > 0 && Day < 32) {
            this.gDay = Day;
        }
    }

    gSetMonth(Month) {
        if (Month <= 12 && Month >= 1) {
            this.gMonth = Month;
        }
    }

    gSetYear(Year) {
        this.gYear = Year;
    }

    gSetDate(Day, Month, Year) {
        this.gDay = Day;
        this.gMonth = Month;
        this.gYear = Year;
    }

    bSetDay(Day) {
        if (Day > 0 && Day < 32) {
            this.bDay = Day;
        }
    }

    bSetMonth(Month) {
        if (Month <= 12 && Month >= 1) {
            this.bMonth = Month;
        }
    }

    bSetYear(Year) {
        this.bYear = Year;
    }

    bSetDate(Day, Month, Year) {
        this.bDay = Day;
        this.bMonth = Month;
        this.bYear = Year;
    }

    dayRecognizer(getNameInEnglish) {
        let zip;
        let lastCode = [6, 4, 2, 0];
        let monthCode = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];

        let days1 = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        let days2 = ["Shonibar", "Robibar", "Shombar", "Mongolbar", "Budhbar", "Brihoshpotibar", "Shukrobar"];

        if (this.method) {
            if (this.gMonth <= 2 && this.gIsLeapYear(this.gYear)) {
                zip = (this.gDay + monthCode[this.gMonth - 1] + (this.gYear % 100) + ((this.gYear % 100) / 4) + lastCode[((this.gYear / 100) % 4)] - 1) % 7;
            } else {
                zip = (this.gDay + monthCode[this.gMonth - 1] + (this.gYear % 100) + ((this.gYear % 100) / 4) + lastCode[((this.gYear / 100) % 4)]) % 7;
            }
        } else {
            let day_ = this.bGetDay();
            let month_ = this.bGetMonth();
            let year_ = this.bGetYear();

            let dayCode = day_ + monthCode[month_ - 1] + (year_ % 100) + ((year_ % 100) / 4) + lastCode[((year_ / 100) % 4)];

            //if (month_ <= 2 && year_ % 400 == 0) {
            if (month_ <= 2 && this.gIsLeapYear(year_)) {
                zip = (dayCode - 1) % 7;
            } else {
                zip = (dayCode) % 7;
            }
        }
        if (getNameInEnglish) {
            return days1[zip];
        } else {
            return days2[zip];
        }
    }

    gDays() {
        let temp = this.gDay;

        if (this.gIsLeapYear(this.gYear)) {
            let days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30];
            for (let i = 0; i < this.gMonth; i++) {
                temp += days[i];
            }
        } else {
            let days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
            for (let i = 0; i < this.gMonth; i++) {
                temp += days[i];
            }
        }
        return temp;
    }

    gGetDay() {
        if (!this.gIsLeapYear(this.gYear)) {
            let dif = [0, -103, -134, -165, -196, -227, -258, -288, -318, 0, -13, -43, -73];
            //int[] dif = {0, -103, -134, -165, -196, -227, -258, -288, -318, 0, -13, -43, -74};

            let f = this.gDays();

            if (this.gGetMonth() !== 9) {
                return this.gDays() + dif[this.gGetMonth()];

            } else {
                if (f > 348 && f < 366) {
                    return f - 348;
                } else if (f > 0 && f < 14) {
                    return f + 17;
                }
            }
        } else {
            let dif = [0, -104, -135, -166, -197, -228, -259, -289, -319, 0, -13, -43, -74];
            //int[] dif = {0, -104, -135, -166, -197, -228, -259, -289, -319, 0, -13, -43, -73};
            let f = this.gDays();

            if (this.gGetMonth() !== 9) {
                return this.gDays() + dif[this.gGetMonth()];
            } else {
                //if (f > 348 && f < 367) {
                if (f > 349 && f < 367) {
                    return f - 349;
                } else if (f > 0 && f < 14) {
                    return f + 17;
                }
            }
        }
        return 0;
    }

    gGetMonth() {
        let gDays = this.gDays();

        if (this.gIsLeapYear(this.gYear)) {
            if (gDays > 104 && gDays < 136) {
                return 1;
            } else if (gDays > 135 && gDays < 167) {
                return 2;
            } else if (gDays > 166 && gDays < 198) {
                return 3;
            } else if (gDays > 197 && gDays < 229) {
                return 4;
            } else if (gDays > 228 && gDays < 260) {
                return 5;
            } else if (gDays > 259 && gDays < 290) {
                return 6;
            } else if (gDays > 289 && gDays < 320) {
                return 7;
            } else if (gDays > 319 && gDays < 350) {
                return 8;
            } else if (gDays > 349 && gDays < 367) {
                return 9;
            } else if (gDays > 0 && gDays < 14) {
                return 9;
            } else if (gDays > 13 && gDays < 44) {
                return 10;
            } else if (gDays > 43 && gDays < 75) {
                return 11;
            } else if (gDays > 74 && gDays < 105) {
                return 12;
            }
        } else {
            if (gDays > 103 && gDays < 135) {
                return 1;
            } else if (gDays > 134 && gDays < 166) {
                return 2;
            } else if (gDays > 165 && gDays < 197) {
                return 3;
            } else if (gDays > 196 && gDays < 228) {
                return 4;
            } else if (gDays > 227 && gDays < 259) {
                return 5;
            } else if (gDays > 258 && gDays < 289) {
                return 6;
            } else if (gDays > 288 && gDays < 319) {
                return 7;
            } else if (gDays > 318 && gDays < 349) {
                return 8;
            } else if (gDays > 348 && gDays < 366) {
                return 9;
            } else if (gDays > 0 && gDays < 14) {
                return 9;
            } else if (gDays > 13 && gDays < 44) {
                return 10;
            } else if (gDays > 43 && gDays < 74) {
                return 11;
            } else if (gDays > 73 && gDays < 104) {
                return 12;
            }
        }
        return 0;
    }

    gGetMonthName() {
        let names = ["Baishakh", "Joishtho", "Ashar", "Srabon", "Vadro", "Ashshin", "Kartik", "Aghrayon",
            "Poush", "Magh", "Falgun", "Choitro"];

        return names[this.gGetMonth() - 1];
    }

    gGetYear() {
        if (this.gIsLeapYear(this.gYear)) {
            if (this.gDays() < 105) {
                return this.gYear - 594;
            } else {
                return this.gYear - 593;
            }
        } else {
            if (this.gDays() < 104) {
                return this.gYear - 594;
            } else {
                return this.gYear - 593;
            }
        }
    }

    gIsLeapYear(year) {

        if (year % 400 === 0) {
            return true;
        } else {
            return year % 4 === 0 && year % 100 !== 0;
        }
        /*if year is divisible by 400 then
        is_leap_year
        else if year is divisible by 100 then
        not_leap_year
        else if year is divisible by 4 then
        is_leap_year
        else
        not_leap_year*/
    }

    bDays() {
        let temp = this.bDay;

        if (this.bIsLeapYear(this.bYear)) {
            //int[] days = {0, 31, 31, 31, 31, 31, 30, 30, 30, 30, 31, 30};
            let days = [0, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 31];
            //{31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 31, 30};
            for (let i = 0; i < this.bMonth; i++) {
                temp += days[i];
            }
        } else {
            let days = [0, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30];
            for (let i = 0; i < this.bMonth; i++) {
                temp += days[i];
            }
        }
        return temp;
    }

    bGetDay() {
        let days = this.bDays();
        let month_ = this.bGetMonth();

        if (this.bIsLeapYear(this.bYear)) {
            let dif = [0, 262, 293, 322, 0, 17, 48, 78, 109, 140, 170, 201, 231];

            if (month_ !== 4) {
                return days - dif[month_];
            } else {
                if (days > 353 && days < 367) {
                    return days - 353;
                } else if (days > 0 && days < 18) {
                    return days + 13;
                }
            }
        } else {
            let dif = [0, 262, 293, 321, 0, 17, 48, 78, 109, 140, 170, 201, 231];

            if (month_ !== 4) {
                return days - dif[month_];
            } else {
                //  if (days > 352 && days < 366) {
                if (days > 352 && days < 366) {
                    return days - 352;
                } else if (days > 0 && days < 18) {
                    return days + 13;
                }
            }
        }
        return 0;
    }

    bGetMonth() {
        let days = this.bDays();

        if (!this.method) {
            if (this.bIsLeapYear(this.bYear)) {
                if (days > 262 && days < 294) {
                    return 1;
                } else if (days > 293 && days < 323) {
                    return 2;
                } else if (days > 322 && days < 354) {
                    return 3;
                } else if (days > 353 && days < 367) {
                    return 4;
                } else if (days > 0 && days < 18) {
                    return 4;
                } else if (days > 17 && days < 49) {
                    return 5;
                } else if (days > 48 && days < 79) {
                    return 6;
                } else if (days > 78 && days < 110) {
                    return 7;
                } else if (days > 109 && days < 141) {
                    return 8;
                } else if (days > 140 && days < 171) {
                    return 9;
                } else if (days > 170 && days < 202) {
                    return 10;
                } else if (days > 201 && days < 232) {
                    return 11;
                } else if (days > 231 && days < 263) {
                    return 12;
                }
            } else {
                if (days > 262 && days < 294) {
                    return 1;
                } else if (days > 293 && days < 322) {
                    return 2;
                } else if (days > 321 && days < 353) {
                    return 3;
                } else if (days > 352 && days < 367) {
                    return 4;
                } else if (days > 0 && days < 18) {
                    return 4;
                } else if (days > 17 && days < 49) {
                    return 5;
                } else if (days > 48 && days < 79) {
                    return 6;
                } else if (days > 78 && days < 110) {
                    return 7;
                } else if (days > 109 && days < 141) {
                    return 8;
                } else if (days > 140 && days < 171) {
                    return 9;
                } else if (days > 170 && days < 202) {
                    return 10;
                } else if (days > 201 && days < 232) {
                    return 11;
                } else if (days > 231 && days < 263) {
                    return 12;
                }
            }
        } else {
            return this.bMonth;
        }
        return -1;
    }

    bGetMonthName() {
        let name = ["January", "February", "March", "April", "May", "June", "July", "August",
            "September", "October", "November", "December"];
        return name[this.bGetMonth() - 1];
    }

    bGetYear() {
        if (this.bDays() < 263) {
            return this.bYear + 593;
        } else {
            return this.bYear + 594;
        }
    }

    bIsLeapYear(year) {
        return (year + 594) % 4 === 0;
    }

    /*gGetMonthNumber(monthName) {
        let name = ["january", "february", "march", "april", "may", "june", "july", "august",
            "september", "october", "november", "december"];
        let i;
        for (i = 0; i < name.length - 1; i++) {
            if (name[i].indexOf(monthName.toLowerCase()) === 0) {
                break;
            }
        }
        return i + 1;
    }*/
    author() {
        return "Author - Rinika Paul";
    }
}