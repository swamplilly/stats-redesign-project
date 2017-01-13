<?php
$servername = "localhost";
$username = "root";
$password = "123";
$db_name = "stats_redesign_test";
$lib_tb_name = "libraries";
$qq_tb_name = "quick_questions";

mysql_connect("$servername", "$username", "$password")or die("ERROR: db connection.");
mysql_select_db("$db_name")or die("ERROR: db selection.");

$query = "SELECT * FROM $lib_tb_name";
$result = mysql_query($query) or trigger_error(mysql_error().$query);
$count = 0;
while($row = mysql_fetch_array($result)) {
    $lib_data[$count] = $row;
    $count++;
}

$query = "SELECT * FROM $qq_tb_name";
$result = mysql_query($query) or trigger_error(mysql_error().$query);
$count = 0;
while($row = mysql_fetch_array($result)) {
    $qq_data[$count] = $row;
    $count++;
}
mysql_close();
?>

<html>
<head>
    <title>Stats Redesign Project Mock-up</title>

    <!-- Semantic UI -->
    <link rel="stylesheet" type="text/css" href="semantic/semantic.min.css">
    <script src="semantic/semantic.min.js"></script>

    <!-- Personally defined script -->
    <script type="text/javascript">
    $(document).ready(function(){
        $('.item').click(function() {
            // $('.item').removeClass('active');
            $(this).addClass('active');
        });
        alert("hi");
    });
    </script>

</head>
<body>

    <div class="ui menu">
        <a class="header item">Home</a>
        <?php
        foreach ($lib_data as $value) {
            echo "<a class=\"item\">$value[1]</a>";
        }
        ?>
    </div>

    <h1 class="ui header">You are collecting data for <span class="ui red header">asdf</span> Library.</h1>

    <?php
    foreach ($lib_data as $value) {
        echo "$value[1]";
    }
    foreach ($qq_data as $value) {
        echo "$value[1]";
    }
    ?>



</body>
</html>