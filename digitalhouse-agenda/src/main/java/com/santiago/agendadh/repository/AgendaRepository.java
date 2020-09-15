package com.santiago.agendadh.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.santiago.agendadh.model.Agenda;

@Repository
public interface AgendaRepository extends JpaRepository<Agenda, Long> {

}
