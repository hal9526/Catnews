<html>
  <head>
    <link rel="stylesheet" type="text/css" href="stylesheet.css" />
    <meta http-equiv="Content-Type" CONTENT="text/html; charset=iso-2022-jp" />
  </head>
  
  <body>
    <h1 class="title">
      CATNEWS
    </h1>

    <h1 class="center">
      <p>$B8=:_$NG-$NMM;R(B</p>
      <img src="http://203.178.141.7:8080/?action=stream">
    </h1>

    <div class="box">
      <h2 class="subtitle">
	$BMzNr(B
      </h2>

      <p>$B1B$r$d$C$?MzNr$G$9(B</p>
      
      <?php

	 $link=mysqli_connect("localhost", "root", "raspberry", "catnews") or die("Error ". mysqli_error($link));

	 $query = "SELECT * FROM time" or die("Error" . mysqli_error($link));

	 $result = $link->query($query);

      while ($row = mysqli_fetch_array($result)) {
      echo $row[0] . "<br>";
      }

      ?>
    </div>

  </body>
</html>
