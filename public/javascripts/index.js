var tableBorderEnabled;

$(document).ready(function() {
	$("#enableTableBordersButton").click(function() {
		enableTableBorders();
	});
});

function enableTableBorders() {
	var tableBorderSettingsButtonHTML = $("#enableTableBordersButton").html();
	var tableBorderEnabledHTML = "<a href='javascript:void(0)'><span class='glyphicon glyphicon-ok'></span><span>&nbsp;</span><span>Table borders</span></a>";
	if (tableBorderEnabled == true) {
		tableBorderEnabled = false;
		$("#accountsTable").removeClass("table-bordered");
		$("#enableTableBordersButton").html("<a href='javascript:void(0)'><span>Table borders</span></a>");
	}
	else {
		tableBorderEnabled = true;
		$("#accountsTable").addClass("table-bordered");
		$("#enableTableBordersButton").html(tableBorderEnabledHTML);
	}
}