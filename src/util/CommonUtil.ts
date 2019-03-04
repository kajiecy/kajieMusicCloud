export default {
    formatSecond:(second: number)=>{
        // 保留0位小数
        const integerSecond: number = _.round(second);
        const minute: number = _.floor(integerSecond/60);
        const onlySecond: number = integerSecond%60
        let minuteStr: string = minute.toString();
        let onlySecondStr: string = onlySecond.toString();
        if(minuteStr.length<2){
            minuteStr = _.padStart(minute.toString(), 2, '0');
        }
        if(onlySecondStr.length<2){
            onlySecondStr = _.padStart(onlySecondStr.toString(), 2, '0');
        }
        return minuteStr+':'+onlySecondStr;
    }
}
