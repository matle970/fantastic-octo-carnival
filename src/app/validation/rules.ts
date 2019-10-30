export class Rules {
    /**
     * 是否為空字串
     * isBlank(undefined), return true
     * isBlank(null), return true
     * isBlank(""), return true
     * isBlank(" "), return false
     * @param str
     */
    static isBlock(str: any): boolean {
        if (str === undefined || str === null || str.trim() === '') {
            return true;
        }
        return false;
    }

    /**
     * 是否為位定義
     * isNull(null), return true
     * isNull(""), return false
     * @param obj
     */
    static isNull(obj: any): boolean {
        if (obj === null || obj === undefined) {
            return true;
        }
        return false;
    }

    /**
     * 是否為空 {}
     * isEmptyObject(null), return true
     * isEmptyObject({}), return true
     * isEmptyObject({"a":""}), return false
     */
    static isEmptyObject(obj: {}): boolean {
        if (Rules.isNull(obj)) {
            return true;
        }

        for (const prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }

        return true;
    }
}
