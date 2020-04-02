export const conditions = [];

const makeWiningConditions = (size) => {
    for (let i = 0; i < size; i++) {
        let condition = [];
        for (let j = 0; j < size; j++) {
            let key = i.toString() + j.toString()
            condition.push(key);
        }
        conditions.push(condition)
    }
    for (let i = 0; i < size; i++) {
        let condition = [];
        for (let j = 0; j < size; j++) {
            let key = j.toString() + i.toString()
            condition.push(key);
        }
        conditions.push(condition)
    }
    let i = 0, j = 0;
    let condition = [];
    while (i < size) {
        condition.push(i.toString() + j.toString());
        i++;
        j++;
    }
    conditions.push(condition);
    let m = size - 1, n = 0;
    let crossCondition = [];
    while (n < size) {
        crossCondition.push(n.toString() + m.toString());
        m--;
        n++;
    }
    conditions.push(crossCondition);
    return conditions;
}

export { makeWiningConditions }

