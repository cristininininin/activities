<?php

// Get the current date
$today = date("Y-m-d");

// Get the current month and year
$month = date("m");
$year = date("Y");

// Get the name of the month
$monthName = date("F");

// Get the number of days in the month
$numberOfDays = date("t");

// Get the day of the week for the first day
// 0 = Sunday, 1 = Monday, ..., 6 = Saturday
$firstDay = date("w", strtotime("$year-$month-01"));

echo "================================\n";
echo "       " . $monthName . " " . $year . "\n";
echo "================================\n";

echo " Sun Mon Tue Wed Thu Fri Sat\n";

// Print spaces before the first date
for ($i = 0; $i < $firstDay; $i++) {
    echo "    ";
}

// Display the dates
for ($day = 1; $day <= $numberOfDays; $day++) {

    printf("%4d", $day);

    // Move to the next line after Saturday
    if (($day + $firstDay) % 7 == 0) {
        echo "\n";
    }
}

echo "\n";
echo "================================\n";
echo "Today: " . $today . "\n";

?>