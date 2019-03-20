// 歌曲播放界面的显示模式
export enum playerCenterShowMode {
    disc,lyrics
}
export enum activeSongType {
    previous,next
}
// 下一首时的循环策略
export let playingMode = [
    {modeName:'one',icon:'icon-danquxunhuan',describe:'单曲循环'},
    {modeName:'cycle',icon:'icon-xunhuanbofang',describe:'循环播放'},
    {modeName:'random',icon:'icon-suiji',describe:'随机播放'},
]
// 播放器就绪状态枚举
export enum readyStateEnum {
    HAVE_NOTHING = 0, // 没有关于音频/视频是否就绪的信息
    HAVE_METADATA = 1, // 关于音频/视频就绪的元数据
    HAVE_CURRENT_DATA = 2, // 关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒
    HAVE_FUTURE_DATA = 3, // 当前及至少下一帧的数据是可用的
    HAVE_ENOUGH_DATA = 4, // 可用数据足以开始播放
}
// 当歌曲进入下一首时的可能性枚举
export enum newSongPlayType {
    USER_INDICATE = 0, // 用户指明播放的类型
    AUTO_NEXT = 1, // 自动进入下一首播放
}
