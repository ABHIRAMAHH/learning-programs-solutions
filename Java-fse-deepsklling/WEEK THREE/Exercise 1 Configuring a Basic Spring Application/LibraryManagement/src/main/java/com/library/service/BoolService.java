package com.library.service;

import com.library.repository.BookRepository;

public class BoolService {
    private BookRepository bookRepository;

    // Setter for DI
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayBook() {
        System.out.println("Book from Repository: " + bookRepository.getBook());
    }
}
