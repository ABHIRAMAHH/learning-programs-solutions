package calculator;

import org.junit.Test;

import caliculator.Calculator;

import static org.junit.Assert.assertEquals;

public class CalculatorTest {

    @Test
    public void testAdd() {
    	Calculator calc = new Calculator();
        int result = calc.add(5, 3);
        assertEquals(8, result);  // Expected: 8, Actual: 5+3
    }
}

