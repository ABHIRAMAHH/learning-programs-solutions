package example;
import org.junit.Test;
import static org.junit.Assert.*;
public class AssertionsTest {
	 public void testAssertions() {
	        assertEquals(5, 2 + 3);           // should pass
	        assertTrue(5 > 3);                // should pass
	        assertFalse(5 < 3);               // should pass
	        assertNull(null);                // should pass
	        assertNotNull(new Object());     // should pass
	    }
}
