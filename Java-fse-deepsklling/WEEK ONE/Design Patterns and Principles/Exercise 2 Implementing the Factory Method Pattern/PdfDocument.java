package factory;

public class PdfDocument extends Document{
	@Override
	public void open() {
        System.out.println("Opening a PDF document.");
    }
}
