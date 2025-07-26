package com.cognisant.orm_learn;

import java.util.List;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognisant.orm_learn.Country;
import com.cognisant.orm_learn.CountryRepository;

@Service
public class CountryService {

    @Autowired
    private repository countryRepository;

    @Transactional
    public List<Model> getAllCountries() {
        return countryRepository.findAll();
    }
}
