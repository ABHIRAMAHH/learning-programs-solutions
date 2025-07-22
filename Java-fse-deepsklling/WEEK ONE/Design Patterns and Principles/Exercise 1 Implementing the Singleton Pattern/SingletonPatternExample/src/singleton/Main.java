package singleton;

public class Main {
	 public static void main(String[] args) {
	        Logger logger1 = Logger.getInstance();
	        logger1.log("First log message");

	        Logger logger2 = Logger.getInstance();
	        logger2.log("Second log message");

	        // Check if both logger references are the same
	        if (logger1 == logger2) {
	            System.out.println("Both logger instances are the same (Singleton confirmed).");
	        } else {
	            System.out.println("Logger instances are different (Singleton failed).");
	        }
	    }
}
