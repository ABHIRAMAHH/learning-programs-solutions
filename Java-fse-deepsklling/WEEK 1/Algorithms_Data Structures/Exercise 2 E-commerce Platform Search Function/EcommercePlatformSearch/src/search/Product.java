//DOMAIN MODEL

package search;

public class Product {
	private final int productId;
    private final String productName;
    private final String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category  = category;
    }

    // Getters
    public int getProductId()      { return productId; }
    public String getProductName() { return productName; }
    public String getCategory()    { return category; }

    @Override
    public String toString() {
        return String.format("[%d] %s (%s)", productId, productName, category);
    }
}
