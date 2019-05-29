function edit(account,name,qq,status) {
    $("#account").val(account);
    $("#name").val(name);
    $("#qq").val(qq);
    $("#status").val(status);
}
function del(id) {
    $("#del-text").text("确认删除第"+id+"条吗？")
}