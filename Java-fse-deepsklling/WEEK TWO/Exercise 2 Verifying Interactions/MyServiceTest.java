package com.example;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;
class MyServiceTest {
	@Test
    public void testVerifyInteraction() {
        // Step 1: Create mock
        ExternalApi mockApi = mock(ExternalApi.class);

        // Step 2: Inject mock into service
        MyService service = new MyService(mockApi);

        // Step 3: Call the method
        service.fetchData();

        // Step 4: Verify interaction happened
        verify(mockApi).getData();
	}
}
