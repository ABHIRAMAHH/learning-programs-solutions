package forecast;

public class FinancecialForecast {
	public static double forecastValue(double initialValue, double rate, int periods) {
        
        if (periods == 0) {
            return initialValue;
        }

        
        return forecastValue(initialValue, rate, periods - 1) * (1 + rate);
    }

    public static void main(String[] args) {
        double initial = 10000.0;      
        double annualGrowth = 0.08;    
        int years = 5;

        double futureValue = forecastValue(initial, annualGrowth, years);

        System.out.printf("Future value after %d years = %.2f%n", years, futureValue);
    }
}
