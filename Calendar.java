import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.YearMonth;
import java.time.format.TextStyle;
import java.util.Locale;

public class Calendar {

    public static void main(String[] args) {

        // Get the current date
        LocalDate today = LocalDate.now();

        // Get the current month and year
        YearMonth currentMonth = YearMonth.from(today);

        // Get the first day of the month
        LocalDate firstDay = currentMonth.atDay(1);

        // Get the number of days in the month
        int numberOfDays = currentMonth.lengthOfMonth();

        // Get the day of the week of the first day
        DayOfWeek firstDayOfWeek = firstDay.getDayOfWeek();

        // Display the month and year
        String monthName = currentMonth.getMonth()
                .getDisplayName(TextStyle.FULL, Locale.ENGLISH);

        System.out.println("================================");
        System.out.println("       " + monthName + " " + currentMonth.getYear());
        System.out.println("================================");

        // Display the days of the week
        System.out.println(" Sun Mon Tue Wed Thu Fri Sat");

        // Get the starting position
        int startPosition = firstDayOfWeek.getValue();

        // Convert Monday-based value to Sunday-based position
        if (startPosition == 7) {
            startPosition = 0;
        }

        // Print spaces before the first date
        for (int i = 0; i < startPosition; i++) {
            System.out.print("    ");
        }

        // Display all dates
        for (int day = 1; day <= numberOfDays; day++) {

            System.out.printf("%4d", day);

            // Move to the next line after Saturday
            if ((day + startPosition) % 7 == 0) {
                System.out.println();
            }
        }

        System.out.println();
        System.out.println("================================");
        System.out.println("Today: " + today);
    }
}