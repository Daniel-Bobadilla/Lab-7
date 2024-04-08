<!DOCTYPE html>

<html>
	<head>
		<meta charset="utf-8">
	</head>

	<body>
		<?php
			$table_size = $_POST['table_size'];

			echo "<table border='1'>";
			for ($i = 0; $i < $table_size + 1; $i++) {
				echo "<tr>";
				if ($i == 0) {
					for ($j = 0; $j < $table_size + 1; $j++) {
						if ($j == 0) {echo "<th></th>";} else {echo "<td>{$j}</td>";}
					}
				} else {
					for ($j = 0; $j < $table_size + 1; $j++) {
						$boxValue = $i * $j;
                                                if ($j == 0) {echo "<td>{$i}</td>";} else {echo "<td>{$boxValue}</td>";}
                                        }
				}
			}
		?>
	</body>
</html>
