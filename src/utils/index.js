export const isFalsy = (value) => (value === 0 ? true : Boolean(value));

export const cleanObject = (obj) => {
    let res = {};
    Object.keys(obj).forEach((key) => {
        let value = obj[key];
        if (isFalsy(value)) {
            res[key] = value;
        }
    });
    return res;
};
