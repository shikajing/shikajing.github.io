alert("test");
function test(){
location.href='./test2.html';
}
window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.reload() 
    }
};