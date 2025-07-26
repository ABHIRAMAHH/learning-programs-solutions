//Search implementation

package search;
import java.util.Arrays;
import java.util.Comparator;
public class SearchUtils {
	public static Product linearSearchById(Product[] products, int key) {
        for (Product p : products) {
            if (p.getProductId() == key) {
                return p;                   // Best‑case O(1)
            }
        }
        return null;                        // Worst‑case O(n)
    }
	public static Product binarySearchById(Product[] sortedProducts, int key) {
        int left = 0;
        int right = sortedProducts.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int midId = sortedProducts[mid].getProductId();

            if (midId == key) {
                return sortedProducts[mid];           // Found
            } else if (midId < key) {
                left = mid + 1;                       // Search right half
            } else {
                right = mid - 1;                      // Search left half
            }
        }
        return null;                                  // Not found
    }

    public static Product[] copyAndSortById(Product[] products) {
        Product[] copy = Arrays.copyOf(products, products.length);
        Arrays.sort(copy, Comparator.comparingInt(Product::getProductId));
        return copy;
    }
}
