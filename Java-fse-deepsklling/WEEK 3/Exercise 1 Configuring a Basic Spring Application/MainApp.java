package com.library;

import com.library.service.BoolService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        BoolService bookService = (BoolService) context.getBean("bookService");
        bookService.displayBook();
    }
}
