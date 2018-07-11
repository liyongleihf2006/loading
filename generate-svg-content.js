/**
* 生成svg内容的函数,复制下面的代码在js中执行
* @param {*} r 小圆点的半径,注意的是生成的这个svg中坐标系是宽高都是100
* @param {*} duration 动画一周期用时
* @param {*} color 小圆点的颜色
*/
function generate(r,duration,color){
    var content=`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    `;
    content+=generateStyles(duration,color);
    content+=generateCircles(r);
    content+=`</svg>`;
    return content;
    function generateCircles(r){
        var circles="";
        for(var i=0;i<8;i++){
            circles+=calc(i*45+90,r);
        }  
        return circles;
        function calc(angle,r){
            return `
            <circle r="${r}" cx="${(50-r)*Math.cos(angle/180*Math.PI)+50}" cy="${(50-r)*Math.sin((360-angle)/180*Math.PI)+50}"/>
            `
        }
    }
    function generateStyles(duration,color){
        var styles=`
        <style>
            circle{
                fill:${color};
            }
        `;
        for(var i=0;i<8;i++){
            styles+=generateStyle(i);
        }
        styles+=`
        </style>    
        `
        return styles;
        function generateStyle(i){
            var style = `
            circle:nth-of-type(${i+1}){
                animation:animations${i+1} ${duration}s steps(8,end) infinite;
            }
            @keyframes animations${i+1}{
            `;
            for(var j = 0;j<=8;j++){
                style+=generateAnimation(i,j);
            }
            style+=`}`
            return style;
        }
        function generateAnimation(i,j){
            return `
                ${j*12.5}%{fill-opacity: ${calc(i,j)}}
            `
        }
        function calc(i,j){
            var value = 1-(i+j)/7;
            if(value<0){
                value=1.125+value;
            }
            return value;
        }
    }  
}