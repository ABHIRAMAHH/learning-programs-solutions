package com.cognizant.spring_learn.config;

import java.util.List;
import com.cognizant.spring_learn.model.Country;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@Configuration
public class ApplicationConfig {
    @Bean
    public List<Country> countryList() {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        return (List<Country>) context.getBean("countryList");
    }
}