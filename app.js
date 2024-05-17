
var main1=document.getElementsByClassName('main1')
var allboxes=document.getElementsByClassName('child')

for(var i=0 ;i<allboxes.length; i++)
    {
    allboxes[i].addEventListener('click',function(){
        main1.src=this.src
    } )
}