function isUnique(astr: string): boolean {
    const astrArr = astr.split('');
    const astrArrNoRepeat = [...new Set(astrArr)];
    if (astrArr.length !== astrArrNoRepeat.length) {
        return false;
    } else {
        return true;
    }
};