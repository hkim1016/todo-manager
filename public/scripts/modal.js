$('#createTaskModal').on('hidden.bs.modal', function (e) {
    $(this)
        .find("input,textarea,select")
            .val('')
            .end()
        .find("input[type=checkbox], input[type=radio]")
            .prop("checked", "")
            .end();
})