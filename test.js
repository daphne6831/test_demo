

//電量顯示按鈕綁點擊事件
document.querySelector('#now_btn').addEventListener("click",function(){
    // console.log('test')
    //插入grafana iframe顯示電量表

        document.querySelector('#result').innerHTML = '<iframe allowfullscreen referrer policy="no-referrer" src="http://localhost:3000/d-solo/fejms9z9o4l4wd/mg1-pv?orgId=1&timezone=browser&refresh=auto&theme=light&panelId=1&__feature.dashboardSceneSolo" width="450" height="200" frameborder="0"></iframe>'

})
