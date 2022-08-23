package com.example.demo.controller;


import com.example.demo.model.PatientRecord;
import com.example.demo.repository.PatientRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin(origins="*")
public class PatientRecordController {

    @Autowired
    PatientRecordRepository patientRecordRepository;

    @GetMapping("/patient")
    public List<PatientRecord> getallpatients() {
        return patientRecordRepository.findAll();
    }

    @GetMapping("/patient/{patientId}")
    public PatientRecord getspecificpatient(@PathVariable Integer patientId){
        return patientRecordRepository.findById(Long.valueOf(patientId)).get();
    }

    @PostMapping("/patient")
    public List<PatientRecord> addPatient(@RequestBody PatientRecord patientRecord) {
        patientRecordRepository.save(patientRecord);
        return patientRecordRepository.findAll();
    }

    @PutMapping("/patient/{patientId}")
    public List<PatientRecord> updatepatient(@RequestBody PatientRecord patientRecord, @PathVariable Integer patientId) {
        PatientRecord patientObj = patientRecordRepository.findById(Long.valueOf(patientId)).get();
        patientObj.setName(patientRecord.getName());
        patientObj.setAge(patientRecord.getAge());
        patientObj.setAddress(patientRecord.getAddress());
        patientRecordRepository.save(patientObj);
        return patientRecordRepository.findAll();
    }

    @DeleteMapping("/patient/{patientId}")
    public List<PatientRecord> deletepatient(@PathVariable Integer patientId){
        patientRecordRepository.delete(patientRecordRepository.findById(Long.valueOf(patientId)).get());
        return patientRecordRepository.findAll();
    }
}