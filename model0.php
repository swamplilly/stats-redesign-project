<?php
$servername = "localhost";
$username = "root";
$password = "123";
$db_name = "stats_redesign_test";
$tb_name = "Test";

mysql_connect("$servername", "$username", "$password")or die("ERROR: db connection.");
mysql_select_db("$db_name")or die("ERROR: db selection.");

$query = "SELECT * FROM $tb_name";
$result = mysql_query($query) or trigger_error(mysql_error().$query);
$count = 0;
while($row = mysql_fetch_array($result)) {
	$data[$count] = $row;
	$count++;
}
mysql_close();
?>

<html>
<head>
	<title></title>
</head>
<body>
	asdf

	<?php
		// foreach ($data as $value) {
		// 	echo "$value";
		// }
	echo $data[0][1];
	?>

</body>
</html>