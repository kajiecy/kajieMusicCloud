// 歌曲播放界面的显示模式
export enum playerCenterShowMode {
    disc,lyrics
}
export enum activeSongType {
    previous,next
}
// 下一首时的循环策略
export let playingMode = [
    {modeName:'one',icon:'icon-danquxunhuan'},
    {modeName:'cycle',icon:'icon-xunhuanbofang'},
    {modeName:'random',icon:'icon-suiji'},
]

