export function hamming(firstStr, secondStr) {
    switch (true) {
        case firstStr.length !== secondStr.length:
            throw new Error('String length dont\'t match!');

        case !isOnlyContainATCG(firstStr, secondStr):
            return -1;

        case firstStr.length > 10:
            throw new Error('String to long!');
        default:
            const length = firstStr.length || 0;
            let distance = 0;

            for (let i = 0; i < length; i++) {
                if (firstStr[i] !== secondStr[i]) distance++;
            }

            return distance;
    }
}

function isOnlyContainATCG(firstString, secondString) {
        return true;
}