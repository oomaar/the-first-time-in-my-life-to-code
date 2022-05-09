import java.util.*;

public class QuickStart {

    public static void main(String[] args) {
        int x = 0;
        int y = 0;
        int z = 0;

        Scanner s = new Scanner(System.in);

        System.out.println("Enter 2 numbers");
        x = s.nextInt();
        y = s.nextInt();

        z = x + y;

        System.out.println("The Answer is = " + z);

    }

}