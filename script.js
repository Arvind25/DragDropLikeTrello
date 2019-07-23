$(document).ready(function () {
    function updateContainers() {
        $('ul[id^="draggable"]').sortable({
            connectWith: ".sortable",
            start(event, ui) {
                var parent_id = $(ui.item).parent(".sortable").attr("id");
                var child_id = $(ui.item).attr("id");
                console.log("Drag parentId: ", parent_id, " childId: ", child_id);
            },
            receive: function (e, ui) {
                var parent_id = $(ui.item).parent(".sortable").attr("id");
                var child_id = $(ui.item).attr("id");
                console.log("Drag parentId: ", parent_id, " childId: ", child_id);
            }
        }).disableSelection();

        $('ul[id^="task-parent"]').sortable({
            connectWith: ".tasks",
            start(event, ui) {
                var parent_id = $(ui.item).parent(".tasks").attr("id");
                console.log("Drag Start parent_id: ", parent_id);
            },
            receive: function (e, ui) {
                var parent_id = $(ui.item).parent(".tasks").attr("id");
                console.log("Drag Start parent_id: ", parent_id);
            }

        }).disableSelection();
    }
    updateContainers();
    $("#createBoxBtn").on('click', function () {
        var title = $("#titleInput").val().trim();

        if (title === "") {
            alert("Please enter title---.");
            return;
        }
        var titleProp = title.toLowerCase();
        $("#task-parent").append(' <li class="status-card ui-sortable-handle" id="'
            + titleProp + '-tasks"> <div class="card-header"> <span class="card-header-text">'
            + title + '</span></div><ul class="sortable ui-sortable" id="draggable-'
            + titleProp + '-tasks"><li class="text-row ui-sortable" id="'
            + titleProp + '-task-1">'
            + titleProp + '-task-1</li></ul></li>');
        updateContainers();
        $("#titleInput").val("");
    });

});