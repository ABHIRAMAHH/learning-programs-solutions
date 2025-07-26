package search;

public class Main {
	public static void main(String[] args) {
        Product[] catalog = {
            new Product(104, "Noise‑Cancelling Headphones", "Audio"),
            new Product(101, "Mechanical Keyboard", "Peripherals"),
            new Product(305, "Smartwatch", "Wearables"),
            new Product(212, "4K Monitor", "Displays"),
            new Product(150, "USB‑C Hub", "Accessories")
        };

        int searchId = 305;
        Product resultLinear = SearchUtils.linearSearchById(catalog, searchId);
        System.out.println("Linear search result  : " + resultLinear);

        Product[] sortedCatalog = SearchUtils.copyAndSortById(catalog);
        Product resultBinary = SearchUtils.binarySearchById(sortedCatalog, searchId);
        System.out.println("Binary search result  : " + resultBinary);

        System.out.println("Same object? " + (resultLinear == resultBinary));
    }
}
