var tableBorderEnabled;

$(document).ready(function() {
	$("#enableTableBordersButton").click(function() {
		enableTableBorders();
	});
});

function enableTableBorders() {
	var tableBorderSettingsButtonHTML = $("#enableTableBordersButton").html();
	var tableBorderEnabledHTML = "<a role='menuitem' tabindex='-1' href='javascript:void(0)'><span class='glyphicon glyphicon-ok'></span>&nbsp;Table borders</a>";
	if (tableBorderEnabled == true) {
		tableBorderEnabled = false;
		$("#accountsTable").removeClass("table-bordered");
		$("#enableTableBordersButton").html("<a role='menuitem' tabindex='-1' href='#'>Table borders</a>");
	}
	else {
		tableBorderEnabled = true;
		$("#accountsTable").addClass("table-bordered");
		$("#enableTableBordersButton").html(tableBorderEnabledHTML);
	}
}