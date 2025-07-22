//This user O(1) space complexity and more efficient

package forecast;
public class Optimisation_using_Iteration_method {
	public static double forecastIterative(double initialValue, double rate, int periods) {
	    double value = initialValue;
	    for (int i = 0; i < periods; i++) {
	        value *= (1 + rate);
	    }
	    return value;
	}
}
