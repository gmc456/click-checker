<?php
$sql = "SELECT url FROM Table";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
   // output data of each row
   while($row = $result->fetch_assoc()) {
       echo "URL: " . $row["url"];
   }
} else {
   echo "0 results";
}
$conn->close();
?>
