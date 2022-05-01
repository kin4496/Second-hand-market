const input_text=document.getElementById("input_msg");
const send_btn=document.getElementById("send_btn");
const msg_window=document.getElementById("msg_window");
const msg_box=document.getElementById("msg_box");
let msg_list;

function fetch_msg(){
    msg_list=[{
        id:1,
        from_name:"강인수",
        item_name:"airpods pro",
        msg:[
            {
                type:"from",
                content:"Hi"
            },
            {
                type:"to",
                content:"Hi"
            },
            {
                type:"from",
                content:"얼마인가요?"
            }
        ]
    },{
        id:2,
        from_name:"장윤성",
        item_name:'mcbook Pro',
        msg:[
            {
                type:"from",
                content:"Hi"
            },
            {
                type:"to",
                content:"Hi"
            },
            {
                type:"from",
                content:"얼마인가요?"
            }
        ]
    }
    ]
}
function send_msg_to_server()
{
    console.log('send msg server');
}
function send_msg()
{
    let text=input_text.value;
    if(text.length===0) return;
    
    let div=msg_to_element("to_msg",text);
    msg_window.append(div);

    input_text.value='';
}
function msg_list_to_msgbox()
{
    removeAllchild(msg_box);
    msg_list.forEach((ele)=>{
        let article=document.createElement('article');
        article.setAttribute('class','msg_small');

        let div=document.createElement('div');
        div.setAttribute('class','from_info');

        let span_user=document.createElement('span');
        span_user.setAttribute('class','bold large');
        span_user.textContent=ele.from_name;

        let span_item=document.createElement('span');
        span_item.setAttribute('class','medium');
        span_item.textContent=ele.item_name;

        div.append(span_user);
        div.append(span_item);

        let span_recent_msg=document.createElement('span');
        span_recent_msg.textContent=ele.msg[ele.msg.length-1].content;
        article.append(div);
        article.append(span_recent_msg);

        msg_box.append(article);
    }
    )
}
function msg_to_element(type,text)
{
    let div=document.createElement('div');
    div.setAttribute('class',type);

    let span=document.createElement('span');
    span.textContent=text;
    span.setAttribute('class','msg');

    div.append(span);
    
    return div;
}
function removeAllchild(parent) {
    while (parent.hasChildNodes()) {
        parent.removeChild(parent.firstChild);
    }
}
function get_msg_to_msg_window(idx)
{
    if(idx>=msg_list.length) return;

    let span_user=document.createElement('span');
    span_user.setAttribute('')
} 
fetch_msg();
msg_list_to_msgbox();
send_btn.addEventListener("click",send_msg);