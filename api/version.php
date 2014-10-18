<?php
$git_release_version = exec("git describe --tags --always --dirty");
$git_commits = str_replace(" ", "", exec("git rev-list HEAD | wc -l"));

$json_array = array(
	"version" => $git_release_version,
	"build" => $git_commits,
);

echo '<pre>'.json_encode($json_array, JSON_PRETTY_PRINT).'</pre>';
?>