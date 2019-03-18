import Mock from 'mockjs';
export const singInfo = {
    id: '1',
    name: '爱如潮水',
    singerName: '张信哲',
    specialName: '张信哲精选',
    coverImg: 'http://qiniu.kajie88.com/recommendSong5.jpg',
    songSrc:'http://qiniu.kajie88.com/%E8%AE%B8%E4%B8%80%E9%B8%A3%20-%20%E8%99%8E%E5%8F%A3%E8%84%B1%E9%99%A9%EF%BC%88Cover%20%E8%80%81%E7%8B%BC%EF%BC%89.mp3',
    lrcSrc:'http://qiniu.kajie88.com/%E8%AE%B8%E4%B8%80%E9%B8%A3%20-%20%E8%99%8E%E5%8F%A3%E8%84%B1%E9%99%A9%EF%BC%88Cover%20%E8%80%81%E7%8B%BC%EF%BC%89.lrc',
    hasMv: true,
    isSq: true,
    // 用来表示歌曲的 喜欢状态
    userLove:false,
};

export const recommendSongList = [
    {id:'1',coverImg: 'http://qiniu.kajie88.com/recommendSong1.1.jpg', title: '你穿秋裤了么？',playCount:420},
    {id:'2',coverImg: 'http://qiniu.kajie88.com/recommendSong2.jpg', title: '治愈男声//回眸之时，只望遇见你',playCount:220},
    {id:'3',coverImg: 'http://qiniu.kajie88.com/recommendSong3.jpg', title: '韩剧OST | 收集歌声中的浪漫碎片',playCount:100},
    {id:'4',coverImg: 'http://qiniu.kajie88.com/recommendSong4.jpg', title: '翻唱简史：欧美六百首',playCount:120},
    {id:'5',coverImg: 'http://qiniu.kajie88.com/recommendSong5.jpg', title: '初识不知曲中意，再听已是曲中人,超级伤感的歌',playCount:183},
    {id:'6',coverImg: 'http://qiniu.kajie88.com/recommendSong6.jpg', title: '多热烈的白羊，热烈的抽象。',playCount:121},
];

export const newSongList = [
    {id:'1',coverImg: 'http://qiniu.kajie88.com/recommendSong1.jpg', title: '你穿秋裤了么？',playCount:420},
    {id:'2',coverImg: 'http://qiniu.kajie88.com/recommendSong2.jpg', title: '治愈男声//回眸之时，只望遇见你',playCount:220},
    {id:'3',coverImg: 'http://qiniu.kajie88.com/recommendSong3.jpg', title: '韩剧OST | 收集歌声中的浪漫碎片',playCount:100},
    {id:'4',coverImg: 'http://qiniu.kajie88.com/recommendSong4.jpg', title: '翻唱简史：欧美六百首',playCount:120},
    {id:'5',coverImg: 'http://qiniu.kajie88.com/recommendSong5.jpg', title: '初识不知曲中意，再听已是曲中人,超级伤感的歌',playCount:183},
    {id:'6',coverImg: 'http://qiniu.kajie88.com/recommendSong6.jpg', title: '多热烈的白羊，热烈的抽象。',playCount:121},
];

export const songListDetail = [
    {id: '1',
        coverImg: 'http://qiniu.kajie88.com/recommendSong1.1.jpg',
        coverImgBase64:'',
        title: '你穿秋裤了么',
        playCount: 420,
        ownerName: '卡杰',
        ownerImg: 'http://qiniu.kajie88.com/28913648.jpg',
        collectCount: 36,
        singListArray: [
            {id:'1',name: '爱如潮水', singerName: '张信哲', specialName: '张信哲精选', hasMv: true, isSq: true},
            {id:'2',name: '无尽的爱', singerName: '关淑怡', specialName: '32首选', hasMv: false, isSq: false},
            {id:'3',name: '大约在冬季', singerName: '齐秦', specialName: '摘金宝典', hasMv: true, isSq: true},
            {id:'4',name: '别话', singerName: '张国荣', specialName: 'Ultimate', hasMv: true, isSq: true},
            {id:'5',name: '千千阙歌', singerName: '陈慧娴', hasMv: false, isSq: false},

            {id:'6',name: '风中的承诺', singerName: '李彧', specialName: '情歌传唱天后', hasMv: false, isSq: false},
            {id:'7',name: '爱如潮水', singerName: '张信哲', specialName: '张信哲精选', hasMv: true, isSq: false},
            {id:'8',name: '无尽的爱', singerName: '关淑怡', specialName: '32首选', hasMv: false, isSq: false},
            {id:'9',name: '大约在冬季', singerName: '齐秦', specialName: '摘金宝典', hasMv: true, isSq: true},
            {id:'10',name: '别话', singerName: '张国荣', specialName: 'Ultimate', hasMv: true, isSq: false},
        ]
    },
];
