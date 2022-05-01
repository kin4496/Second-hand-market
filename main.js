const sell_btn=document.querySelector('button.sell');
const msg_btn=document.querySelector('button.message');
const search_bar=document.getElementById('search_bar');

sell_btn.addEventListener('click',()=>{
    location.href='posting_page.html';
})

msg_btn.addEventListener('click',()=>{
    location.href='msg_box.html';
})

function move_search_page()
{
    if(window.event.keyCode==13)
        location.href='example.html';
}
search_bar.onkeyup=move_search_page;